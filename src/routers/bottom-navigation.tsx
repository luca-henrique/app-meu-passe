import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { getColor } from '../common/colors';

import { DashboardScreen } from '../screens/DashboardScreen/dashboard-screen';
import { TabBarIcon } from '../components/atoms/TabBarIcon/TabBarIcon';
import { scale, getBottomSpaceHeight } from '../utils/dimesions';
import { HistoryPaymentScreen } from '../screens/HistoryPaymentScreen/history-payment-screen';
import { TariffScreen } from '../screens/TariffScreen/tariff-screen';
import { SignOut } from '../screens/SignOutScreen/sign-out-screen';
import { PaymentScreen } from '../screens/PaymentScreen/payment-screen';
import { PaymentMethodInvoice } from '@components/molecules/PaymentMethodInvoice/payment-method-invoice';
import { DashboardCollectorScreen } from '../screens/DashboardCollectorScreen/dashboard-collector-screen';


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
      <Tab.Screen
        name="Tarifa"
        component={TariffScreen}
        options={{
          tabBarIcon: () => <TabBarIcon icon="home-icon" label="Tarifca" />,
        }}
      />

      {/* <Tab.Screen
        name="Recarga"
        component={PaymentScreen}
        options={{
          tabBarIcon: () => <TabBarIcon icon="history-icon" label="recarga" />,
        }}
      /> */}

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
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
          },
        })}
      />
    </Tab.Navigator>
  );
};

