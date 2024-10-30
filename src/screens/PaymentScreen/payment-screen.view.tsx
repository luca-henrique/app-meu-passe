import React from 'react';


import { StyledContainer } from '../../components/atoms/Container/Container';

import TextInput from '../../components/atoms/Input';
import { Typography } from '@components/atoms';
import { Button } from '@components/atoms/Button/Button';

import { Separator } from '@components/atoms/Separator/Separator';
import { getStatusBarHeight } from '../../utils/dimesions';
import { CreditCardInformation } from '@components/molecules/CreditCardInformation/credit-card-information';
import { PaymentMethodInvoice } from '@components/molecules/PaymentMethodInvoice/payment-method-invoice';
import { PaymentMethodPix } from '@components/molecules/PaymentMethodPix/payment-method-pix';
import {
  FieldNamePaymentMethodProps,

} from '../../context/payment-method';
import { usePaymentScreenModel } from './payment-screen.model';
import { usePaymentMethod } from '../../hooks/usePaymentMethod';
import { PaymentMethodInformation } from '@components/molecules/PaymentMethodInformation/payment-method-information';
import { ChoosenPaymentMethod } from '@components/molecules/ChoosenPaymentMethod/choosen-payment-method';

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
