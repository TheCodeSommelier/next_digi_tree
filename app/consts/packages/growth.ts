import { ProductInfo, Result } from '@/app/types/Product';
import { basicProductInfo } from './basic';

export const growthProductInfo: ProductInfo[] = [
  ...basicProductInfo,
  {
    title: 'Personalizovaný Follow-up a digitální vedení',
    text: 'Unikátní služba s individuálním přístupem vůčí vaší společnosti.',
    list: [
      'Kontinuální podpora po implemenataci.',
      'Personalizované vedení v digitáním prostředí pro zajištění dlouhodobého úspěchu.',
      'Měsíční předplatné s garantovanou hodinovou podporou.'
    ]
  },
  {
    title: 'Pravidelné AI novinky a analýzy',
    text: 'Tento premiový modul vám zajistí náskok před vaší konkurencí.',
    list: [
      'Pravidelný newsletter s nejnovějšími trendy.',
      'Upozornění na implementaci aktuálních technologií vašeho tech stacku.',
      'Pravidelná implementace legislativních změn v oblasti digitálních technologií.'
    ]
  },
];

export const growthResults: Result[] = [
  {
    iconUrl: '/images/merge_icon.svg',
    iconAlt: 'merge icon',
    description: 'Dodáme funkční řešení pro jeden konkrétní proces a měření dopadu na efektivitu.'
  },
  {
    iconUrl: '/images/lock_icon.svg',
    iconAlt: 'lock icon',
    description: 'Pravidla pro práci s daty a dodavateli. Checklist pro schvalování dalších use-casů.'
  },
  {
    iconUrl: '/images/graph_icon.svg',
    iconAlt: 'graph icon',
    description: 'Měsíční report se stavem roadmapy, riziky a doporučeními a 3 konkrétní akční kroky.'
  }
];
