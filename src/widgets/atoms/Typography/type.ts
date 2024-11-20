import {TypographyKeyProps} from '../../../shared/common/typography';
import {ColorKeyProps} from '../../../shared/common/colors';
import {LabelProps} from './style';
import {TextProps} from 'react-native';

export interface TypographyProps extends TextProps, LabelProps {
  variant?: TypographyKeyProps;
  color?: ColorKeyProps;
}
