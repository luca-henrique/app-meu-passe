import React from 'react';


import { TypographyProps } from './type';
import { getTypography } from '../../../common/typography';
import { Label } from './style';

export const Typography = ({ variant, color, children }: TypographyProps) => {
  const style = getTypography(variant ?? 'h1');

  return (
    <Label {...style} color={color}>
      {children}
    </Label>
  );
};
