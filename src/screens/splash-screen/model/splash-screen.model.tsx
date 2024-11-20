
import { useNavigationHook } from '../../../app/provider/useNavigation';

export const useSplashScreenModel = () => {
  const { navigation } = useNavigationHook();

  setTimeout(() => {
    navigation('SignInScreen');
  }, 3000);

  return {};
};
