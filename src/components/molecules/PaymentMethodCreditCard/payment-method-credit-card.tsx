import React, { useState } from 'react';
import { getColor } from '../../../common/colors';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { Typography } from '../../atoms/Typography/Typography';

import TextInput from '../../atoms/Input';
import { StyledContainer } from '../../atoms/Container/Container';
import { Button } from '@components/atoms/Button/Button';
import { Dimensions } from 'react-native';


const { width } = Dimensions.get('screen');

console.log((width / 2).toFixed());

export const PaymentMethodCreditCard = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Modal
      isVisible={visible}
      swipeDirection="down"
      backdropOpacity={0.3}
      style={style.modal}>
      <View
        style={{
          flex: 0.54,
          backgroundColor: getColor('white-default'),
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          padding: 24,
          gap: 10,
        }}>
        <Typography color="gray-800" variant="h3">
          Adicionar cartão
        </Typography>

        <TextInput
          label="Nome do titular"
          onChangeText={text => console.log(text)}
        />



        <StyledContainer direction justify="space-between">
          <StyledContainer width={140}>
            <TextInput
              label="Número do cartão"
              onChangeText={text => console.log(text)}
            />
          </StyledContainer>
          <StyledContainer width={140}>
            <TextInput
              label="Data de Vencimento"
              onChangeText={text => console.log(text)}
            />
          </StyledContainer>
        </StyledContainer>
        <TextInput label="cvv" onChangeText={text => console.log(text)} />

        <Button onPress={() => setVisible(false)}>
          Adicionar Cartão
        </Button>
      </View>
    </Modal>
  );
};


const style = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    position: 'absolute',
    bottom: -90,
    width: '100%',
  },
});
