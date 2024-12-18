import React, { useState } from 'react';
import { Input, Container, TextError, Label, InputContainer, ContainerError } from './style';

import { IconButton } from '../Button/Icon/Icon';
import { MaskInput } from '../MaskInput';


import { TextInputProps } from 'react-native';
import { ColorKeyProps } from '../../../shared/common/colors';

interface InputProps extends TextInputProps {
  label: string;
  text: string;
  error?: string | undefined;
  color?: ColorKeyProps;
  mask?: string;
  onChangeText: ((text: string) => void)
  type?: string
}

export const TextInput = ({
  label,
  text,
  secureTextEntry,
  error,
  mask,
  type = 'custom',
  onChangeText,
  ...inputProps
}: InputProps) => {
  const [visiblePasswordText, setVisiblePasswordText] = useState(true);

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer
        borderColor={'green-default'}
        borderWidth={1}>
        {mask ? (
          <MaskInput
            placeholder={text}
            mask={mask}
            type={type}
            onChangeText={(value: string) => onChangeText(value)}
            {...inputProps}
          />
        ) : (
          <Input
            placeholder={text}
            onChangeText={(value: string) => onChangeText(value)}
            secureTextEntry={
              !visiblePasswordText ? visiblePasswordText : secureTextEntry
            }
            {...inputProps}
          />
        )}


        {secureTextEntry && (
          <IconButton
            icon={
              visiblePasswordText
                ? 'eye-close-icon'
                : error
                  ? 'eye-open-error-icon'
                  : 'eye-open-icon'
            }
            onPress={() => setVisiblePasswordText(!visiblePasswordText)}
          />
        )}
      </InputContainer>
      <ContainerError>
        {!!error && <TextError>{error}</TextError>}
      </ContainerError>
    </Container>
  );
};

