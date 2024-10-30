import React, { useState } from 'react';

import { View } from 'react-native';

import { StyledContainer } from '../../components/atoms/Container/Container';

import TextInput from '../../components/atoms/Input';
import { Typography } from '@components/atoms';
import { PaymentMethodList } from '@components/organisms/PaymentMethodList/payment-method-list';
import { Button } from '@components/atoms/Button/Button';

import { Separator } from '@components/atoms/Separator/Separator';
import { getStatusBarHeight } from '../../utils/dimesions';
import { CreditCardInformation } from '@components/molecules/CreditCardInformation/credit-card-information';
import { ContainerPaymentInformation } from '@components/molecules/PaymentInformation/payment-information';
import { PaymentMethodInvoice } from '@components/molecules/PaymentMethodInvoice/payment-method-invoice';
import { PaymentMethodPix } from '@components/molecules/PaymentMethodPix/payment-method-pix';
import {
  FieldNamePaymentMethodProps,

} from '../../context/payment-method';
import { usePaymentScreenModel } from './payment-screen.model';
import { usePaymentMethod } from '../../hooks/usePaymentMethod';

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
      <View>
        <Typography variant="body1" color="green-dark">
          Escolha a forma da pagamento
        </Typography>
        <PaymentMethodList />
      </View>

      <CreditCardInformation />

      <View>
        <Typography variant="body1" color="green-dark">
          Informações sobre o pagamento
        </Typography>
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
      </View>
      <Button
        onPress={handleClose}>
        Recarregar
      </Button>

      <PaymentMethodPix />
      <PaymentMethodInvoice />
    </StyledContainer>
  );
};
