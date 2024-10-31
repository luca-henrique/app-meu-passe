import { Separator } from '@components/atoms/Separator/Separator';
import { StyledContainer, Typography } from '../../components/atoms';
import { BalanceCard } from '../../components/molecules/BalanceCard/balance-card';
import React from 'react';
import { getStatusBarHeight, scale } from '../../utils/dimesions';
import { Dimensions, View } from 'react-native';
import { getColor } from '../../common/colors';
import { currencyFormat } from '../../utils/currency-format';

import QRCode from 'react-native-qrcode-svg';

const { width } = Dimensions.get('screen');

export const DashboardScreen = () => {
  return (
    <StyledContainer>
      <View style={{ backgroundColor: getColor('green-default'), width: '100%', height: 220 + getStatusBarHeight(), padding: scale(14), borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }} >
        <Separator height={getStatusBarHeight() + scale(10)} />
        <Typography color="white-default">Olá, Lucas</Typography>
        <StyledContainer direction gap={10}>
          <View style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography color="white-default" variant="body2">
              Saldo
            </Typography>
            <Typography color="white-default" variant="body1">
              {currencyFormat(10)}
            </Typography>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography color="white-default" variant="body2">
              Passes
            </Typography>
            <Typography color="white-default" variant="body1">
              10
            </Typography>
          </View>
        </StyledContainer>
      </View>
      <Separator height={20} />
      <StyledContainer padding={14} justify="center" align="center">
        <QRCode
          value={'000.000.000-00'}
          size={width - 40}
          color="black"
          backgroundColor="white"
          logoSize={40}
          logoMargin={10}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
      </StyledContainer>
    </StyledContainer>
  );
};
