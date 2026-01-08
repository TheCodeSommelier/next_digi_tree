import type { CSSProperties } from 'react';

export enum GradientKey {
  TOP = 'top',
  PAGE_QUARTER_TOP = 'page-2/4',
  PAGE_QUARTER_BOTTOM = 'page-3/4',
  BOTTOM = 'bottom'
}

export interface GradientConfig {
  key: GradientKey
  style: CSSProperties
}
