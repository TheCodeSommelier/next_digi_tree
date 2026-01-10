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
    midHeroTitle: 'Neplánujte AI. Implementujte ji hned.',
    midHeroDescription: 'Firmy dnes čelí rostoucímu tlaku na digitální transformaci, ale často postrádají know-how pro bezpečnou implementaci AI technologií. Naše produktové balíčky poskytují nejen vzdělání, ale i praktické nástroje a kontinuální podporu.',
    packageInfo: basicProductInfo,
    results: basicResults
  },
  {
    id: 'growth',
    title: 'Růstový balíček',
    subtitle: 'Technologická strategie, s praktickou implementací a právním rámcem, zaměřená na optimalizaci.',
    description: 'Bezpečnostní standardy, které chrání vaše zákazníky i reputaci značky.',
    heroImageUrl: '/images/hacking.png',
    midHeroTitle: 'AI v podnikání',
    midHeroDescription: 'Prémiová AI strategie s praktickou implementací a právním rámcem, zaměřená na optimalizaci klíčových procesů ve vaší firmě. Balíček zahrnuje vše potřebné pro efektivní integraci AI a trvalou podporu.',
    packageInfo: growthProductInfo,
    results: growthResults
  },
  {
    id: 'individual',
    title: 'Individuální balíček',
    subtitle: 'Prémiové řešení pro velké firmy s důrazem na zakázkovou spolupráci, trvalou podporou, audity a hlubokovou implementací AI technologií.',
    description: 'Škálovatelná architektura bez vendor lock-inu, která roste s vaším byznysem.',
    heroImageUrl: '/images/planner.png',
    midHeroTitle: 'Ochrana, kontrola a růst',
    midHeroDescription: 'Nejkomplexnější prémiové řešení pro velké firmy s důrazem na zakázkovou spolupráci, trvalou podporu, opakované bezpečnostní audity a hlubokovou implementací AI technologií.',
    packageInfo: individualProductInfo,
    results: individualResults
  }
];
