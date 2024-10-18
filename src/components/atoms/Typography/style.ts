import styled from 'styled-components/native';
import {getColor, ColorKeyProps} from '../../../common/colors';

export interface LabelProps {
  fontSize?: string;
  lineHeight?: string;
  fontFamily?: string;
  fontWeight?: number;
  color?: ColorKeyProps;
}

export const Label = styled.Text<LabelProps>`
  font-size: ${({fontSize}) => fontSize};
  font-family: ${({fontFamily}) => fontFamily};
  line-height: ${({lineHeight}) => lineHeight};
  font-weight: ${({fontWeight}) => fontWeight};
  color: ${({color}) =>
    color ? `${getColor(color)}` : getColor('white-default')};
`;
