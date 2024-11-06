import React from 'react';
import { View } from 'react-native';
import { StyledContainer, Typography } from '@components/atoms';
import { currencyFormat } from '../../../utils/currency-format';

import { Header } from './style';


export const HeaderUserInformation = () => {
  return (
    <Header>
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
    </Header>
  );
};
