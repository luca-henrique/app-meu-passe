import React from 'react';
import { StyledContainer } from '../Container/Container';
import { Header } from './header';
import { TableProps } from './table.type';
import { Line } from './line';
import { Footer } from './footer';
import { Separator } from '../Separator/Separator';

export const Table = ({ columns = [], data = [], currentPage = 1, total = 10 }: TableProps) => {
  return (
    <StyledContainer>
      <Header columns={columns} />
      {data.map((tariff, index: number) => {
        return <Line tariff={tariff} key={`${tariff.price}-index-${index}`} />;
      })}
      <Separator height={8} />
      <Footer currentPage={currentPage} total={total} />
    </StyledContainer>
  );
};
