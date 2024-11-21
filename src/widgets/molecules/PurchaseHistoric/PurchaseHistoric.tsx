import React from 'react';
import { StyledContainer, Typography } from '../../atoms';
import { HeaderPurchasesHistory } from '../HeaderPurchasesHistory/HeaderPurchasesHistory';
import { PaymentHistoryList } from '../../organisms/payment-history-list/payment-history-list';
import { Separator } from '../../atoms';

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
