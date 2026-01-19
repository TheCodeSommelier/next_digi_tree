import type { MetadataRoute } from 'next';
import { SITE_DESC } from './consts/consts';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Digitree – AI & Digital Transformation',
    short_name: 'Digitree',
    description: SITE_DESC,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#1A1A41',
    icons: [
      {
        src: '/images/logo_light.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/images/logo_dark.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
