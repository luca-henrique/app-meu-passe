import React from 'react';

import { Typography } from '../Typography/Typography';
import { Container, TitleContainer } from './style';
import { TableProps } from './table.type';

type HeaderProsp = Pick<TableProps, 'columns'>

export const Header = ({ columns }: HeaderProsp) => {
  return (
    <Container>
      {columns.map((column: string) => {
        return (
          <TitleContainer key={`${column}-index`}>
            <Typography color="white-light" variant="body1">
              {column}
            </Typography>
          </TitleContainer>
        );
      })}
    </Container>
  );
};
