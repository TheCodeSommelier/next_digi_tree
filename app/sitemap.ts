import type { MetadataRoute } from 'next';
import { BASE_URL } from './consts/consts';
import { products } from './consts/products/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const threePillarsPics = [
    `${BASE_URL}/images/cyber_sec.png`,
    `${BASE_URL}/images/metrics.png`,
    `${BASE_URL}/images/server_room.png`,
  ];

  const productsPics = [
    `${BASE_URL}/images/ai_hand.png`,
    `${BASE_URL}/images/hacking.png`,
    `${BASE_URL}/images/planner.png`,
  ];

  const productUrls = products.map((product) => ({
    url: `${BASE_URL}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
    images: product.imageUrl ? [`${BASE_URL}${product.imageUrl}`] : undefined,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
      images: [
        `${BASE_URL}/images/david_classroom.png`,
        ...threePillarsPics,
        ...productsPics,
      ],
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: productsPics,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${BASE_URL}/images/david_presenting.jpg`,
        `${BASE_URL}/images/book.png`,
        ...threePillarsPics,
      ],
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [`${BASE_URL}/images/david_classroom.png`],
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...productUrls
  ];
}
