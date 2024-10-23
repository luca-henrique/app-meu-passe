import React from 'react';
import { PaymentHistoryList } from '@components/organisms/PaymentHistoryList/payment-history-list';
import { StyledContainer, Typography } from '@components/atoms';
import { Separator } from '@components/atoms/Separator/Separator';
import { HeaderPurchasesHistory } from '@components/molecules/HeaderPurchasesHistory/HeaderPurchasesHistory';

export const HistoryPaymentScreen = () => {
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
