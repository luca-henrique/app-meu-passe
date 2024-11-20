import React from 'react';
import { StyledContainer, Typography } from '../../atoms';
import { PaymentMethodList } from '../../organisms/PaymentMethodList/payment-method-list';

export const ChoosenPaymentMethod = () => {
  return (
    <StyledContainer gap={8}>
      <Typography variant="body1" color="green-dark">
        Escolha a forma da pagamento
      </Typography>
      <PaymentMethodList />
    </StyledContainer>
  );
};
