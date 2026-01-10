'use client';

import { usePathname } from 'next/navigation';

import BackgroundGradient from './BackgroundGradient';
import { getGradientConfig } from '@/app/utils/getGradient';

import { type GradientConfig, GradientKey } from '@/app/types/Gradient';

const gradientsByRoute: Record<string, GradientConfig[]> = {
  '/': [
    getGradientConfig({ key: GradientKey.PAGE_QUARTER_TOP }),
    getGradientConfig({ key: GradientKey.PAGE_QUARTER_BOTTOM }),
    getGradientConfig({ key: GradientKey.BOTTOM }),
  ],
  '/products': [
    getGradientConfig({ key: GradientKey.PAGE_QUARTER_TOP, height: '35%' }),
    getGradientConfig({ key: GradientKey.PAGE_QUARTER_BOTTOM, height: '45%' }),
  ],
  '/about-us': [
    getGradientConfig({ key: GradientKey.PAGE_QUARTER_TOP, height: '35%' }),
    getGradientConfig({ key: GradientKey.BOTTOM }),
  ],
  '/faq': [
    getGradientConfig({ key: GradientKey.TOP, height: '50%' }),
    getGradientConfig({ key: GradientKey.BOTTOM, height: '100%', top: '50%' }),
  ],
  '/contacts': [
    getGradientConfig({ key: GradientKey.BOTTOM, height: '110%', top: '10%' }),
  ],
  '/terms-of-service': [
    getGradientConfig({ key: GradientKey.BOTTOM, height: '110%', top: '10%' }),
  ],
  '/privacy-policy': [
    getGradientConfig({ key: GradientKey.BOTTOM, height: '110%', top: '10%' }),
  ],
  '/cookies': [
    getGradientConfig({ key: GradientKey.BOTTOM, height: '110%', top: '10%' }),
  ]
};

const BackgroundGradients = () => {
  let pathname = usePathname();

  if (pathname.split('/').length > 1) {
    const pathArr = pathname.split('/');
    pathname = `/${pathArr[1]}`;
  }

  const gradients = gradientsByRoute[pathname];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {gradients?.length && gradients.map((gradient) => (
        <BackgroundGradient key={gradient.key} style={gradient.style} />
      ))}
    </div>
  );
};

export default BackgroundGradients;
