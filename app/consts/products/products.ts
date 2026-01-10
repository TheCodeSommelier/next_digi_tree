import { basicProductInfo, basicResults, } from './basic';
import { individualProductInfo, individualResults, } from './individual';
import { growthProductInfo, growthResults,  } from './growth';

import type { Product } from '@/app/types/Product';

export const products: Product[] = [
  {
    id: 'basic',
    title: 'Základní balíček',
    subtitle: 'Pochopení záklaních pricipů AI, hloubkové seznámení s pokročilými technologiemi a indivduální konzultace.',
    description: 'Automatizace rutinních úkolů, rychlé dashboardy a jasná data pro rozhodnutí.',
    heroImageUrl: '/images/ai_hand.png',
    midHeroImageUrl: '',
    midHeroDescription: 'Vaše týmy tráví až 60 % času rutinou, zatímco konkurence zrychluje s umělou inteligencí. Chybí vám jasná strategie a bezpečný rámec, jak AI nasadit, aniž byste ohrozili citlivá data.',
    midHeroTitle: 'Neplánujte AI. Implementujte ji hned.',
    packageInfo: basicProductInfo,
    results: basicResults
  },
  {
    id: 'growth',
    title: 'Růstový balíček',
    subtitle: 'Premiová technologická strategie, s praktickou implementací a právním rámcem, zaměřená na optimalizaci.',
    description: 'Bezpečnostní standardy, které chrání vaše zákazníky i reputaci značky.',
    heroImageUrl: '/images/hacking.png',
    midHeroImageUrl: '',
    midHeroDescription: 'Vaše týmy tráví až 60 % času rutinou, zatímco konkurence zrychluje s umělou inteligencí. Chybí vám jasná strategie a bezpečný rámec, jak AI nasadit, aniž byste ohrozili citlivá data.',
    midHeroTitle: 'Neplánujte AI. Implementujte ji hned.',
    packageInfo: growthProductInfo,
    results: growthResults
  },
  {
    id: 'individual',
    title: 'Individuální balíček',
    subtitle: 'Získejte funkční AI řešení, 100% kontrolu nad daty a akční plán, který garantuje měřitelné zisky.',
    description: 'Škálovatelná architektura bez vendor lock-inu, která roste s vaším byznysem.',
    heroImageUrl: '/images/planner.png',
    midHeroImageUrl: '',
    midHeroDescription: 'Vaše týmy tráví až 60 % času rutinou, zatímco konkurence zrychluje s umělou inteligencí. Chybí vám jasná strategie a bezpečný rámec, jak AI nasadit, aniž byste ohrozili citlivá data.',
    midHeroTitle: 'Neplánujte AI. Implementujte ji hned.',
    packageInfo: individualProductInfo,
    results: individualResults
  }
];
