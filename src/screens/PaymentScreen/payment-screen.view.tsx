import React from 'react';


import { StyledContainer, TextInput, Typography, Button, Separator } from '../../widgets/atoms';


import { getStatusBarHeight } from '../../shared/utils/dimesions';
import { CreditCardInformation } from '../../widgets/molecules/CreditCardInformation/credit-card-information';
import { PaymentMethodInvoice } from '../../widgets/molecules/PaymentMethodInvoice/payment-method-invoice';
import { PaymentMethodPix } from '../../widgets/molecules/PaymentMethodPix/payment-method-pix';
import {
  FieldNamePaymentMethodProps,

} from '../../app/provider/payment-method';
import { usePaymentScreenModel } from './payment-screen.model';
import { usePaymentMethod } from '../../app/provider/usePaymentMethod';
import { PaymentMethodInformation } from '../../widgets/molecules/PaymentMethodInformation/payment-method-information';
import { ChoosenPaymentMethod } from '../../widgets/molecules/ChoosenPaymentMethod/choosen-payment-method';

export type PaymentScreenModelProps = ReturnType<typeof usePaymentScreenModel>;

export const PaymentScreenView = ({
  passAmount,
  setPassAmount,
  pricePassSingle,
}: PaymentScreenModelProps) => {

  const { handleVisiblePaymentMethod, visible } = usePaymentMethod();

  const handleClose = () => {
    if (visible !== 'credit_card') {
      handleVisiblePaymentMethod(
        visible as FieldNamePaymentMethodProps,
      );
    }
  };


  return (
    <StyledContainer padding={24} gap={8}>
      <Separator height={getStatusBarHeight()} />
      <Typography color="green-dark" variant="h1">
        Deseja realizar uma recarga?
      </Typography>

      <TextInput
        label="Quantidade de passes"
        onChangeText={text => setPassAmount(text)}
        text="EX: 40"
      />

      <ChoosenPaymentMethod />
      <CreditCardInformation />
      <PaymentMethodInformation pricePassSingle={pricePassSingle} passAmount={passAmount} />

      <Button
        onPress={handleClose}>
        Recarregar
      </Button>

      <PaymentMethodPix />
      <PaymentMethodInvoice />
    </StyledContainer>
  );
};
