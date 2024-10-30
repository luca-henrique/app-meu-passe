import React from 'react';
import { ContainerCardPaymentMethods } from './style';
import { StyledContainer } from '../../atoms/Container/Container';
import { Typography } from '../../atoms/Typography/Typography';
import { Icon } from '@components/atoms/Icon';
import { Separator } from '@components/atoms/Separator/Separator';

export const CardPaymentMethodOption = ({ icon, text, selected, onPress }) => {

  return (
    <ContainerCardPaymentMethods onPress={onPress}>
      <StyledContainer
        width={100}
        color={selected ? 'green-default' : 'white-light'}
        radius={6}
        padding={24}
        justify="center"
        align="center">
        <Icon icon={icon} width={30} height={30} />
        <Separator height={4} />
        <Typography
          color={selected ? 'white-default' : 'gray-800'}
          variant="body2">
          {text}
        </Typography>
      </StyledContainer>
    </ContainerCardPaymentMethods>
  );
};

