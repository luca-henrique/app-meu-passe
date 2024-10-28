
import React from 'react';
import { StyledContainer, Typography } from '@components/atoms';
import { screenWidth } from '../../../utils/dimesions';

export const SPACE = 30;

export const CardInformationsDashboard = ({ text, value, type }: any) => {
  return (
    <StyledContainer width={screenWidth / 2 - SPACE} color="green-default" padding={8}>
      <Typography color="white-default" variant="body2">
        {text}
      </Typography>
      <Typography color="white-default" variant="h2">
        {type === 'money' ? `R$ ${value}` : value}
      </Typography>
    </StyledContainer>
  );
};
