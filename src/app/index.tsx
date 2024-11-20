import React from 'react';
import { StackNavigation } from './navigation/stack-navigation';
import { NavigationProvider } from './provider/navigation-provider';
import { ReactQueryProvider } from './provider/react-query-provider';


import { GestureHandlerProvider } from './provider/gesture-handle-provider';

const App = () => {
  return (
    <GestureHandlerProvider>
      <ReactQueryProvider>
        <NavigationProvider>
          <StackNavigation />
        </NavigationProvider>
      </ReactQueryProvider>
    </GestureHandlerProvider>
  );
};

export default App;
