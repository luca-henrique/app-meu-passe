import React from 'react';

import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';

interface MaskInput extends MaskedTextInputProps {
}

export const MaskInput = ({ type, onChangeText, ...props }: MaskInput) => {
  return (
    <MaskedTextInput
      style={{ width: '100%', height: 52 }}
      onChangeText={onChangeText}
      type={type}
      {...props} />
  );
};

