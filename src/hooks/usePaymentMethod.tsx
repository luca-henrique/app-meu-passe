'use client';

import { useContext } from 'react';

import { PaymentMethodContext } from '../context/payment-method';

export const usePaymentMethod = () => {
  const {
    handleVisiblePaymentMethod,
    handleClosePaymentMethodModal,
    handleChoosePaymentMethod,

    pix,
    credit_card,
    invoice,
    visible,
  } = useContext(PaymentMethodContext);


  return {
    handleVisiblePaymentMethod,
    handleClosePaymentMethodModal,
    handleChoosePaymentMethod,

    pix,
    credit_card,
    invoice,
    visible,
  };
};
