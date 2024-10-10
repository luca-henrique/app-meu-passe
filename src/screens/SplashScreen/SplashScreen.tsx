import React from 'react';

import { useNavigationHook } from '../../hooks/useNavigation';
import { Typography } from '../../components/atoms/Typography/Typography';
import { LinearGradientContainer } from '../../components/atoms/Container/Container';

export const SplashScreen = () => {
  const { navigation } = useNavigationHook();

  setTimeout(() => {
    navigation('SignIn');
  }, 3000);

  return (
    <LinearGradientContainer justify="center" align="center" colors={['#4EA45D', '#2D5E35']}>
      <Typography color="white-default">Recarga Buss</Typography>
    </LinearGradientContainer>
  );
};
