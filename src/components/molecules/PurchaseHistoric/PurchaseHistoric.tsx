import React from 'react';
import { StyledContainer, Typography } from '@components/atoms';
import { View } from 'react-native';
import { HeaderPurchasesHistory } from '../HeaderPurchasesHistory/HeaderPurchasesHistory';
import { PaymentHistoryList } from '../../organisms/PaymentHistoryList/payment-history-list';
import { Separator } from '@components/atoms/Separator/Separator';

export const PurchaseHistoric = () => {
  return (
    <StyledContainer direction padding={18}>
      <Separator height={20} />
      <Typography color="green-dark" variant="h2">
        Historico
      </Typography>

      {/* <HeaderPurchasesHistory /> */}


      <PaymentHistoryList />
    </StyledContainer>
  );
};
