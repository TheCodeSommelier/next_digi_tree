'use client';

import { useEffect, useMemo } from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';

import { useGradients } from '@/app/providers/gradients/GradientProvider';
import type { GradientSpec } from '@/app/types/Gradient';

export default function GradientRouteConfig() {
  const segments = useSelectedLayoutSegments();
  const { setGradients } = useGradients();

  const specs: GradientSpec[] = useMemo(() => {
    const pathKey = segments.join('/');

    if (pathKey === '' || pathKey === '(pages)/(genericPages)/about-us') {
      return [
        { id: 'page-2/4', anchor: 'page-2/4', height: 900 },
        { id: 'page-3/4', anchor: 'page-3/4', height: 1100 },
        { id: 'footer', anchor: 'footerTop', height: 900 },
      ];
    }

    if (pathKey === '(pages)/(genericPages)/products') {
      return [
        { id: 'page-2/4', anchor: 'page-2/4', height: 900 },
        { id: 'page-3/4', anchor: 'page-3/4', height: 1100 },
      ];
    }

    if (
      pathKey === '(pages)/(genericPages)/terms-of-service' ||
      pathKey === '(pages)/(genericPages)/privacy-policy' ||
      pathKey === '(pages)/(genericPages)/cookies'
    ) {
      return [
        { id: 'footer', anchor: 'footerTop', height: 1500 },
      ];
    }

    return [
      { id: 'top', anchor: 'navbarTop', height: 800 },
      { id: 'page-2/4', anchor: 'page-2/4', height: 900 },
      { id: 'page-3/4', anchor: 'page-3/4', height: 1100 },
      { id: 'footer', anchor: 'footerTop', height: 900 },
    ];
  }, [segments]);

  useEffect(() => {
    setGradients(specs);
    return () => setGradients([]);
  }, [setGradients, specs]);

  return null;
}
