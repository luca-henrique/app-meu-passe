import { getColor } from "@src/common/colors";

const paymentTypes = {
  pending: { icon: 'pending-icon', color: getColor('yellow-light') },
  cancel: { icon: 'cancel-payment-icon', color: getColor('red-light') },
  confirmation: {
    icon: 'confirmation-payment-icon',
    color: getColor('green-light'),
  },
};


export const CardStatusPayment = ({ statusPayment }) => {
  const { color, icon } = paymentTypes[statusPayment];

  return (
    <CardContainer color={color}>
      <Icon icon={icon} width={33} height={33} />
    </CardContainer>
  );
};