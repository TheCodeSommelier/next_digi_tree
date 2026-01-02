import type { MetadataRoute } from 'next';

import { BASE_URL, isProduction } from './consts/consts';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : '',
      disallow: isProduction
      ? ['/cookies', '/privacy-policy', '/terms-of-service']
      : ['/'],
    },
    sitemap: isProduction ? `${BASE_URL}/sitemap.xml` : undefined,
  };
}
