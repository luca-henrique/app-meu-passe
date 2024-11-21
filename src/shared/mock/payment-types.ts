import {IconKeyProps} from '../assets/icons';
import {ColorKeyProps} from '../common/colors';

export type PaymentStatus = 'pending' | 'cancel' | 'confirmation';

type PaymentType = {
  icon: IconKeyProps;
  color: ColorKeyProps;
};

export const paymentTypes: Record<PaymentStatus, PaymentType> = {
  pending: {icon: 'pending-icon', color: 'yellow-light'},
  cancel: {icon: 'cancel-payment-icon', color: 'red-light'},
  confirmation: {
    icon: 'confirmation-payment-icon',
    color: 'green-light',
  },
};

export type PaymentTypeProps = typeof paymentTypes;

export type PaymentTypeKeyProps = keyof PaymentTypeProps;

type IconValueReturn = PaymentTypeProps[PaymentTypeKeyProps];

export const getPaymentType = (name: PaymentTypeKeyProps): IconValueReturn => {
  return paymentTypes[name];
};
