import {getColor} from '../../../common/colors';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
  width: 64px;
  height: 64px;
  background-color: ${({color}) =>
    color ? `${color}` : `${getColor('white-dark')}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;
