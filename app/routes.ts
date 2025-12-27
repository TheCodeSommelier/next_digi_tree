type ProductArgs = {
  productId: string
}

export const ROUTES = {
  home: () => '/',
  products: () => '/products',
  product: ({productId}: ProductArgs) => `/products/${productId}`,
  contact: () => '/contacts',
  aboutUs: () => '/about-us',
  faq: () => '/faq',
  termsOfService: () => '/terms-of-service',
  privacPolicy: () => '/privacy-policy',
  cookies: () => '/cookies'
};
