
import React from 'react';
import { StyledContainer, Typography } from '../../atoms';
import { currencyFormat } from '../../../shared/utils/currency-format';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

interface BalanceCardProps {
  title: string;
  text: string;
  value: number;
  type?: boolean
}

export const BalanceCard = ({ title, text, value, type }: BalanceCardProps) => {
  return (
    <StyledContainer color="green-default" width={width / 2}>
      <Typography color="white-default" variant="body2">
        {title}
      </Typography>
      <Typography color="white-default" variant="body2">
        {text}
      </Typography>
      <Typography color="white-default" variant="h3">
        {type ? `${currencyFormat(value)}` : value}
      </Typography>
    </StyledContainer>
  );
};
