'use client';

import { useEffect } from 'react';

import { useGradients } from '@/app/providers/gradients/GradientProvider';

import type { GradientSpec } from '@/app/types/Gradient';

export default function GradientConfig({ specs }: { specs: GradientSpec[] }) {
  const { setGradients } = useGradients();

  useEffect(() => {
    setGradients(specs);
    return () => setGradients([]);
  }, [setGradients, specs]);

  return null;
}
