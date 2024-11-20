import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useNavigationHook } from '../../../app/provider/useNavigation';
import { useSignInModel } from '../../../features/sing-in/model/use-sign-in';


import {
  TextInput,
  Separator,
  StyledContainer,
  Typography,
  Button,
} from '../../../widgets/atoms';

export const SignInLoginForm = () => {
  const { errors, handleChangeInputValue, handleSubmit } = useSignInModel();

  const { navigation } = useNavigationHook();

  return (
    <View style={{ width: '100%', gap: 8 }}>
      <TextInput
        label="CPF"
        onChangeText={value => handleChangeInputValue('cpf', value)}
        error={errors.cpf?.message}
        keyboardType="numeric"
        maxLength={14}
        color={'green-light'}
        text={'000.000.000-00'}
        type="custom"
        mask="999.999.999-99"
      />

      <TextInput
        label="Senha"
        secureTextEntry={true}
        onChangeText={value => handleChangeInputValue('password', value)}
        error={errors.password?.message}
        text={'**********'}
        color={'green-light'}
      />

      <StyledContainer justify="flex-end" align="flex-end">
        <TouchableOpacity onPress={() => navigation('RecoveryAccountScreen')}>
          <Typography color="green-default" variant="body1">
            Esqueceu a senha?
          </Typography>
        </TouchableOpacity>
      </StyledContainer>
      <Separator height={8} />
      <Button onPress={() => handleSubmit()}>Entrar</Button>
    </View>
  );
};
