import React from 'react';
import { Button as ButtonStyle, ButtonText } from './style';
import { TouchableOpacityProps } from 'react-native';
import { ColorKeyProps } from '@src/common/colors';
import { Icon } from '../Icon';
import { IconKeyProps } from '@src/assets/icons';

type VariantType = 'outlined' | 'contained' | 'text'
interface ButtonProps extends TouchableOpacityProps {
  background?: ColorKeyProps
  textColor?: ColorKeyProps
  leftIcon?: IconKeyProps
  rightIcon?: IconKeyProps
  variant?: VariantType
}

interface ContainedProps {
  color: ColorKeyProps
  background: ColorKeyProps
}

interface TextProps extends ContainedProps {
  height: number
}

interface OutlinedProps extends ContainedProps {
  color: ColorKeyProps
  background: ColorKeyProps
  borderWidth: number
  borderColor: ColorKeyProps
}

interface StyledContainerProps {
  contained: ContainedProps
  outlined: OutlinedProps
  text: TextProps
}

export const Button = ({ children, variant = 'contained', textColor, background, leftIcon, rightIcon, disabled, ...props }: ButtonProps) => {

  const isDisabledContainer = disabled ? 'white-dark' : background || 'green-default';
  const isDisabledText = disabled ? 'green-default' : textColor || 'white-default';

  const styledButton: StyledContainerProps = {
    contained: { background: isDisabledContainer, color: isDisabledText },
    outlined: { borderWidth: 1, borderColor: 'green-default', background: 'white-dark', color: 'green-default' },
    text: { background: 'white-default', color: 'green-default', height: 18 },
  };


  const variants = styledButton[variant];

  const { color } = styledButton[variant];

  const allStyles = { ...variants, ...props };


  return (
    <ButtonStyle
      disabled={disabled}
      {...allStyles}
    >
      {leftIcon ? <Icon height={14} width={14} icon={leftIcon} /> : null}
      <ButtonText color={color}>{children}</ButtonText>
      {rightIcon ? <Icon height={14} width={14} icon={rightIcon} /> : null}
    </ButtonStyle>
  );
};

