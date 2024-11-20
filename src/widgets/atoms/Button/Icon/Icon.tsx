import React from 'react';
import { Button } from './style';

import { Icon } from '../../Icon/Icon';

export const IconButton = ({
  icon,
  onPress,
  background,
  disabled,
  width,
  height,
  padding,
  radius,
}: any) => {
  return (
    <Button
      onPress={() => onPress()}
      background={background}
      disabled={disabled}
      padding={padding}
      radius={radius}>
      <Icon icon={icon} width={width} height={height} />
    </Button>
  );
};
