import { useNavigation } from '@react-navigation/core';

export const useNavigationHook = () => {
  const { navigate } = useNavigation();

  //@ts-ignore
  const navigation = (goTo: string) => navigate(goTo);

  return { navigation };
};
