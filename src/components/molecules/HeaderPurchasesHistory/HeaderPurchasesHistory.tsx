import { StyledContainer, Typography } from '../../../components/atoms';
import { getColor } from '../../../common/colors';
import { useState } from 'react';

import { Picker } from '@react-native-picker/picker';

const statusPayment = [
  { label: 'Mais recentes', value: 'mais recentes' },
  { label: 'Mais antigos', value: 'mais antigos' },
  { label: 'Pendentes', value: 'pendentes' },
  { label: 'Aprovados', value: 'aprovados' },
  { label: 'Cancelados', value: 'cancelados' },
];

export const HeaderPurchasesHistory = () => {
  const [selectedValue, setSelectedValue] = useState('mais recentes');

  const ListStatusOrders = statusPayment.map(status => {
    return <Picker.Item label={status.label} value={status.value} />;
  });
  return (
    <StyledContainer direction align="flex-end" justify="space-between">
      <Typography color="gray-100" variant="body2">
        40 transações
      </Typography>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 38,
          width: 180,
          backgroundColor: getColor('white-light'),
          borderRadius: 6,
          borderWidth: 1,
          borderColor: getColor('white-dark'),
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {ListStatusOrders}
      </Picker>
    </StyledContainer>
  );
};
