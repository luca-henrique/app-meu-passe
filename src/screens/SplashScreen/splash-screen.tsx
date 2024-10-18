import React from 'react';


import { useSplashScreenModel } from './splash-screen.model';
import { SplashScreenView } from './splash-screen.view';

export const SplashScreen = () => {
  useSplashScreenModel();

  return (
    <SplashScreenView />
  );
};
