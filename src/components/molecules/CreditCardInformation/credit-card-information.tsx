
import React from 'react';
import { StyledContainer, Typography } from '@components/atoms';
import { Icon } from '@components/atoms/Icon';
import { View } from 'react-native';
import { getColor } from '../../../common/colors';

export const CreditCardInformation = () => {
  return (
    <StyledContainer
      direction
      padding={16}
      color="white-light"
      radius={6}>
      <View
        style={{
          width: 64,
          height: 64,
          backgroundColor: getColor('green-light'),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
        }}>
        <Icon icon={'credit-card-icon'} width={33} height={33} />
      </View>

      <View style={{ padding: 12 }} />

      <StyledContainer direction>
        <StyledContainer>
          <Typography variant="body4" color="green-dark">
            Visa
          </Typography>
          <View style={{ padding: 2 }} />
          <Typography variant="body2" color="green-dark">
            1234 5678 9123 4567
          </Typography>
          <View style={{ padding: 2 }} />
          <Typography variant="body2" color="green-dark">
            12/29
          </Typography>
        </StyledContainer>
      </StyledContainer>
    </StyledContainer>
  );
};
