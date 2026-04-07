export type EmailPayload = {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export type ServiceOrderPayload = {
  fullName?: string;
  company?: string;
  ico?: string;
  email?: string;
  message?: string;
  courseTitle?: string;
  services: string[];
};

export type ServiceOrderState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  errors?: string[];
};
