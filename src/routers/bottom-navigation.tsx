import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { getColor } from '../common/colors';

import { DashboardScreen } from '../screens/DashboardScreen/dashboard-screen';
import { TabBarIcon } from '../components/atoms/TabBarIcon/TabBarIcon';
import { scale, getBottomSpaceHeight } from '../utils/dimesions';
import { HistoryPaymentScreen } from '../screens/HistoryPaymentScreen/history-payment-screen';


const Tab = createBottomTabNavigator();


const defaultScreenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    height: scale(70) + getBottomSpaceHeight(),
    backgroundColor: getColor('green-dark'),
    paddingBottom: 5,
  },
  tabBarLabelStyle: {
    fontSize: 12,
  },
  tabBarIconStyle: {
    marginBottom: -3, // Isso ajuda a alinhar melhor o ícone no centro
  },
};

export const DashboardNavigation = () => {

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={defaultScreenOptions}>
      <Tab.Screen
        name="Inicio"
        component={DashboardScreen}
        options={{
          tabBarIcon: () => <TabBarIcon icon="home-icon" label="Home" />,
        }}
      />
      <Tab.Screen
        name="Historico"
        component={HistoryPaymentScreen}
        options={{
          tabBarIcon: () => <TabBarIcon icon="home-icon" label="Historico" />,
        }}
      />
    </Tab.Navigator>
  );
};

