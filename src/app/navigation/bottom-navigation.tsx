import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '../../widgets/atoms';
import { getColor } from '../../shared/common/colors';
import { DashboardCollectorScreen } from '../../screens/DashboardCollectorScreen/dashboard-collector-screen';
import { DashboardScreen } from '../../screens/DashboardScreen/dashboard-screen';
import { HistoryPaymentScreen } from '../../screens/HistoryPaymentScreen/history-payment-screen';
import { SignOut } from '../../screens/SignOutScreen/sign-out-screen';
import { TariffScreen } from '../../screens/TariffScreen/tariff-screen';
import { scale, getBottomSpaceHeight } from '../../shared/utils/dimesions';


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

const User = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={defaultScreenOptions} >
      <Tab.Screen
        name="Inicio"
        component={DashboardScreen}
        options={{
          tabBarIcon: () => <TabBarIcon icon="home-icon" label="Inicio" />,
        }}
      />
      <Tab.Screen
        name="Historico"
        component={HistoryPaymentScreen}
        options={{
          tabBarIcon: () => <TabBarIcon icon="home-icon" label="Historico" />,
        }}
      />
      <Tab.Screen
        name="Tarifa"
        component={TariffScreen}
        options={{
          tabBarIcon: () => <TabBarIcon icon="home-icon" label="Tarifa" />,
        }}
      />

      <Tab.Screen
        name="Sair"
        component={SignOut}
        options={{
          tabBarIcon: () => <TabBarIcon icon="leave-icon" label="sair" />,
        }}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault();
          },
        })}
      />
    </Tab.Navigator>
  );
};


const Cobrador = () => {
  return (
    <Tab.Navigator
      initialRouteName="Recarga"
      screenOptions={defaultScreenOptions} >
      <Tab.Screen
        name="Recarga"
        component={DashboardCollectorScreen}
        options={{
          tabBarIcon: () => <TabBarIcon icon="history-icon" label="recarga" />,
        }}
      />
      <Tab.Screen
        name="Sair"
        component={SignOut}
        options={{
          tabBarIcon: () => <TabBarIcon icon="leave-icon" label="sair" />,
        }}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault();
          },
        })}
      />
    </Tab.Navigator>
  );
};


export const DashboardNavigation = () => {



  return (
    <User />
  );
};

