import React from 'react';
import { StyledContainer, Icon } from '../../../widgets/atoms';
import { getPaymentType, PaymentStatus } from '../../../shared/mock/payment-types';


interface StatusPaymentProps {
  statusPayment: PaymentStatus
}

export const StatusPayment = ({ statusPayment }: StatusPaymentProps) => {
  const { color, icon } = getPaymentType(statusPayment);

  return (
    <StyledContainer color={color} width={64} height={64} radius={12} align="center" justify="center">
      <Icon icon={icon} width={33} height={33} />
    </StyledContainer>
  );
};
