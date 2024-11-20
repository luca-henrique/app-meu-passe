import React from 'react';
import { useNavigationHook } from '../../../app/provider/useNavigation';
import { StyledContainer, Typography } from '../../atoms';
import { TouchableOpacity } from 'react-native';



export const SignInFooter = () => {
  const { navigation } = useNavigationHook();

  return (
    <StyledContainer justify="center" align="center" gap={2}>
      <Typography color="gray-100" variant="body1" >não tem uma conta?</Typography>
      <TouchableOpacity onPress={() => navigation('SignUpScreen')}>
        <Typography color="green-default" variant="body1" >conecte-se</Typography>
      </TouchableOpacity>
    </StyledContainer>
  );
};
