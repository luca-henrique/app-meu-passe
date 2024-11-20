import {getColor} from '../../../shared/common/colors';
import {scale} from '../../../shared/utils/dimesions';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${getColor('green-default')};
  width: 100%;
  height: ${scale(46)}px;
  align-items: center;
  border-top-left-radius: ${scale(6)}px;
  border-top-right-radius: ${scale(6)}px;
`;

export const TitleContainer = styled.View`
  width: 50%;
  align-items: center;
`;

export const ColumnContainer = styled.View`
  height: ${scale(42)}px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right-color: ${getColor('white-dark')};
  border-right-width: 1px;
`;

export const LineContainer = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${getColor('white-light')};
  width: 100%;
  align-items: center;
  border-bottom-color: ${getColor('white-dark')};
  border-bottom-width: 1;
`;
