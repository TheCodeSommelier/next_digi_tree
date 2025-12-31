import { ProductInfo, Result } from '@/app/types/Product';

export const techStackProductInfo: ProductInfo[] = [
  {
    title: 'AI & Digitalizace firem',
    text: 'Tato služba pomáhá firmám najít konkrétní AI use-case a vytvořit interní pravidla pro její používání (AI policy).',
    list: [
      'Vždy začínáme Proof-of-Concept (PoC) projekty, které rychle prokážou hodnotu a dají vám kvantifikovatelné výsledky.',
      'Pro maximální bezpečnost dat implementujeme řešení od cloudových API až po vlastní on-premise nebo edge LLM modely.',
      'V rámci PoC nasazujeme nástroje jako Copilot a ChatGPT, abychom okamžitě demonstrovali funkčnost.'
    ]
  },
  {
    title: 'Procesy & Automatizace',
    text: 'V rámci této služby provedeme detailní audit a navrhneme optimalizované workflow, abychom eliminovali opakující se úkoly a uvolnili čas vašich týmů pro strategickou práci.',
    list: [
      'Cílem je snížit rutinu až o 60%.',
      'Optimalizujeme vaše procesy pomocí nástrojů jako JIRA, CRM systémy a Power Automate.',
      'Navrhujeme přehledné dashboardy s KPI, které vám dávají okamžitý přehled o výkonnosti.'
    ]
  },
  {
    title: 'IoT & Telematika pro Byznys',
    text: 'Tato služba rozšiřuje vaši digitální převahu do fyzického světa a pomáhá získat plnou kontrolu nad vašimi aktivy.',
    list: [
      'Navrhujeme a implementujeme komplexní IoT řešení.',
      'Řešíme celý proces od HW integrace přes vývoj SW (Teltonika/Ruptela/Sherlog) až po certifikace.',
      'Cílem je přinést efektivitu a nové datové toky tam, kde je to nejvíce potřeba.'
    ]
  }
];

export const techStackResults: Result[] = [
  {
    iconUrl: '/images/merge_icon.svg',
    iconAlt: 'merge icon',
    description: 'Jasnou, akční AI roadmapu na 12 měsíců a interní Al Policy.'
  },
  {
    iconUrl: '/images/lock_icon.svg',
    iconAlt: 'lock icon',
    description: '100% kontrola nad daty díky návrhu a implementaci on-premise LLM řešení.'
  },
  {
    iconUrl: '/images/graph_icon.svg',
    iconAlt: 'graph icon',
    description: 'Funkční PoC demo s ověřeným a měřitelným obchodním dopadem.'
  }
];
