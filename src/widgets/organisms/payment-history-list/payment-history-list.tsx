import React from 'react';
import { CardHistoryPayment } from '../../molecules/card-history-payment/card-history-payment';
import { Container } from './style';

import { FlatList } from 'react-native';

import { Separator } from '../../atoms';

import { historyPayment } from '../../../shared/mock/history-payment';
import { PaymentStatus } from '../../../shared/mock/payment-types';


type PAYMENT_TYPE = 'PIX' | 'INVOICE' | 'CREDIT_CARD' | 'DEBIT_CARD';

export type HistoryPaymentProps = {
  id: number;
  status_payment: PaymentStatus;
  payment_type: PAYMENT_TYPE;
  price: number;
  date: string;
};


export const PaymentHistoryList = () => {
  return (
    <Container>
      <FlatList
        data={historyPayment}
        renderItem={({ item }) => (
          <CardHistoryPayment
            {...item}
            key={`item-history-payment-${item.id}`}
          />
        )}
        ItemSeparatorComponent={() => <Separator height={6} />}
      />
    </Container>
  );
};
