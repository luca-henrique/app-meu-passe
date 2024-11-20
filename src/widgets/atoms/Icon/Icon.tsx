import React from 'react';
import { getIcon, IconKeyProps } from '../../../shared/assets/icons';

export interface IconProps {
  icon: IconKeyProps;
  height?: number;
  width?: number;
  fill?: string;
  stroke?: string
}

export const Icon = ({ icon, height = 21, width = 21, ...props }: IconProps) => {
  const SelectedIcon = (getIcon(icon));
  return <SelectedIcon width={width} height={height} {...props} />;
};

