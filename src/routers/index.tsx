import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../screens/SignInScreen/sign-in-screen';
import { SignUpScreen } from '../screens/SignUpScreen/sign-up-screen';
import { StepsScreen } from '../screens/StepsScreen/steps-screen';
import { RecoveryAccountScreen } from '../screens/RecoveryAccountScreen/recovery-account-screen';
import { DashboardScreen } from '../screens/DashboardScreen/dashboard-screen';
import { SplashScreen } from '../screens/SplashScreen/splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="StepsScreen" component={StepsScreen} />
        <Stack.Screen name="RecoveryAccountScreen" component={RecoveryAccountScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
