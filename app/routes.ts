import { CourseId } from "./(pages)/(product)/courses/[id]/page";
import { ProductId } from "./types/Product";

type ProductArgs = {
  productId: ProductId;
};

type CourseArgs = {
  courseId: CourseId;
};

export const ROUTES = {
  home: () => "/",
  products: () => "/products",
  product: ({ productId }: ProductArgs) => `/packages/${productId}`,
  contact: () => "/contacts",
  aboutUs: () => "/about-us",
  faq: () => "/faq",
  termsOfService: () => "/terms-of-service",
  privacPolicy: () => "/privacy-policy",
  cookies: () => "/cookies",
  courses: ({ courseId }: CourseArgs) => `/courses/${courseId}`,
  getBook: ({ isMobile }: { isMobile: boolean }) => {
    const message = `Dobrý den,

rád/a bych se informoval/a ohledně možnosti zakoupení vaší knihy Digitální zlato.

Měl/a bych o knihu vážný zájem a chtěl/a bych se zeptat na dostupnost, cenu a případně způsob objednání a doručení.

Děkuji vám předem za odpověď a budu se těšit na vaše instrukce k objednávce.

S pozdravem,
Jméno Zde`;

    const params = new URLSearchParams({ message });

    return `/contacts?${params.toString()}${isMobile ? "#contact-form" : ""}`;
  },
};
