import React, { useState } from 'react';
import { StyledContainer } from '../../atoms/Container/Container';
import { CardPaymentMethodOption } from '../../molecules/CardPaymentMethodOption/card-payment-method-option';

const methodsPayments = [
  {
    icon: 'pix-icon',
    text: 'PIX',
  },
  {
    icon: 'ticket-icon',
    text: 'Boleto',
  },
  {
    icon: 'card-icon',
    text: 'Cartão',
  },
];

const ListContainerCardPaymentMethods = () => {
  const [selectedCard, setSelectedCard] = useState('PIX');

  const changeSelectOptionPayment = (option: string) => {
    setSelectedCard(option);
  };

  return (
    <StyledContainer direction justify="space-between">
      {methodsPayments.map(method => {
        return (
          <CardPaymentMethodOption
            icon={method.icon}
            text={method.text}
            key={method.icon}
            selected={selectedCard === method.text}
            onPress={changeSelectOptionPayment}
          />
        );
      })}
    </StyledContainer>
  );
};

export default ListContainerCardPaymentMethods;
