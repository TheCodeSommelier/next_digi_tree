import { ProductInfo, Result } from '@/app/types/Product';
import { basicProductInfo } from './basic';

export const growthProductInfo: ProductInfo[] = [
  ...basicProductInfo,
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
];

export const growthResults: Result[] = [
  {
    iconUrl: '/images/merge_icon.svg',
    iconAlt: 'merge icon',
    description: 'Dodáme funkční řešení pro jeden konkrétní proces a měření dopadu.'
  },
  {
    iconUrl: '/images/lock_icon.svg',
    iconAlt: 'lock icon',
    description: 'Hotový balíček „AI Governance“: AI Policy + pravidla pro práci s daty a dodavateli + checklist pro schvalování dalších use-casů (interně auditovatelné).'
  },
  {
    iconUrl: '/images/graph_icon.svg',
    iconAlt: 'graph icon',
    description: 'Každý měsíc: 1 report se stavem roadmapy, riziky a doporučeními + min. 3 konkrétní akční kroky (co zlepšit, co automatizovat, co nasadit dál).'
  }
];
