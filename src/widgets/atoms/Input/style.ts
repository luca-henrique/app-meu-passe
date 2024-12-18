import styled from 'styled-components/native';
import {getColor} from '../../../shared/common/colors';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: ${getColor('gray-500')};
`;

export const InputContainer = styled.View`
  margin-top: 4px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 52px;
  background: ${getColor('white-light')};

  border-color: ${({borderColor}) =>
    borderColor ? `${getColor(borderColor)}` : `${getColor('white-dark')}`};
  border-style: solid;
  border-width: ${({borderWidth}) => (borderWidth ? `${borderWidth}px` : 1)}px;

  border-radius: 6px;
  padding: 18px;
`;

export const Input = styled.TextInput`
  width: 94%;
  height: 52px;
  color: #2a2b2b;
`;

export const TextError = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  color: ${getColor('red-default')};
`;
