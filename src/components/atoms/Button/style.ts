import styled from 'styled-components/native';
import {getColor, ColorKeyProps} from '../../../common/colors';
import {scale} from '../../../utils/dimesions';

interface PropsButton {
  background?: ColorKeyProps;
  color?: ColorKeyProps;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  width: 100%;
  height: ${scale(52)}px;
  background-color: ${({background}) =>
    background ? `${getColor(background)}` : `${getColor('green-default')}`};
  color: ${({color}) =>
    color ? `${getColor(color)}` : `${getColor('white')}`};
  justify-content: center;
  align-items: center;
  border-radius: ${scale(8)}px;
`;

export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: white;
`;
