import React from 'react';

import { useSignInModel } from './sign-in-screen.model';
import { SignInScreenView } from './sign-in-screen.view';

export const SignInScreen = () => {
  const props = useSignInModel();
  return (
    <SignInScreenView {...props} />
  );
};
