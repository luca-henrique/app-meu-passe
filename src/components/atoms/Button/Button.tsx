import React from 'react';
import { Button as ButtonStyle, ButtonText } from './style';
import { TouchableOpacityProps } from 'react-native';
import { ColorKeyProps } from '@src/common/colors';
import { Icon } from '../Icon';
import { IconKeyProps } from '@src/assets/icons';

interface ButtonProps extends TouchableOpacityProps {
  background?: ColorKeyProps
  textColor?: ColorKeyProps
  leftIcon?: IconKeyProps
  rightIcon?: IconKeyProps
}

export const Button = ({ children, textColor, background, leftIcon, rightIcon, disabled, ...props }: ButtonProps) => {

  const isDisabledContainer = disabled ? 'white-dark' : background || 'green-default';
  const isDisabledText = disabled ? 'green-default' : textColor || 'white-default';


  return (
    <ButtonStyle
      background={isDisabledContainer}
      disabled={disabled}
      {...props}
    >
      {leftIcon ? <Icon height={14} width={14} icon={leftIcon} /> : null}
      <ButtonText color={isDisabledText}>{children}</ButtonText>
      {rightIcon ? <Icon height={14} width={14} icon={rightIcon} /> : null}
    </ButtonStyle>
  );
};

