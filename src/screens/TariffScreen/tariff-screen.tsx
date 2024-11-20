import React from 'react';
import {
  StyledContainer, Icon, Typography, Separator, Table,
} from '../../widgets/atoms';
import { getStatusBarHeight } from '../../shared/utils/dimesions';
import { TARIFF } from '../../shared/mock/tariff';


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




