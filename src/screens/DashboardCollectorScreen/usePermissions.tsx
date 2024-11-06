import { useCallback } from 'react';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { Dimensions, Linking, Platform } from 'react-native';


export const getShadowProps = (
  offset: number = 2,
  radius: number = 8,
  opacity: number = 0.2,
) => ({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: offset,
  },
  shadowOpacity: opacity,
  shadowRadius: radius,
  elevation: radius,
});

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const getWindowWidth = () => Dimensions.get('window').width;
export const getWindowHeight = () => Dimensions.get('window').height;

export const goToSettings = () => {
  if (isIos) {
    Linking.openURL('app-settings:');
  } else {
    Linking.openSettings();
  }
};

export enum EPermissionTypes {
  CAMERA = 'camera',
}

export type TUsePermissionsReturnType = {
  isError?: boolean;
  type: (typeof RESULTS)[keyof typeof RESULTS];
  errorMessage?: string;
};


export const usePermissions = (typeOfPermission: EPermissionTypes) => {
  const getPermission = useCallback(() => {
    //check if typeOfPermission exist in EPermissionTypes
    if (
      !typeOfPermission ||
      !Object.values(EPermissionTypes).includes(typeOfPermission)
    ) {
      throw new Error('Unsupported Type of permission.');
    }
    if (isIos) {
      switch (typeOfPermission) {
        case EPermissionTypes.CAMERA:
          return PERMISSIONS.IOS.CAMERA;
        default:
          return PERMISSIONS.IOS.CAMERA;
      }
    }

    if (isAndroid) {
      switch (typeOfPermission) {
        case EPermissionTypes.CAMERA:
          return PERMISSIONS.ANDROID.CAMERA;
        default:
          return PERMISSIONS.ANDROID.CAMERA;
      }
    }

    throw new Error('Unsupported Operating System.');
  }, [typeOfPermission]);

  const askPermissions =
    useCallback(async (): Promise<TUsePermissionsReturnType> => {
      return new Promise<TUsePermissionsReturnType>(async (resolve, reject) => {
        //ask permissions from user
        //if error present, return error
        try {
          await request(getPermission()).then(result => {
            console.log('result', result);
            switch (result) {
              case RESULTS.UNAVAILABLE:
                return reject({
                  type: RESULTS.UNAVAILABLE,
                });
              case RESULTS.DENIED:
                return reject({
                  type: RESULTS.DENIED,
                });
              case RESULTS.GRANTED:
                return resolve({
                  type: RESULTS.GRANTED,
                });
              case RESULTS.BLOCKED:
                return reject({
                  type: RESULTS.BLOCKED,
                });
              case RESULTS.LIMITED:
                return resolve({
                  type: RESULTS.LIMITED,
                });
            }
          });
        } catch (e: { data: { message: string | undefined } } | any) {
          return reject({
            isError: true,
            errorMessage:
              e?.data?.message ||
              e.message ||
              'Something went wrong while taking permissions.',
          });
        }
      });
    }, [getPermission]);

  return {
    askPermissions,
  };
};
