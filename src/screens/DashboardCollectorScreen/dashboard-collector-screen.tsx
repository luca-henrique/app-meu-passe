import { useEffect, useRef, useState } from 'react';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';
import React from 'react';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { Alert, BackHandler, Platform, Text, TouchableOpacity, View } from 'react-native';

const isIos = Platform.OS === 'ios';

export enum EPermissionTypes {
  CAMERA = 'camera',
}

import {
  CameraRuntimeError,
  useCodeScanner,
} from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/core';
import { useAppStateListener } from './ask';
import { RESULTS } from 'react-native-permissions';
import { goToSettings, usePermissions } from './usePermissions';
import { useMutation } from 'react-query';

const postDebitBalance = async (data) => {
  const response = await fetch('https://api-meu-passe.onrender.com/balance/debit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Erro na requisição');
  }

  return response.json();
};

export const DashboardCollectorScreen = () => {

  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');
  const [cameraShown, setCameraShown] = useState(false);
  const [qrText, setQrText] = useState('');
  const [flash, setFlash] = useState<'on' | 'off'>(isIos ? 'off' : 'on');

  console.log(qrText);

  const onReadCode = (value: string) => {
    console.log(value);
    setQrText(value);
    setCameraShown(false);
  };

  const { appState } = useAppStateListener();

  const mutation = useMutation(postDebitBalance);

  const handleDebit = (codeType: string, code: string) => {
    mutation.mutate({ type: 'money', codeType, code });
  };

  const camera = useRef<Camera>(null);
  const isFocused = useIsFocused();
  const [isCameraInitialized, setIsCameraInitialized] = useState(isIos);
  const [isActive, setIsActive] = useState(isIos);
  const [codeScanned, setCodeScanned] = useState('');

  const [userTag, setUserTag] = useState('');

  console.log(userTag);

  useEffect(() => {
    if (codeScanned) {
      onReadCode(codeScanned);
    }
  }, [codeScanned]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isCameraInitialized) {
      timeout = setTimeout(() => {
        setIsActive(true);
        setFlash('off');
      }, 1000);
    }
    setIsActive(false);
    return () => {
      clearTimeout(timeout);
    };
  }, [isCameraInitialized]);

  const onInitialized = () => {
    setIsCameraInitialized(true);
  };

  const debitPassUserByNfc = (nfc: string) => {
    handleDebit('nfc', nfc);
  };

  const debitPassUserByQrCode = (nfc: string) => {
    handleDebit('qrcode', nfc);
    setCameraShown(false);
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: codes => {
      if (codes.length > 0) {
        if (codes[0].value) {
          setIsActive(false);
          debitPassUserByQrCode(codes[0]?.value);
        }
      }
      return;
    },
  });


  const onError = (error: CameraRuntimeError) => {
    Alert.alert('Error!', error.message);
  };


  let items = [
    {
      id: 1,
      title: 'QR code Scanner',
    },
  ];

  function handleBackButtonClick() {
    if (cameraShown) {
      setCameraShown(false);
    }
    return false;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);


  useEffect(() => {
    const initializeNfc = async () => {
      const isSupported = await NfcManager.isSupported();
      if (isSupported) {
        try {
          await NfcManager.start();
          console.log('NFC iniciado com sucesso');
          await readNdef(); // Inicia leitura após inicializar NFC com sucesso
        } catch (error) {
          console.error('Erro ao iniciar NFC:', error);
        }
      } else {
        console.warn('NFC não suportado');
      }
    };

    initializeNfc();
  }, []);

  useEffect(() => {
    requestPermission();
  }, []);

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
      if (tag?.id) {
        debitPassUserByNfc(tag?.id);
      }
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  const { askPermissions } = usePermissions(EPermissionTypes.CAMERA);

  const takePermissions = async () => {
    askPermissions()
      .then(response => {
        //permission given for camera
        if (
          response.type === RESULTS.LIMITED ||
          response.type === RESULTS.GRANTED
        ) {
          setCameraShown(true);
        }
      })
      .catch(error => {
        if ('isError' in error && error.isError) {
          Alert.alert(
            error.errorMessage ||
            'Something went wrong while taking camera permission',
          );
        }
        if ('type' in error) {
          if (error.type === RESULTS.UNAVAILABLE) {
            Alert.alert('This feature is not supported on this device');
          } else if (
            error.type === RESULTS.BLOCKED ||
            error.type === RESULTS.DENIED
          ) {
            Alert.alert(
              'Permission Denied',
              'Please give permission from settings to continue using camera.',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'Go To Settings', onPress: () => goToSettings() },
              ],
            );
          }
        }
      });
  };

  if (!hasPermission) { return <></>; }
  if (device == null) { return <></>; }

  return (
    <View style={{ flex: 1 }}>
      {items.map(eachItem => {
        return (
          <TouchableOpacity
            onPress={takePermissions}
            activeOpacity={0.5}
            key={eachItem.id}
          >
            <Text>{eachItem.title}</Text>
          </TouchableOpacity>
        );
      })}
      {cameraShown && (
        <Camera
          torch={flash}
          onInitialized={onInitialized}
          ref={camera}
          onError={onError}
          photo={false}
          style={{ flex: 1 }}
          device={device}
          codeScanner={codeScanner}
          isActive={
            isActive &&
            isFocused &&
            appState === 'active' &&
            isCameraInitialized
          }
        />
      )}
    </View>
  );
};
