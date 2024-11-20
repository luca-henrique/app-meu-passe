import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, SignInScreen } from '../../screens/';

import { DashboardNavigation } from './bottom-navigation';

const Stack = createNativeStackNavigator();


export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="DashboardScreen" component={DashboardNavigation} />
      {/*<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="RecoveryAccountScreen" component={RecoveryAccountScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardNavigation} /> */}
    </Stack.Navigator>
  );
};



