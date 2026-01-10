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
    without: 'Prorůstá neudržitelným kódem a stoupá technický dluh.',
    with: 'Detailní issue list, roadmapa refaktoringu, zvýšení výkonu.',
  },
  {
    service: 'Kyberbezpečnost a compliance',
    without: 'Riziko sankcí (NIS2/AI Act) a úniků dat.',
    with: 'Provozní check-listy, směrnice, audit reporty.',
  },
  {
    service: 'Cloud a TCO strategie',
    without: 'Nekontrolované cloudové náklady dusí rozpočet.',
    with: 'Snížení TCO až o 40%, Cost Optimization Plan, migrace bez downtime.',
  },
  {
    service: 'Procesy a automatizace',
    without: 'Týmy se topí v repetitivních úkolech (až 60% ztráty).',
    with: 'Flexibilní KPI dashboardy, optimalizovaný workflow (JIRA, CRM).',
  },
  {
    service: 'IoT & Telematika',
    without: 'Ztráta přehledu o vozovém parku a plýtvání zdroji.',
    with: 'Funkční přehled vozového parku a efektivní správa.',
  },
] as TableRow[];

export const chartWithoutDigiData = [
  { month: 'AI', desktop: 150 },
  { month: 'Software', desktop: 182 },
  { month: 'Compliance', desktop: 191 },
  { month: 'Cloud', desktop: 110 },
  { month: 'Procesy', desktop: 65 },
  { month: 'Telematika', desktop: 75 },
] as ChartData[];

export const chartWithoutDigiConfig = {
  desktop: {
    label: 'bez Digitree',
    color: 'var(--color-primary)',
  },
} satisfies ChartConfig;


export const chartWithDigiData = [
  { month: 'AI', desktop: 200 },
  { month: 'Software', desktop: 210 },
  { month: 'Compliance', desktop: 200 },
  { month: 'Cloud', desktop: 210 },
  { month: 'Procesy', desktop: 200 },
  { month: 'Telematika', desktop: 210 },
];

export const chartWithDigiConfig = {
  desktop: {
    label: 's Digitree',
    color: 'var(--color-accent)',
  },
} satisfies ChartConfig;


export const chartDiffData = [
  { month: 'AI', desktop: chartWithoutDigiData[0].desktop, mobile: chartWithDigiData[0].desktop },
  { month: 'Software', desktop: chartWithoutDigiData[1].desktop, mobile: chartWithDigiData[1].desktop },
  { month: 'Compliance', desktop: chartWithoutDigiData[2].desktop, mobile: chartWithDigiData[2].desktop },
  { month: 'Cloud', desktop: chartWithoutDigiData[3].desktop, mobile: chartWithDigiData[3].desktop },
  { month: 'Procesy', desktop: chartWithoutDigiData[4].desktop, mobile: chartWithDigiData[4].desktop },
  { month: 'Telematika', desktop: chartWithoutDigiData[5].desktop, mobile: chartWithDigiData[5].desktop },
];

export const chartDiffConfig = {
  desktop: {
    label: 'bez Digitree',
    color: 'var(--color-primary)',
  },
  mobile: {
    label: 's Digitree',
    color: 'var(--color-accent)',
  },
} satisfies ChartConfig;
