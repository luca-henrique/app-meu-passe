import React from 'react';


import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import TextInput from '../../components/atoms/TextInput/Input';
import Button from '../../components/atoms/Button/Contained';
import ButtonText from '../../components/atoms/Button/Text';


import z from 'zod';
import { Container, StyledContainer } from '../../components/atoms/Container/Container';
import { Typography } from '../../components/atoms/Typography/Typography';

const schema = z
  .object({
    cpf: z.string(),
    password: z
      .string()
      .min(6)
      .max(20),
  })
  .required();

export const SignIn = () => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });



  function handleChangeFieldtext(value: string) {
    console.log(value);
  }

  return (
    <Container justify="center" align="center" padding={30}>
      <Typography color="green-dark">RecargaBuss</Typography>


      <TextInput
        label="CPF:"
        onChangeText={handleChangeFieldtext}
        error={errors?.cpf}
        keyboardType="numeric"
        maxLength={11}
        mask
        type="cpf"
      />


      <TextInput
        label="SENHA:"
        secureTextEntry={true}
        onChangeText={text => setValue('password', text)}
        error={errors?.password}
      />


      <StyledContainer align="flex-end">
        <ButtonText>Esqueceu a senha?</ButtonText>
      </StyledContainer>


      <Button
        onPress={handleSubmit(data => {
          console.log(data);
        })}>
        Entrar
      </Button>


      <StyledContainer align="center">
        <Typography color="gray-400" variant="body1">
          Ainda não possui uma conta?
        </Typography>

        <ButtonText color="green-default">Crie uma agora</ButtonText>
      </StyledContainer>
    </Container>
  );
};
