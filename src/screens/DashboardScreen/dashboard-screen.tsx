import { Separator } from '@components/atoms/Separator/Separator';
import { StyledContainer, Typography } from '../../components/atoms';
import { CardInformationsDashboard } from '../../components/molecules/CardInformationsDashboard/CardInformationsDashboard';
import React from 'react';

export const DashboardScreen = () => {

  return (
    <StyledContainer padding={18}>
      <Separator height={20} />
      <Typography color="green-dark">Olá Lucas</Typography>
      <StyledContainer direction justify="space-between">
        <CardInformationsDashboard
          text="Saldo atual"
          type="money"
          value={100}
        />
        <CardInformationsDashboard text="Quantidade de passes" value={10} />
      </StyledContainer>

    </StyledContainer>);
};
