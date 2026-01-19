import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getBaseUrlFromHeaders } from './consts/consts';
import { products } from './consts/products/products';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrlFromHeaders(await headers());
  const threePillarsPics = [
    `${baseUrl}/images/cyber_sec.png`,
    `${baseUrl}/images/metrics.png`,
    `${baseUrl}/images/server_room.png`,
  ];

  const productsPics = [
    `${baseUrl}/images/ai_hand.png`,
    `${baseUrl}/images/hacking.png`,
    `${baseUrl}/images/planner.png`,
  ];

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
    images: product.heroImageUrl ? [`${baseUrl}${product.heroImageUrl}`] : undefined,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
      images: [
        `${baseUrl}/images/david_classroom.png`,
        ...threePillarsPics,
        ...productsPics,
      ],
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: productsPics,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${baseUrl}/images/david_presenting.jpg`,
        `${baseUrl}/images/book.png`,
        ...threePillarsPics,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [`${baseUrl}/images/david_classroom.png`],
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...productUrls
  ];
}
