import React from 'react';
import { View } from 'react-native';
import { Separator, StyledContainer, Typography } from '../../atoms';
import { currencyFormat } from '../../../shared/utils/currency-format';

import { Header } from './style';

import { getStatusBarHeight } from '../../../shared/utils/dimesions';
import { isIOS } from '../../../shared/utils/native';

export const HeaderUserInformation = () => {

  return (
    <Header>
      <Separator height={isIOS() ? getStatusBarHeight() : 1} />
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
