import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

import { getBaseUrlFromHeaders, isProduction } from './consts/consts';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = getBaseUrlFromHeaders(await headers());

  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : '',
      disallow: isProduction
      ? ['/cookies', '/privacy-policy', '/terms-of-service']
      : ['/'],
    },
    sitemap: isProduction ? `${baseUrl}/sitemap.xml` : undefined,
  };
}
