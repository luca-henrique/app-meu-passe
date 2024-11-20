import styled from 'styled-components/native';
import {getColor, ColorKeyProps} from '../../../../shared/common/colors';

interface PropsButton {
  background?: ColorKeyProps;
  padding?: string;
  radius?: string;
}

export const Button = styled.TouchableOpacity<PropsButton>`
  background-color: ${({background}) =>
    background ? `${getColor(background)}` : 'transparent'};

  padding: ${({padding}) => (padding ? padding : 0)}px;
  border-radius: ${({radius}) => (radius ? radius : 0)}px;
`;
