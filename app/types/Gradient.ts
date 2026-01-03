export type AnchorName = 'navbarTop' | 'page-2/4' | 'middle' | 'footerTop' | 'page-3/4';

export type GradientId = string;

type GradientSpecAbs = {
  id: GradientId;
  y: number;
  height?: number;
  opacity?: number;
  radial?: string
};

type GradientSpecAnchored = {
  id: GradientId;
  anchor: AnchorName;
  height?: number;
  opacity?: number;
  radial?: string
}

export type GradientSpec = GradientSpecAbs | GradientSpecAnchored

export type Ctx = {
  gradients: GradientSpec[];
  setGradients: (g: GradientSpec[]) => void;
  registerAnchorEl: (name: AnchorName, el: HTMLElement | null) => void;
  getAnchorY: (name: AnchorName) => number | null;
};
