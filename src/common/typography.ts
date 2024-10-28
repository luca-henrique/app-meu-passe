import {scale} from '../utils/dimesions';

export const Typography = {
  h1: {
    fontFamily: 'DMSans-Bold',
    fontSize: `${scale(32)}px`,
    fontWeight: 700,
    lineHeight: `${scale(42)}px`,
  },
  h2: {
    fontSize: `${scale(24)}px`,
    fontWeight: 700,
    lineHeight: `${scale(32)}px`,
    fontFamily: 'DMSans-Bold',
  },
  h3: {
    fontSize: `${scale(18)}px`,
    fontWeight: 500,
    lineHeight: `${scale(22)}px`,
    fontFamily: 'DMSans-Regular',
  },
  body1: {
    fontSize: `${scale(14)}px`,
    fontWeight: 400,
    lineHeight: `${scale(22)}px`,
    fontFamily: 'DMSans-Medium',
  },
  body2: {
    fontSize: `${scale(12)}px`,
    fontWeight: 400,
    lineHeight: `${scale(20)}px`,
    fontFamily: 'DMSans-Medium',
  },
  body3: {
    fontSize: `${scale(10)}px`,
    fontWeight: 400,
    lineHeight: `${scale(16)}px`,
    fontFamily: 'DMSans-Medium',
  },

  body4: {
    fontSize: `${scale(16)}px`,
    fontWeight: 500,
    lineHeight: `${scale(16)}px`,
    fontFamily: 'DMSans-Regular',
  },
};

export type TypographyProps = typeof Typography;

export type TypographyKeyProps = keyof TypographyProps;

type IconValueReturn = TypographyProps[TypographyKeyProps];

export const getTypography = (name: TypographyKeyProps): IconValueReturn => {
  return Typography[name];
};
