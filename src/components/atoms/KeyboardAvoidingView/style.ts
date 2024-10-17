import styled from 'styled-components/native';
import {getColor, ColorKeyProps} from '../../../common/colors';

import {scale} from '../../../utils/dimesions';

export interface KeyboardAvoidingViewCssProps {
  direction?: string;
  color?: ColorKeyProps;
  justify?: string;
  align?: string;
  width?: number;
  height?: number;
  padding?: number;
  radius?: number;
}

export const KeyboardAvoidingView = styled.KeyboardAvoidingView<KeyboardAvoidingViewCssProps>`
  flex: 1;
  flex-direction: column;
  background-color: ${({color}) =>
    color ? `${getColor(color)}` : getColor('white-default')};
  justify-content: ${({justify}) => justify ?? 'flex-start'};
  align-items: ${({align}) => align ?? 'flex-start'};
  padding: ${({padding}) => (padding ? scale(padding) : 0)}px;
`;
