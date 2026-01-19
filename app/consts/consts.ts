export const contacts = {
  tel: '+420602323799',
  email: 'digitree@digitree-edu.com',
  ico: '22351281',
  companyName: 'DIGITREE EDUCATION',
  address: 'U Hodin 122, 110 00 Praha'
} as const;

export const isProduction = process.env.NODE_ENV === 'production';

export const getBaseUrlFromHeaders = (
  headers: Headers | { get: (name: string) => string | null }
): string => {
  const forwardedProto = headers.get('x-forwarded-proto');
  const proto = forwardedProto?.split(',')[0]?.trim() || 'http';
  const host = headers.get('x-forwarded-host') || headers.get('host') || 'localhost:3000';

  return `${proto}://${host}`;
};
