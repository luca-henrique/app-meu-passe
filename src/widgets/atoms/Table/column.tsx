import React from 'react';
import { Typography } from '../Typography/Typography';
import { ColumnContainer } from './style';

interface ColumnsProps {
  value: string | number
}

export const Column = ({ value }: ColumnsProps) => {
  return (
    <ColumnContainer>
      <Typography variant="body1" color="gray-800">
        {value}
      </Typography>
    </ColumnContainer>
  );
};
