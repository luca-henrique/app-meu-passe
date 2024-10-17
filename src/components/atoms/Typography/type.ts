import { TypographyKeyProps } from '../../../common/typography';
import { ColorKeyProps } from '../../../common/colors';
import { LabelProps } from './style';
import { TextProps } from 'react-native';

export interface TypographyProps extends TextProps, LabelProps {
  variant?: TypographyKeyProps;
  color?: ColorKeyProps;
}
