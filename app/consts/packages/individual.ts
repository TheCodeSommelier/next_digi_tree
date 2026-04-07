import { ProductInfo, Result } from '@/app/types/Product';
import { basicProductInfo } from './basic';

export const individualProductInfo: ProductInfo[] = [
  ...basicProductInfo,
  {
    title: 'Analýza firemních procesů a opakované audity',
    text: 'Tento korporátní balíček zahrnuje prefernční přístup k novým inovacím z digitálního světa a umělé inteligence.',
    list: [
      'Detailní analýza současného stavu a identifikace klíčových oblastí ke zlepšení.',
      'Nalezení funkčích míst s potenciálem pro implementaci AI technologií.',
      'Pravidelné individualní bezpečnostní a procesní audity po odděleních.'
    ]
  },
  {
    title: 'Návrh a audit firemních směrnic',
    text: 'Detailně zanalyzujeme vaše stávající firemní směrnice a nařízení, v rámci nichž identifikujeme jejich slabiny.',
    list: [
      'Implementace strategie využití umělé inteligence do firemních směrnic, pro klíčová oddělení.',
      'Tvorba pozměňovacích návrhů interních směrnic, která reflektuje nejmoderněší technolgie.',
      'Audit etických a bezpečnostních směrnic v rámci CSR compliance.'
    ]
  },
  {
    title: 'Compliance workshop a školení vedení',
    text: 'Praktické školení akcionářů a top managmentu v rámci nejdůležitějsí legislativy.',
    list: [
      'Praktické školení GDPR, NIS2, DSA, Ai Act a českých zákonů.',
      'Specifikace typů dat, která firma smí a nesmí sbírat.',
      'Specifické školení pro střední a nižší management.'
    ]
  },
  {
    title: 'Bezpečnostní testy',
    text: 'Kvartální audit interních informačních systémů.',
    list: [
      'Komplexní kontrola interních sítí a komunikačních nástrojů.',
      'Doporučení pro správu prohlížečů a hesel.',
      'Identifikace slabých míst v rámci přístupových práv s detailními doporučeními.'
    ]
  },
  {
    title: 'Trvalá podpora a konzultace',
    text: 'Online podpora a konzultace šitá na míru vašim potřebám.',
    list: [
      'Průběžná podpora a expertní poradenství pro optimalizaci nově implementovaných procesů.',
      'IT newsletter aktualních novinek podpurujícich fungování AI systémů.',
      'Funkční adaptační plány na nové technolgie s měsíčním předplatným na dotaz.'
    ]
  },
  {
    title: 'IoT & Telematika pro Byznys',
    text: 'Tato služba rozšiřuje vaši digitální převahu do fyzického světa a pomáhá získat plnou kontrolu nad vaším vozovým parkem.',
    list: [
      'Navrhujeme a implementujeme komplexní řešení pro váš vozový park.',
      'Řešíme celý proces od hardwaru integrace přes aplikaci elektronické knihy jízd.',
      'Cílem je přinést efektivitu toku financí v rámci managmentu vaší flotily.'
    ]
  }
];

export const individualResults: Result[] = [
  {
    iconUrl: '/images/merge_icon.svg',
    iconAlt: 'merge icon',
    description: 'Měřený pokles počtu zjištění a procenta uzavřených nápravných opatření v dohodnutém termínu.'
  },
  {
    iconUrl: '/images/lock_icon.svg',
    iconAlt: 'lock icon',
    description: 'Návrh funkční privátní AI architektury s 0 úniky dat do veřejných databází. Proškolení zaměstanců.'
  },
  {
    iconUrl: '/images/graph_icon.svg',
    iconAlt: 'graph icon',
    description: 'Dodáme auditovatelný balíček, compliance-ready rámec (GDPR/NIS2/AI Act) pro data AI.'
  }
];
