import styled from 'styled-components/native';
import { scale } from '../../../utils/dimesions';

interface SeparatorProps {
  height: number
}

export const Separator = styled.View<SeparatorProps>`
  padding: ${({ height }) => (height ? `${scale(height)}px` : 'auto')};
`;
