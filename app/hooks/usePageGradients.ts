'use client';

import { useEffect } from 'react';
import { useGradients } from '../providers/gradients/GradientProvider';

import type { GradientSpec } from '../types/Gradient';


export function usePageGradients(specs: GradientSpec[]) {
  const { setGradients } = useGradients();

  useEffect(() => {
    setGradients(specs);
    return () => setGradients([]);
  }, [setGradients, specs]);
}
