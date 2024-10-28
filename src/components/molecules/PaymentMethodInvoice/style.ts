import {getColor} from '../../../common/colors';
import {scale} from '../../../utils/dimesions';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 0.4;
  background-color: ${getColor('white-default')};
  border-top-left-radius: ${scale(32)}px;
  border-top-right-radius: ${scale(32)}px;
  padding: ${scale(30)}px;
  gap: ${scale(12)}px;
`;
