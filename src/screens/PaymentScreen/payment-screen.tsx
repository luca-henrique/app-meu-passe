import React, { useState } from 'react';

import { View } from 'react-native';

import {

  StyledContainer,
} from '../../components/atoms/Container/Container';

import TextInput from '../../components/atoms/Input';
import { Typography } from '@components/atoms';
import ListContainerCardPaymentMethods from '@components/organisms/PaymentMethodList/payment-method-list';
import { Button } from '@components/atoms/Button/Button';

import { Separator } from '@components/atoms/Separator/Separator';
import { getStatusBarHeight } from '../../utils/dimesions';
import { CreditCardInformation } from '@components/molecules/CreditCardInformation/credit-card-information';
import { ContainerPaymentInformation } from '@components/molecules/PaymentInformation/payment-information';
import { PaymentMethodInvoice } from '@components/molecules/PaymentMethodInvoice/payment-method-invoice';
import { PaymentMethodCreditCard } from '@components/molecules/PaymentMethodCreditCard/payment-method-credit-card';
import { PaymentMethodPix } from '@components/molecules/PaymentMethodPix/payment-method-pix';

export const PaymentScreen = () => {
  const [passAmount, setPassAmount] = useState(0);
  const pricePassSingle = 1.35;

  return (
    <StyledContainer padding={24} gap={12}>
      <Separator height={getStatusBarHeight()} />
      <StyledContainer align="center">
        <Typography color="green-dark" variant="h1">
          Deseja realizar uma recarga?
        </Typography>
      </StyledContainer>

      <TextInput
        label="Quantidade de passes"
        onChangeText={text => setPassAmount(text)}
        text="EX: 40"
      />
      <ListContainerCardPaymentMethods />
      <CreditCardInformation />

      <StyledContainer
        justify="space-between"
        color={'white-light'}
        padding={14}>
        <ContainerPaymentInformation
          text="Quantidade de passes"
          value={passAmount}
        />
        <View style={{ padding: 2 }} />
        <ContainerPaymentInformation
          text="Valor do passe"
          value={pricePassSingle}
        />
        <View
          style={{
            padding: 3,
            borderBottomWidth: 1,
            width: '100%',
            borderBottomColor: '#E9F0EB',
          }}
        />
        <ContainerPaymentInformation
          text="Valor total"
          value={passAmount * pricePassSingle}
        />
      </StyledContainer>
      <Button onPress={() => console.log('exemple')}>Recarregar</Button>

      <PaymentMethodPix />
    </StyledContainer>
  );
};





