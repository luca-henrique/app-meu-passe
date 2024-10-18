
import { useNavigationHook } from '../../hooks/useNavigation';

export const useSplashScreenModel = () => {
  const { navigation } = useNavigationHook();

  setTimeout(() => {
    navigation('StepsScreen');
  }, 3000);

  return {};
};
