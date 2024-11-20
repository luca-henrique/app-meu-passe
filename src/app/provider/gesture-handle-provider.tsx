import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface GestureHandlerProviderProps {
  children: React.ReactNode
}


export const GestureHandlerProvider = ({ children }: GestureHandlerProviderProps) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {children}
    </GestureHandlerRootView>
  );
};
