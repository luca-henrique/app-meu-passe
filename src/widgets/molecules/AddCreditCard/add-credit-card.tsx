import React from 'react';
import { Typography, StyledContainer } from '@components/atoms';
import { getColor } from '@src/common/colors';
import { Button, View } from 'react-native';
import TextInput from '../../atoms/TextInput/TextInput';



export const AddNewCreditCard = () => {
  return (
    <View
      style={{
        flex: 0.6,
        backgroundColor: getColor('white-default'),
        justifyContent: 'center',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: 30,
      }}>
      <Typography color="gray-800" variant="h3">
        Adicionar cartão
      </Typography>

      <View style={{ padding: 10 }} />

      <TextInput
        label="Nome do titular"
        onChangeText={text => console.log(text)} text={''} error={undefined} />

      <View style={{ padding: 10 }} />

      <TextInput
        label="Número do cartão"
        onChangeText={text => console.log(text)} text={''} error={undefined} />

      <View style={{ padding: 10 }} />

      <StyledContainer direction justify="space-between">
        <StyledContainer width={46}>
          <TextInput
            label="Data de Vencimento"
            onChangeText={text => console.log(text)} text={''} error={undefined} />
        </StyledContainer>

        <StyledContainer width={46}>
          <TextInput label="cvv" onChangeText={text => console.log(text)} text={''} error={undefined} />
        </StyledContainer>
      </StyledContainer>

      <View style={{ padding: 10 }} />

      <Button>
        Adicionar Cartão
      </Button>
    </View>
  );
};
