import React from 'react';

import { Typography } from '../../components/atoms/Typography/Typography';
import { LinearGradientContainer } from '../../components/atoms/Container/Container';

export const SplashScreenView = () => {
  return (
    <LinearGradientContainer justify="center" align="center" colors={['#4EA45D', '#2D5E35']}>
      <Typography color="white-default">MeuPasse</Typography>
    </LinearGradientContainer>
  );
};
