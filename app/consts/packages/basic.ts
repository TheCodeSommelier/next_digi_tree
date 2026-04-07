import { ProductInfo, Result } from '@/app/types/Product';

export const basicProductInfo: ProductInfo[] = [
  {
    title: 'Workshop: Záklády AI & Kyberbezpečnosti',
    text: 'Tato služba pomáhá firmám najít konkrétní AI use-case a vytvořit interní pravidla pro její používání (AI policy).',
    list: [
      'Pochopení základních pricipů umělé inteligence.',
      'Praktické ukázky nástrojů jako ChatGPT, Copilot a Claude.',
      'Analýza digitální stopy firmy a doporučená nastavenní nástrojů.'
    ]
  },
  {
    title: 'Masterclass: Pokročilý přístup k AI a firemním procesům',
    text: 'V rámci této služby provedeme detailní audit a navrhneme optimalizované workflow, abychom eliminovali opakující se úkoly a uvolnili čas vašich týmů pro strategickou práci.',
    list: [
      'Hloubkové seznámení s pokročilými AI technologiemi.',
      'Efektivní a etické využití umělé inteligence v rámci vaší firmy.',
      'Zaměření na praktické aplikace a případové studie.'
    ]
  },
  {
    title: 'Konzultace s IT týmem',
    text: 'Tato služba rozšiřuje vaši digitální převahu do fyzického světa a pomáhá získat plnou kontrolu nad vašimi daty.',
    list: [
      'Individuální konzultace zaměřená na itegraci AI nástrojů do vaší společnosti.',
      'Posouzení technických požadavků a doporučení ochrany dat.'
    ]
  }
];

export const basicResults: Result[] = [
  {
    iconUrl: '/images/merge_icon.svg',
    iconAlt: 'merge icon',
    description: 'Pre-test a post-test pro účastníky + report výsledků s baseline zlepšení v procentech.'
  },
  {
    iconUrl: '/images/lock_icon.svg',
    iconAlt: 'lock icon',
    description: 'Dodáme konkrétní opatření (prohlížeče, účty, sdílení dat) a checklist pro zavedení.'
  },
  {
    iconUrl: '/images/graph_icon.svg',
    iconAlt: 'graph icon',
    description: '12měsíční roadmapa s prioritizovanými use-casy a definované KPI pro IT.'
  }
];
