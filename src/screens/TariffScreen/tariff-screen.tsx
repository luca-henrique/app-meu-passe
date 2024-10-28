import React from 'react';
import {
  StyledContainer,
} from '../../components/atoms/Container/Container';
import { Icon } from '@components/atoms/Icon';
import { Typography } from '@components/atoms';
import { Separator } from '@components/atoms/Separator/Separator';
import { getStatusBarHeight } from '../../utils/dimesions';
import { TARIFF } from '../../mock/tariff';
import { Table } from '@components/atoms/Table/table';


const columns = ['Quantidade', 'Valor'];

export const TariffScreen = () => {
  return (
    <StyledContainer padding={24}>
      <Separator height={getStatusBarHeight()} />
      <StyledContainer direction align="center" gap={10}>
        <Icon
          icon="arrow-left-green-icon"
        />
        <Typography color="green-dark">Tarifas</Typography>
      </StyledContainer>
      <Separator height={10} />
      <Table columns={columns} data={TARIFF} currentPage={0} total={0} />
    </StyledContainer>
  );
};




