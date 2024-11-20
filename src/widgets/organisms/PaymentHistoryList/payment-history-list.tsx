import React from 'react';
import { CardItemHistoryPayment } from '../../../widgets/molecules/CardItemHistoryPayment/CardItemHistoryPayment';
import { Container } from './style';

import { PurchaseHistoric } from '../../../widgets/molecules/PurchaseHistoric/PurchaseHistoric';


type STATUS_PAYMENT = 'confirmation' | 'pending' | 'failed' | 'cancel'

type PAYMENT_TYPE = 'PIX' | 'INVOICE' | 'CREDIT_CARD' | 'DEBIT_CARD'

export type PaymentProps = {
  id: number;
  status_payment: STATUS_PAYMENT; // Se houver outros status
  payment_type: PAYMENT_TYPE;     // Inclua outros tipos se necessário
  price: number;
  date: string;                                           // Pode usar `Date` se preferir lidar com objetos de data
};

export const historyPayments: PaymentProps[] = [
  {
    id: 5450,
    status_payment: 'confirmation',
    payment_type: 'PIX',
    price: 39.90,
    date: '19/11/2021',
  },
  {
    id: 4922,
    status_payment: 'cancel',
    payment_type: 'INVOICE',
    price: 39.90,
    date: '19/11/2021',
  },
  {
    id: 5021,
    status_payment: 'pending',
    payment_type: 'CREDIT_CARD',
    price: 39.90,
    date: '19/11/2021',
  },
  {
    id: 5544,
    status_payment: 'pending',
    payment_type: 'INVOICE',
    price: 39.90,
    date: '19/11/2021',
  },
];

export const PaymentHistoryList = () => {
  return (
    <Container>
      {historyPayments.map((item: PaymentProps) => {
        return <CardItemHistoryPayment {...item} key={`item-history-payment-${item.id}`} />;
      })}
    </Container>
  );
};
