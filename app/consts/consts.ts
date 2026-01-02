export const contacts = {
  tel: '+420602323799',
  email: 'digitree@digitree-edu.com',
  ico: '22351281',
  companyName: 'DIGITREE EDUCATION',
  address: 'U Hodin 122, 110 00 Praha'
} as const;

export const isProduction = process.env.NODE_ENV === 'production';
export const BASE_URL = !isProduction ? 'http://localhost:3000' : 'https://www.digitree-edu.com';
