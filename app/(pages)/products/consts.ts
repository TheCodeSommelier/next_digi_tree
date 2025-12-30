import { ChartConfig } from '@/app/components/UI/charts/chart';
import { ChartData } from '@/app/types/Chart';
import { TableRow } from '@/app/types/Table';

export const packages = [
  {
    title: 'AI a digitální akcelerace',
    description: 'Rychlé PoC, strategie pro AI a okamžitý dopad.',
    imageUrl: '/images/ai_package.jpg',
    imageAlt: 'AI package',
  },
  {
    title: 'Technologická revitalizace a bezpečnost',
    description: 'Revitalizace kódu, roadmapy, bezpečnostní standardy.',
    imageUrl: '/images/revitalization_package.jpg',
    imageAlt: 'Revitalization package',
  },
  {
    title: 'Efektivní leadership a růst',
    description: 'Scale-up procesy, leadership programy, produktový růst.',
    imageUrl: '/images/leadership_package.jpg',
    imageAlt: 'Leadership package',
  },
];

export const tableRows = [
  {
    service: 'AI a digitalizace',
    without: 'Ztráta dechu v digitální éře / Chybí strategie pro AI.',
    with: 'Funkční PoC, AI Policy a on-prem LLM řešení.',
  },
  {
    service: 'SW architektura a code review',
    without: 'Prorůstá neudržitelným kódem a stoupající technický dluh.',
    with: 'Detailní issue list, roadmapa refaktoringu, zvýšení výkonu.',
  },
  {
    service: 'Kyberbezpečnost a compliance',
    without: 'Riziko sankcí (NIS2/AI Act) a úniků dat.',
    with: 'Provozní check-listy, směrnice, audit reporty.',
  },
  {
    service: 'Cloud a TCO strategie',
    without: 'Nekontrolovaný cloudové náklady dusí rozpočet.',
    with: 'Snížení TCO až o 40%, Cost Optimization Plan, migrace bez downtime.',
  },
  {
    service: 'Procesy a automatizace',
    without: 'Týmy se topí v repetitivních úkolech (až 60% ztráty).',
    with: 'Flexibilní KPI dashboardy, optimalizovaný workflow (JIRA, CRM).',
  },
  {
    service: 'IoT & Telematika',
    without: 'Ztráta přehledu o klíčových aktivech a plýtvání zdroji.',
    with: 'Funkční architektonické schéma, test plán, spolehlivý deployment runbook.',
  },
] as TableRow[];

export const chartWithoutDigiData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 273 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
] as ChartData[];

export const chartWithoutDigiConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--color-primary)',
  },
} satisfies ChartConfig;


export const chartWithDigiData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 273 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
];

export const chartWithDigiConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--color-accent)',
  },
} satisfies ChartConfig;


export const chartDiffData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

export const chartDiffConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--color-accent)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--color-primary)',
  },
} satisfies ChartConfig;
