import { scale } from '../utils/dimesions';

export const Typography = {
  h1: {
    fontSize: `${scale(32)}px`,
    fontWight: 700,
    lineHeight: `${scale(42)}px`,
  },
  h2: {
    fontSize: `${scale(24)}px`,
    fontWight: 700,
    lineHeight: `${scale(22)}px`,
  },
  h3: {
    fontSize: `${scale(18)}px`,
    fontWight: 500,
    lineHeight: `${scale(16)}px`,
  },
  body1: {
    fontSize: `${scale(14)}px`,
    fontWight: 400,
    lineHeight:`${scale(22)}px`,
  },
  body2: {
    fontSize: `${scale(12)}px`,
    fontWight: 400,
    lineHeight: `${scale(20)}px`,
  },
  body3: {
    fontSize: `${scale(10)}px`,
    fontWight: 400,
    lineHeight: `${scale(16)}px`,
  },

  body4: {
    fontSize: `${scale(16)}px`,
    fontWight: 500,
    lineHeight: `${scale(16)}px`,
  },
};
