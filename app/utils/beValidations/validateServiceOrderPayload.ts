import type { ServiceOrderPayload } from '@/app/types/Email';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateServiceOrderPayload = (payload: ServiceOrderPayload) => {
  const errors: string[] = [];

  if (!payload.fullName || payload.fullName.trim().length === 0) {
    errors.push('Vyplňte jméno.');
  }

  if (!payload.company || payload.company.trim().length === 0) {
    errors.push('Vyplňte společnost.');
  }

  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.push('Zadejte platný e-mail.');
  }

  if (!payload.message || payload.message.trim().length === 0) {
    errors.push('Doplňte zprávu.');
  }

  if (!payload.services.length) {
    errors.push('Vyberte alespoň jednu službu.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
