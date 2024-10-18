import React from 'react';

import TextInput from '../../components/atoms/TextInput/Input';

import { StyledContainer } from '../../components/atoms/Container/Container';
import { Typography } from '../../components/atoms/Typography/Typography';

import { TouchableOpacity } from 'react-native';
import { scale } from '../../utils/dimesions';

import KeyboardAvoidingView from '../../components/atoms/KeyboardAvoidingView/KeyboardAvoidingView';
import { Separator } from '../../components/atoms/Separator/Separator';
import { Button } from '../../components/atoms/Button/Button';
import { SignInScreenViewProps } from './sign-in-screen.type';

export const SignInScreenView = ({ handleChangeInputValue, errors, handleSubmit }: SignInScreenViewProps) => {
  return (
    <KeyboardAvoidingView padding={scale(18)} justify="center" >
      <Typography color="green-default">MeuPasse</Typography>
      <Separator height={scale(44)} />
      <StyledContainer direction gap={30}>
        <TextInput
          label="CPF"
          onChangeText={(value) => handleChangeInputValue('cpf', value)}
          error={errors.cpf?.message}
          keyboardType="numeric"
          maxLength={14}
          color={'green-light'}
          text={'000.000.000-00'}
          type="custom"
          mask="999.999.999-99"
        />
        <TextInput
          label="senha"
          secureTextEntry={true}
          onChangeText={(value) => handleChangeInputValue('password', value)}
          error={errors.password?.message}
          text={'**********'}
          color={'green-light'}
        />
      </StyledContainer>

      <StyledContainer justify="flex-end">
        <TouchableOpacity onPress={() => console.log('aq')}>
          <Typography color="green-default" variant="body1">Esqueceu a senha?</Typography>
        </TouchableOpacity>
      </StyledContainer>
      <Separator height={scale(8)} />
      <Button onPress={() => handleSubmit()}>Entrar</Button>
      <Separator height={scale(8)} />
      <StyledContainer justify="center" gap={2}>
        <Typography color="gray-100" variant="body1" >não tem uma conta?</Typography>
        <TouchableOpacity onPress={() => console.log('aq')}>
          <Typography color="green-default" variant="body1">conecte-se</Typography>
        </TouchableOpacity>
      </StyledContainer>

    </KeyboardAvoidingView>
  );
};
