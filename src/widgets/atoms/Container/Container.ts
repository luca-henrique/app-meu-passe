import styled from 'styled-components/native';
import {getColor, ColorKeyProps} from '../../../shared/common/colors';

import {scale} from '../../../shared/utils/dimesions';

import LinearGradient from 'react-native-linear-gradient';

interface ContainerProps {
  direction?: boolean;
  color?: ColorKeyProps;
  justify?: string;
  align?: string;
  width?: number;
  height?: number;
  padding?: number;
  radius?: number;
  gap?: number;
}

export const StyledContainer = styled.View<ContainerProps>`
  flex-direction: ${({direction}) => (direction ? 'row' : 'column')};
  background-color: ${({color}) =>
    color ? `${getColor(color)}` : 'transparent'};
  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
  width: ${({width}) => (width ? `${scale(width)}px` : '100%')};
  height: ${({height}) => (height ? `${scale(height)}px` : 'auto')};
  padding: ${({padding}) => (padding ? scale(padding) : 0)}px;
  border-radius: ${({radius}) => (radius ? scale(radius) : 0)}px;
  gap: ${({gap}) => (gap ? scale(gap) : 0)}px;
`;

export const LinearGradientContainer = styled(LinearGradient).attrs({
  start: {x: 0.7, y: 0},
})<ContainerProps>`
  flex: 1;
  flex-direction: column;

  justify-content: ${({justify}) => (justify ? justify : 'flex-start')};
  align-items: ${({align}) => (align ? align : 'flex-start')};
`;
