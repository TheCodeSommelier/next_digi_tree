import type { ServiceOrderPayload } from '@/app/types/Email';

export const createServiceOrderMessage = ({
  fullName,
  company,
  ico,
  email,
  message,
  courseTitle,
  services,
}: ServiceOrderPayload) => {
  const safeFullName = fullName?.trim() || 'neuvedeno';
  const safeCompany = company?.trim() || 'neuvedeno';
  const safeIco = ico?.trim() || 'neuvedeno';
  const safeEmail = email?.trim() || 'neuvedeno';
  const safeMessage = message?.trim() || '— žádná zpráva —';
  const safeCourseTitle = courseTitle?.trim() || 'Neuvedeno';
  const safeServices = services.length
    ? services.map((service) => `- ${service}`).join('\n')
    : '- žádná služba';

  return `
    Tato poptávka služby přišla z webu DigiTree.

    Oblast: ${safeCourseTitle}
    Jméno: ${safeFullName}
    Společnost: ${safeCompany}
    IČO: ${safeIco}
    Email pro odpověď: ${safeEmail}

    Poptávané služby:
    ${safeServices}

    Zpráva:
    ${safeMessage}`;
};
