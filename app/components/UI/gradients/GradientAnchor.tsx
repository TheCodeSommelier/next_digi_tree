'use client';

import { useEffect, useRef } from 'react';

import { useGradients } from '@/app/providers/gradients/GradientProvider';

import type { AnchorName } from '@/app/types/Gradient';

export default function GradientAnchor({ name }: { name: AnchorName }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { registerAnchorEl } = useGradients();

  useEffect(() => {
    registerAnchorEl(name, ref.current);
    return () => registerAnchorEl(name, null);
  }, [name, registerAnchorEl]);

  return <div ref={ref} aria-hidden className="h-px w-px opacity-0" />;
}
