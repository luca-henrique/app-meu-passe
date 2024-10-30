import React from 'react';
import { StyledContainer } from '../../atoms/Container/Container';
import { CardPaymentMethodOption } from '../../molecules/CardPaymentMethodOption/card-payment-method-option';
import { usePaymentMethod } from '../../../hooks/usePaymentMethod';
import { FieldNamePaymentMethodProps } from '@src/context/payment-method';


interface PaymentMethod {
  icon: string;
  text: string
  type: FieldNamePaymentMethodProps
}

const methodsPayments: PaymentMethod[] = [
  {
    icon: 'pix-icon',
    type: 'pix',
    text: 'PIX',
  },
  {
    icon: 'ticket-icon',
    type: 'invoice',
    text: 'Boleto',
  },
  {
    icon: 'card-icon',
    type: 'credit_card',
    text: 'Cartão',
  },
];


export const PaymentMethodList = () => {
  const { handleChoosePaymentMethod, visible } = usePaymentMethod();

  const changeSelectOptionPayment = (option: FieldNamePaymentMethodProps) => {
    handleChoosePaymentMethod(option);
  };

  return (
    <StyledContainer direction justify="space-between">
      {methodsPayments.map(method => {
        return (
          <CardPaymentMethodOption
            {...method}
            key={`${method.type}`}
            selected={visible === method.type}
            onPress={() => changeSelectOptionPayment(method.type)}
          />
        );
      })}
    </StyledContainer>
  );
};

