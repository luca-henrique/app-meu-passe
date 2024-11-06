import { Separator } from '@components/atoms/Separator/Separator';
import { StyledContainer } from '../../components/atoms';
import React from 'react';
import { Dimensions, View } from 'react-native';


import QRCode from 'react-native-qrcode-svg';
import { HeaderUserInformation } from '@components/molecules/HeaderUserInformation/header-user-information';

const { width } = Dimensions.get('screen');

export const DashboardScreen = () => {


  const cpfMock = '234.234.456-45';



  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderUserInformation />
      <Separator height={20} />
      <StyledContainer padding={14} justify="center" align="center">
        <QRCode
          value={cpfMock}
          size={width - 40}
          color="black"
          backgroundColor="white"
          logoSize={40}
          logoMargin={10}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
      </StyledContainer>
    </View>
  );
};
