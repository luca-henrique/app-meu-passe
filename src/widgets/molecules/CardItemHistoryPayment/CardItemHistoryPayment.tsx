import React from 'react';

import { getColor } from '../../../shared/common/colors';
import { StyledContainer, Typography, Icon } from '../../atoms';
import { Separator } from '../../atoms/Separator/Separator';
import { PaymentProps } from '../../organisms/PaymentHistoryList/payment-history-list';
import { View } from 'react-native';

const PriceInformation = ({ item }) => {
  return (
    <StyledContainer direction width={180}>
      <Typography variant="body2" color="green-dark">
        #{item.id}
      </Typography>
      <Typography variant="body2" color="green-dark">
        {item.payment_type}
      </Typography>
      <Typography variant="body2" color="green-dark">
        R${item.price}
      </Typography>
    </StyledContainer>
  );
};

const paymentTypes = {
  pending: { icon: 'pending-icon', color: getColor('yellow-light') },
  cancel: { icon: 'cancel-payment-icon', color: getColor('red-light') },
  confirmation: {
    icon: 'confirmation-payment-icon',
    color: getColor('green-light'),
  },
};

const ContainerInformations = ({ item }) => {
  return (
    <StyledContainer>
      <PriceInformation item={item} />
      <Typography variant="body2" color="green-dark">
        {item.date}
      </Typography>
    </StyledContainer>
  );
};

const CardStatusPayment = ({ statusPayment }) => {
  const { color, icon } = paymentTypes[statusPayment];

  return (
    <View color={color}>
      <Icon icon={icon} width={33} height={33} />
    </View>
  );
};

export const CardItemHistoryPayment = ({
  status_payment,
  price,
  id,
  payment_type,
  date,
}: PaymentProps) => {
  return (
    <StyledContainer padding={16} color="white-light">
      <CardStatusPayment statusPayment={status_payment} />
      <Separator height={8} />
      <StyledContainer>
        <StyledContainer direction width={180}>
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
      </StyledContainer>
    </StyledContainer>
  );
};
