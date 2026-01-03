'use client';

import { createContext, ReactNode, useCallback, useContext, useMemo, useRef, useState } from 'react';

import type { AnchorName, Ctx, GradientSpec } from '@/app/types/Gradient';

const GradientContext = createContext<Ctx | null>(null);

export function GradientProvider({ children }: { children: ReactNode }) {
  const [gradients, setGradients] = useState<GradientSpec[]>([]);
  const anchorsRef = useRef<Record<AnchorName, HTMLElement | null>>({
    navbarTop: null,
    'page-2/4': null,
    middle: null,
    footerTop: null,
    'page-3/4': null
  });

  const registerAnchorEl = useCallback((name: AnchorName, el: HTMLElement | null) => {
    anchorsRef.current[name] = el;
  }, []);

  const getAnchorY = useCallback((name: AnchorName) => {
    const el = anchorsRef.current[name];
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
  }, []);

  const value = useMemo(
    () => ({ gradients, setGradients, registerAnchorEl, getAnchorY }),
    [gradients, registerAnchorEl, getAnchorY]
  );

  return <GradientContext.Provider value={value}>{children}</GradientContext.Provider>;
}

export function useGradients() {
  const ctx = useContext(GradientContext);
  if (!ctx) throw new Error('useGradients must be used within GradientProvider');
  return ctx;
}
