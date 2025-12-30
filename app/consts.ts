import { Product } from './types/Product';

export const contacts = {
  tel: '+420602323799',
  email: 'digitree@digitree-edu.com',
  ico: '22351281',
  companyName: 'DIGITREE EDUCATION',
  address: 'U Hodin 122, 110 00 Praha'
} as const;

export const products = [
  {
    id: 'effectivity',
    title: 'Okamžitá měřitelná efektivita',
    description: 'Automatizace rutinních úkolů, rychlé dashboardy a jasná data pro rozhodnutí.',
    imageUrl: '/images/ai_hand.png'
  },
  {
    id: 'cyber-security',
    title: 'Kybernetická bezpečnost',
    description: 'Bezpečnostní standardy, které chrání vaše zákazníky i reputaci značky.',
    imageUrl: '/images/hacking.png'
  },
  {
    id: 'sustainable-tech-stack',
    title: 'Udržitelný tech stack',
    description: 'Škálovatelná architektura bez vendor lock-inu, která roste s vaším byznysem.',
    imageUrl: '/images/planner.png'
  }
] as Product[];
