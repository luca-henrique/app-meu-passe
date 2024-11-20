import React from 'react';
import { Icon } from '../Icon/Icon';
import { Container } from './style';
import { Typography } from '../Typography/Typography';

export const TabBarIcon = ({ icon, label }: any) => {
  return (
    <Container>
      <Icon icon={icon} />
      <Typography variant="body1">
        {label}
      </Typography>
    </Container>
  );
};

