import { usePaymentMethod } from '../../hooks/usePaymentMethod';
import { useState } from 'react';

export const usePaymentScreenModel = () => {
  const [passAmount, setPassAmount] = useState(0);
  const pricePassSingle = 1.35;
  const { visible, handleVisiblePaymentMethod } = usePaymentMethod();


  return { passAmount, setPassAmount, pricePassSingle, choosenMethod: visible, handleVisiblePaymentMethod };
};
