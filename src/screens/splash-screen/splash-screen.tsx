import React from 'react';

import { LinearGradientContainer, Icon } from '../../widgets/atoms';
import { useSplashScreenModel } from './model/splash-screen.model';

import { MotiView, AnimatePresence } from 'moti';

export const SplashScreen = () => {
  useSplashScreenModel();
  return (
    <LinearGradientContainer justify="center" align="center" colors={['#74cc82', '#26562e']}>
      <AnimatePresence>
        <MotiView from={{
          opacity: 0,
          scale: 0.5,
        }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'timing',

          }}>
          <Icon icon="buss-logo-icon" height={64} width={64} fill="#fff" />
        </MotiView>
      </AnimatePresence>
    </LinearGradientContainer>
  );
};


