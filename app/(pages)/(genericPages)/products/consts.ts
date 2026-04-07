import { ChartConfig } from "@/app/components/UI/charts/chart";
import { ChartData } from "@/app/types/Chart";

export const packages = [
  {
    title: "AI a digitální akcelerace",
    description: "Rychlé PoC, strategie pro AI a okamžitý dopad.",
    imageUrl: "/images/ai_package.jpg",
    imageAlt: "AI package",
  },
  {
    title: "Technologická revitalizace a bezpečnost",
    description: "Revitalizace kódu, roadmapy, bezpečnostní standardy.",
    imageUrl: "/images/revitalization_package.jpg",
    imageAlt: "Revitalization package",
  },
  {
    title: "Efektivní leadership a růst",
    description: "Scale-up procesy, leadership programy, produktový růst.",
    imageUrl: "/images/leadership_package.jpg",
    imageAlt: "Leadership package",
  },
];

export const productsTableRows: Record<string, string>[] = [
  {
    service: "Procesy a odpovědnosti",
    column1: "Nejasné role, zdržování a chaos v rozhodování",
    column2:
      "Jasnější odpovědnosti, přehlednější řízení a funkčnější spolupráce",
  },
  {
    service: "Management a vedení lidí",
    column1: "Slabá komunikace, nejasná očekávání a nízká odpovědnost",
    column2:
      "Silnější management, lepší vedení lidí a větší srozumitelnost ve firmě",
  },
  {
    service: "Spolupráce mezi týmy",
    column1: "Tření mezi odděleními, nedorozumění a ztráta času",
    column2:
      "Transparentnější komunikace a efektivnější spolupráce napříč firmou",
  },
  {
    service: "Firemní vzdělávání",
    column1: "Školení bez reálného dopadu do praxe",
    column2:
      "Praktický rozvoj lidí, managementu i týmů s návazností na každodenní fungování",
  },
  {
    service: "Digitalizace a AI",
    column1: "Nákup nástrojů bez jasného přínosu a strategie",
    column2:
      "Smysluplné využití technologií, které podporují reálné potřeby firmy",
  },
  {
    service: "Software, compliance a modernizace",
    column1: "Technologický dluh, rizika a nejasný další směr",
    column2:
      "Lepší architektura, doporučení, compliance a dlouhodobě udržitelný rozvoj",
  },
];

export const chartWithoutDigiData = [
  { month: "Komunikace", desktop: 150 },
  { month: "Digitalizace", desktop: 182 },
  { month: "Compliance", desktop: 191 },
  { month: "AI", desktop: 110 },
  { month: "Procesy", desktop: 65 },
  { month: "Management", desktop: 75 },
] as ChartData[];

export const chartWithoutDigiConfig = {
  desktop: {
    label: "bez Digitree",
    color: "var(--color-primary)",
  },
} satisfies ChartConfig;

export const chartWithDigiData = [
  { month: "Komunikace", desktop: 200 },
  { month: "Digitalizace", desktop: 210 },
  { month: "Compliance", desktop: 200 },
  { month: "AI", desktop: 210 },
  { month: "Procesy", desktop: 200 },
  { month: "Management", desktop: 210 },
];

export const chartWithDigiConfig = {
  desktop: {
    label: "s Digitree",
    color: "var(--color-accent)",
  },
} satisfies ChartConfig;

export const chartDiffData = [
  {
    month: "Komunikace",
    desktop: chartWithoutDigiData[0].desktop,
    mobile: chartWithDigiData[0].desktop,
  },
  {
    month: "Digitalizace",
    desktop: chartWithoutDigiData[1].desktop,
    mobile: chartWithDigiData[1].desktop,
  },
  {
    month: "Compliance",
    desktop: chartWithoutDigiData[2].desktop,
    mobile: chartWithDigiData[2].desktop,
  },
  {
    month: "AI",
    desktop: chartWithoutDigiData[3].desktop,
    mobile: chartWithDigiData[3].desktop,
  },
  {
    month: "Procesy",
    desktop: chartWithoutDigiData[4].desktop,
    mobile: chartWithDigiData[4].desktop,
  },
  {
    month: "Management",
    desktop: chartWithoutDigiData[5].desktop,
    mobile: chartWithDigiData[5].desktop,
  },
];

export const chartDiffConfig = {
  desktop: {
    label: "bez Digitree",
    color: "var(--color-primary)",
  },
  mobile: {
    label: "s Digitree",
    color: "var(--color-accent)",
  },
} satisfies ChartConfig;
