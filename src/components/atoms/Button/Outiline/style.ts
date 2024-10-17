import styled from 'styled-components/native';
import {getColor, ColorKeyProps} from '../../../../common/colors';

interface PropsButton {
  background?: ColorKeyProps;
  borderColor?: ColorKeyProps;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  width: 100%;
  height: 52px;
  background-color: ${({background}) =>
    background ? `${getColor(background)}` : `${getColor('white-default')}`};

  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border-width: 1px;

  border-color: ${({borderColor}) =>
    borderColor ? `${getColor(borderColor)}` : `${getColor('red-default')}`};
`;

export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: ${({color}) =>
    color ? `${getColor(color)}` : `${getColor('red-default')}`};
`;
