import { StyledContainer, Separator, Typography } from '../../widgets/atoms';
import React from 'react';
import { View } from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import { HeaderUserInformation } from '../../widgets/molecules/HeaderUserInformation/header-user-information';


export const DashboardScreen = () => {
  const cpfMock = '234.234.456-45';

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderUserInformation />
      <Separator height={20} />
      <StyledContainer padding={14} justify="center" align="center">
        <View
          style={{
            padding: 14,
            backgroundColor: '#fff',
            width: '100%',
            height: 300,
            shadowColor: '#d3d3d3',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 1,
            elevation: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
          }}>
          <QRCode
            value={cpfMock}
            size={200}
            logoMargin={10}
            logoBorderRadius={15}
            linearGradient={['#74cc82', '#26562e']}
            enableLinearGradient
          />
          <View style={{
            display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center',
            alignItems: 'center', gap: 4,
          }}>
            <Typography variant="body1" color="gray-300">Scan o</Typography>
            <Typography variant="body1" color="green-default">QR Code</Typography>
            <Typography variant="body1" color="gray-300">para liberar</Typography>
          </View>
        </View>
      </StyledContainer>
    </View>
  );
};
