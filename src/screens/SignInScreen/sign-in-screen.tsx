
import React from 'react';

import { scale } from '../../shared/utils/dimesions';

import { SignInLoginForm } from '../../features/sing-in/ui/sign-in';

import { Separator, KeyboardAvoidingView, Typography } from '../../widgets/atoms';
import { SignInFooter } from '../../widgets/molecules/';

export const SignInScreen = () => {
  return (
    <KeyboardAvoidingView padding={scale(18)} justify="center">
      <Typography color="green-default">MeuPasse</Typography>
      <Separator height={scale(24)} />
      <SignInLoginForm />
      <Separator height={scale(8)} />
      <SignInFooter />
    </KeyboardAvoidingView>
  );
};
