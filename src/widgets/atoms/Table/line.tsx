import React from 'react';

import { Column } from './column';
import { currencyFormat } from '../../../shared/utils/currency-format';
import { LineContainer } from './style';

export const Line = ({ tariff }) => {
  return (
    <LineContainer>
      <Column value={tariff.amount} />
      <Column value={currencyFormat(tariff.price)} />
    </LineContainer>
  );
};
