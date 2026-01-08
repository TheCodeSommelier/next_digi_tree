import type { CSSProperties } from 'react';

import type { GradientConfig, GradientKey } from '../types/Gradient';

type Args = {
  key: GradientKey
  height?: CSSProperties['height'],
  top?: CSSProperties['top']
}

const positionByKey: Record<GradientKey, CSSProperties['top']> = {
  top: '-10%',
  'page-2/4': '5%',
  'page-3/4': '40%',
  bottom: '80%',
};

export const getGradientConfig = ({
  key,
  height = '25%',
  top
}: Args): GradientConfig => {
  const postion = top ?? positionByKey[key];

  return {
    key,
    style: {
      top: postion,
      left: '-15%',
      width: '130%',
      height,
      opacity: 0.4,
    }
   };
};
