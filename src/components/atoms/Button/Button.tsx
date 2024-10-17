import React from 'react';
import { Button as ButtonStyle, ButtonText } from './style';


export const Button = ({ children, onPress, background, disabled }: any) => {

  return (
    <ButtonStyle
      onPress={() => onPress()}
      background={background}
      disabled={disabled}>
      <ButtonText>{children}</ButtonText>
    </ButtonStyle>
  );
};

