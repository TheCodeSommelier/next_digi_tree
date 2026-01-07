'use client';

import { useEffect, useMemo, useState } from 'react';

import { useGradients } from '@/app/providers/gradients/GradientProvider';
import { GradientSpec } from '@/app/types/Gradient';

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export default function GradientLayer() {
  const { gradients, getAnchorY } = useGradients();
  const [isMounted, setIsMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const updateViewport = () => setViewportHeight(window.innerHeight);
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  const resolved = useMemo(() => {
    return gradients.map((g) => {
      let yDoc: number | null = null;
      if ('y' in g) yDoc = g.y;
      else yDoc = getAnchorY(g.anchor);

      if (yDoc == null) return null;

      const yViewport = yDoc - scrollY;

      return {
        ...g,
        yViewport,
      };
    }).filter(Boolean) as Array<GradientSpec & { yViewport: number }>;
  }, [gradients, getAnchorY, scrollY]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      aria-hidden
      data-gradient-layer
      style={{ pointerEvents: 'none', zIndex: -10, position: 'fixed', overflow: 'hidden', inset: 0 }}
    >
      <div className="absolute left-1/2 top-0 h-full w-screen -translate-x-1/2">
        {resolved.map((g) => {
          const height = g.height ?? 900;
          const opacity = 0.4;

          const radial =
            g.radial ??
            'radial-gradient(200% 80% at 50% 50%, var(--color-accent), transparent 65%)';

          const top = clamp(g.yViewport - height / 2, -height, viewportHeight);

          return (
            <div
              key={g.id}
              className="absolute inset-x-0"
              style={{ top, height }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: radial,
                  backgroundRepeat: 'no-repeat',
                  opacity,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
