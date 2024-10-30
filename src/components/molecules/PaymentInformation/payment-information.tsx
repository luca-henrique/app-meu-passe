import React from 'react';
import { StyledContainer, Typography } from '@components/atoms';
import { currencyFormat } from '../../../utils/currency-format';


export const ContainerPaymentInformation = ({ text, value }) => {
  return (
    <StyledContainer
      direction
      justify="space-between"
      color={'white-light'}>
      <Typography variant="body2" color="gray-400">
        {text}
      </Typography>
      <Typography variant="body2" color="gray-800">
        {currencyFormat(value)}
      </Typography>
    </StyledContainer>
  );
};
