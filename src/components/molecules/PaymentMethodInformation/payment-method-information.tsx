import React from 'react';
import { StyledContainer, Typography } from '@components/atoms';
import { ContainerPaymentInformation } from '../PaymentInformation/payment-information';

interface PaymentMethodInformationProps {
  pricePassSingle: number;
  passAmount: number
}

export const PaymentMethodInformation = ({ pricePassSingle, passAmount }: PaymentMethodInformationProps) => {
  return (
    <StyledContainer gap={8}>
      <Typography variant="body1" color="green-dark">
        Informações sobre o pagamento
      </Typography>
      <StyledContainer
        radius={8}
        justify="space-between"
        color={'white-light'}
        padding={14}
        gap={2}>
        <ContainerPaymentInformation
          text="Valor do passe"
          value={pricePassSingle}
        />
        <ContainerPaymentInformation
          text="Quantidade de passes"
          value={passAmount}
        />

        <ContainerPaymentInformation
          text="Valor total"
          value={passAmount * pricePassSingle}
        />
      </StyledContainer>
    </StyledContainer>
  );
};
