import { effectivityProductInfo, effectivityResults } from './effectivity';
import { techStackProductInfo, techStackResults } from './techStack';
import { cyberProductInfo, cyberResults } from './cyber';

import type { Product } from '@/app/types/Product';

export const products: Product[] = [
  {
    id: 'effectivity',
    title: 'Okamžitá měřitelná efektivita',
    subtitle: 'Získejte funkční AI řešení, 100% kontrolu nad daty a akční plán, který garantuje měřitelné zisky.',
    description: 'Automatizace rutinních úkolů, rychlé dashboardy a jasná data pro rozhodnutí.',
    imageUrl: '/images/ai_hand.png',
    packageInfo: effectivityProductInfo,
    results: effectivityResults
  },
  {
    id: 'cyber-security',
    title: 'Kybernetická bezpečnost',
    subtitle: 'Získejte funkční AI řešení, 100% kontrolu nad daty a akční plán, který garantuje měřitelné zisky.',
    description: 'Bezpečnostní standardy, které chrání vaše zákazníky i reputaci značky.',
    imageUrl: '/images/hacking.png',
    packageInfo: cyberProductInfo,
    results: cyberResults
  },
  {
    id: 'sustainable-tech-stack',
    title: 'Udržitelný tech stack',
    subtitle: 'Získejte funkční AI řešení, 100% kontrolu nad daty a akční plán, který garantuje měřitelné zisky.',
    description: 'Škálovatelná architektura bez vendor lock-inu, která roste s vaším byznysem.',
    imageUrl: '/images/planner.png',
    packageInfo: techStackProductInfo,
    results: techStackResults
  }
];
