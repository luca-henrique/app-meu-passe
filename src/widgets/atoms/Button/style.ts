import styled from 'styled-components/native';
import {getColor, ColorKeyProps} from '../../../shared/common/colors';
import {scale} from '../../../shared/utils/dimesions';

interface PropsButton {
  background?: ColorKeyProps;
  color?: ColorKeyProps;
  borderColor?: ColorKeyProps;
  borderWidth?: number;
  height?: number;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  width: 100%;
  flex-direction: row;
  height: ${({height}) => (height ? scale(height) : scale(52))}px;
  background-color: ${({background}) =>
    background ? `${getColor(background)}` : `${getColor('green-default')}`};
  justify-content: center;
  align-items: center;
  border-radius: ${scale(8)}px;
  gap: ${scale(16)}px;
  border-width: ${({borderWidth}) => (borderWidth ? scale(borderWidth) : 0)}px;
  border-color: ${({borderColor}) =>
    borderColor && borderColor ? `${getColor(borderColor)}` : 'none'};
`;

export const ButtonText = styled.Text<PropsButton>`
  font-family: 'DMSans-Bold';
  font-size: ${scale(16)}px;
  line-height: ${scale(18)}px;
  color: ${({color}) =>
    color ? `${getColor(color)}` : `${getColor('white')}`};
`;
