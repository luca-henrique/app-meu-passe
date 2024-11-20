import ArrowLeft from './arrow-left.svg';
import ArrowRight from './arrow-right.svg';
import Ticket from './ticket.svg';
import Cancel from './cancel.svg';
import Card from './card.svg';
import CheckCircle from './check_circle.svg';
import EyeClose from './eye-close.svg';
import EyeOpen from './eye-open.svg';
import EyeOpenError from './eye-open-error.svg';
import History from './history.svg';
import Home from './home.svg';
import Pix from './pix.svg';
import Leave from './leave.svg';
import Tariff from './tariff.svg';
import Time from './time.svg';

import ArrowLeftGreen from './arrow-left-green.svg';

import Pending from './pending.svg';
import Confirmation from './confirmation.svg';
import CancelPayment from './cancel_payment.svg';

import CreditCard from './payment.svg';

import BussLogoIcon from './buss-logo-icon.svg';

export const Icons = {
  'arrow-left-icon': ArrowLeft,
  'arrow-right-icon': ArrowRight,
  'ticket-icon': Ticket,
  'cancel-icon': Cancel,
  'card-icon': Card,
  'check-circle-icon': CheckCircle,
  'eye-close-icon': EyeClose,
  'eye-open-icon': EyeOpen,
  'eye-open-error-icon': EyeOpenError,
  'history-icon': History,
  'home-icon': Home,
  'pix-icon': Pix,
  'leave-icon': Leave,
  'tariff-icon': Tariff,
  'time-icon': Time,
  'arrow-left-green-icon': ArrowLeftGreen,
  'pending-icon': Pending,
  'cancel-payment-icon': CancelPayment,
  'confirmation-payment-icon': Confirmation,
  'credit-card-icon': CreditCard,
  'buss-logo-icon': BussLogoIcon,
} as const;

export type IconProps = typeof Icons;

export type IconKeyProps = keyof IconProps;

type IconValueReturn = IconProps[IconKeyProps];

export const getIcon = (name: IconKeyProps): IconValueReturn => {
  return Icons[name];
};
