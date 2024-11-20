import styled from 'styled-components/native';
import {ColorKeyProps, getColor} from '../../../shared/common/colors';
import {scale} from '../../../shared/utils/dimesions';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Label = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: ${getColor('gray-500')};
`;

export interface InputContainerProps {
  borderColor?: ColorKeyProps;
  borderWidth?: number;
}

export const InputContainer = styled.View<InputContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 52px;
  background: ${getColor('white-light')};

  border-color: ${({borderColor}) =>
    borderColor ? `${getColor(borderColor)}` : `${getColor('white-dark')}`};
  border-style: solid;
  border-width: ${({borderWidth}) =>
    borderWidth ? `${borderWidth}px` : '1px'};

  border-radius: 14px;
  padding: 18px;
`;

export const Input = styled.TextInput`
  width: 94%;
  height: ${scale(42).toFixed()}px;
  background-color: ${getColor('white')};
  color: ${getColor('gray-400')};
`;

export const TextError = styled.Text`
  font-weight: 500;
  font-size: ${scale(12).toFixed()}px;
  line-height: ${scale(13).toFixed()}px;
  color: ${getColor('red-default')};
`;

export const ContainerError = styled.View`
  height: ${scale(12).toFixed()}px;
  justify-content: 'flex-end';
  margin-top: ${scale(4).toFixed()}px;
`;
