
import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';

interface NavigationProviderProps {
  children: ReactNode
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  );
};
