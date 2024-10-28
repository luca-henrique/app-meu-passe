import React from 'react';
import { StyledContainer } from '../Container/Container';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon';
import { TableProps } from './table.type';

type FooterProps = Pick<TableProps, 'total' | 'currentPage'>

export const Footer = ({ total = 10, currentPage = 1 }: FooterProps) => {

  return (
    <StyledContainer direction align="center" justify="space-between">
      <Icon
        icon="arrow-left-icon"
      />
      <StyledContainer
        direction
        width={50}
        gap={8}
        align="center"
      >
        <Typography variant="body4" color="green-default">
          {currentPage}
        </Typography>
        <Typography variant="body4" color="gray-300">
          de
        </Typography>

        <Typography variant="body4" color="green-default">
          {total}
        </Typography>

      </StyledContainer>

      <Icon icon="arrow-right-icon" />
    </StyledContainer>
  );
};
