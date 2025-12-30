import { EmailPayload } from '../../types/Email';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmailPayload = (payload: EmailPayload) => {
  const errors: string[] = [];

  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.push('Valid "email" is required.');
  }

  if (!payload.message || payload.message.trim().length === 0) {
    errors.push('"message" is required.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
