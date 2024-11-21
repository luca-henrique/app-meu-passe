import React from 'react';
import { PaymentHistoryList } from '../../widgets/organisms/payment-history-list/payment-history-list';
import { StyledContainer, Typography } from '../../widgets/atoms';
import { Separator } from '../../widgets/atoms/Separator/Separator';
import { HeaderPurchasesHistory } from '../../widgets/molecules/HeaderPurchasesHistory/HeaderPurchasesHistory';

export const HistoryPaymentScreen = () => {
  return (
    <StyledContainer padding={18} gap={4}>
      <Separator height={20} />
      <Typography color="green-dark" variant="h2">
        Historico
      </Typography>

      {/* <HeaderPurchasesHistory /> */}

      <PaymentHistoryList />
    </StyledContainer>
  );
};
