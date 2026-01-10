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
  getBook: () => {
    const message = `Dobrý den,

rád bych se informoval ohledně možnosti zakoupení vaší knihy Digitální zlato.

Měl bych o knihu vážný zájem a chtěl bych se zeptat na dostupnost, cenu a případně způsob objednání a doručení. Pokud je možné knihu zakoupit i v elektronické podobě, budu rád i za tuto informaci.

Děkuji vám předem za odpověď a budu se těšit na vaše instrukce k objednávce.

S pozdravem,
Jméno`;

    const params = new URLSearchParams({ message });

    return `/contacts?${params.toString()}`;;}
};
