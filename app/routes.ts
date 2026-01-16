import { ProductId } from './types/Product';

type ProductArgs = {
  productId: ProductId
}

export const ROUTES = {
  home: () => '/',
  products: () => '/products',
  product: ({ productId }: ProductArgs) => `/products/${productId}`,
  contact: () => '/contacts',
  aboutUs: () => '/about-us',
  faq: () => '/faq',
  termsOfService: () => '/terms-of-service',
  privacPolicy: () => '/privacy-policy',
  cookies: () => '/cookies',
  getBook: ({ isMobile }: { isMobile: boolean }) => {
    const message = `Dobrý den,

rád/a bych se informoval/a ohledně možnosti zakoupení vaší knihy Digitální zlato.

Měl/a bych o knihu vážný zájem a chtěl/a bych se zeptat na dostupnost, cenu a případně způsob objednání a doručení.

Děkuji vám předem za odpověď a budu se těšit na vaše instrukce k objednávce.

S pozdravem,
Jméno Zde`;

    const params = new URLSearchParams({ message });

    return `/contacts?${params.toString()}${isMobile ? '#contact-form' : ''}`;
  }
};
