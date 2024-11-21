import React from 'react';

import { StyledContainer, Typography, Separator } from '../../atoms';
import { HistoryPaymentProps } from '../../organisms/payment-history-list/payment-history-list';

import { StatusPayment } from '../status-payment/status-payment';

export const CardHistoryPayment = ({
  status_payment,
  price,
  id,
  payment_type,
  date,
}: HistoryPaymentProps) => {
  return (
    <StyledContainer padding={16} direction color="white-light" >
      <StatusPayment statusPayment={status_payment} />
      <Separator height={8} />
      <StyledContainer width={190} height={64} justify="space-between">
        <Typography variant="body2" color="green-dark">
          #{id}
        </Typography>
        <Typography variant="body2" color="green-dark">
          {payment_type}
        </Typography>
        <Typography variant="body2" color="green-dark">
          R${price}
        </Typography>
      </StyledContainer>
      <Typography variant="body2" color="green-dark">
        {date}
      </Typography>
    </StyledContainer>
  );
};
