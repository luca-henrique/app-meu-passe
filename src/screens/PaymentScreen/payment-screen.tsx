import React from 'react';

import { PaymentScreenView } from './payment-screen.view';
import { usePaymentScreenModel } from './payment-screen.model';
import { PaymentMethodProvider } from '../../context/payment-method';

export const PaymentScreen = () => {
  const props = usePaymentScreenModel();

  console.log(props);

  return (
    <PaymentMethodProvider>
      <PaymentScreenView
        {...props}
      />
    </PaymentMethodProvider>
  );
};
