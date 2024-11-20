import {getColor} from '../../../shared/common/colors';
import {getStatusBarHeight, scale} from '../../../shared/utils/dimesions';
import {isIOS} from '../../../shared/utils/native';
import styled from 'styled-components/native';

const barHeight = isIOS() ? 220 : 160;
const height = scale(barHeight) + getStatusBarHeight(true);

export const Header = styled.View`
  background-color: ${getColor('green-default')};
  width: 100%;
  height: ${height}px;
  padding: ${scale(14)}px;
  border-bottom-left-radius: ${scale(40)}px;
  border-bottom-right-radius: ${scale(40)}px;
`;
