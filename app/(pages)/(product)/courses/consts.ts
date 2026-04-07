import { CourseId } from "./[id]/page";

export const courseProcessesTableRows: Record<string, string>[] = [
  {
    service: "Procesní audit",
    column1:
      "Nepřehledné fungování firmy, nejasné návaznosti a slabá mista v procesech",
    column2: "Audit, doporučení, návrh změn",
  },
  {
    service: "Nastavení odpovědností",
    column1: "Nejasné role, překryvy kompetenci, zdržování rozhodnutí",
    column2: "Návrh rolí, odpovědností a rozhodovacích pravidel",
  },
  {
    service: "Zlepšení spolupráce mezi odděleními",
    column1: "Tření mezi týmy, nepochopení mezi částmi firmy",
    column2: "Workshop, doporučení, komunikační rámec",
  },
  {
    service: "Change management",
    column1: "Změny se nedaří dotáhnout do praxe",
    column2: "Návrh zavedení změny, podpora managementu",
  },
  {
    service: "Rozvoj managementu",
    column1: "Slabší leadership, nejasné vedení lidí",
    column2: "školení, workshopy, manažerský rozvoj",
  },
  {
    service: "Interní komunikace",
    column1: "Informace se ztrácí, týmy si nerozumi",
    column2: "Návrh zlepšení komunikace, školení, facilitace",
  },
];

export const courseDigitalizationTableRows: Record<string, string>[] = [
  {
    service: "Digitalizační poradenství",
    column1: "Nejasný směr modernizace a slabé využití technologií",
    column2: "Návrh dalšiho postupu a smysluplných priorit",
  },
  {
    service: "Návrh využití Al",
    column1: "Tlak na Al bez jasného use case a přínosu",
    column2: "Konkrétní scénáře využití Al pro vaši firmu",
  },
  {
    service: "Software a systémové poradenstvi",
    column1: "Nevhodné nástroje nebo neefektivní systémové nastavení",
    column2: "Doporučení vhodnějšího řešení a lepšího propojení systémů",
  },
  {
    service: "Automatizace",
    column1: "Ztráta času na rutinních úkolech a manuální práci",
    column2: "Návrh automatizace, která šetří kapacitu a zvyšuje přehled",
  },
  {
    service: "IT/SW architektura",
    column1: "Nestabilní nebo těžko rozšiřitelná technologická struktura",
    column2: "Doporučení pro robustnější a udržitelnější architekturu",
  },
  {
    service: "Code review",
    column1: "Technický dluh, nízká kvalita kódu nebo slabá udržitelnost",
    column2: "Přehled slabých míst a návrh zlepšení kvality",
  },
  {
    service: "Technologická doporučení",
    column1: "Nejistota při vyběru technologií a dalšího směru",
    column2: "Praktická doporučení odpovídající potřebám firmy",
  },
  {
    service: "Al Act / NIS2 / compliance",
    column1: "Nejistota v regulatorních požadavcích a riziko nesouladu",
    column2: "Přehled povinností a doporučený rámec dalšího postupu",
  },
];

export const courseEducationTableRows: Record<string, string>[] = [
  {
    service: "Firemní školení",
    column1: "Potřebu rozvoje konkrétních dovedností ve firmě",
    column2: "Praktické školení zaměřené na reálné situace z praxe",
  },
  {
    service: "Manažerská akademie",
    column1: "Slabší připravenost vedoucích pracovníků",
    column2: "Systematický rozvoj managementu a leadershipu",
  },
  {
    service: "Leadership programy",
    column1: "Nejistotu ve vedení lidí a slabou manažerskou jistotu",
    column2: "Silnější leadership a efektivnější vedení týmů",
  },
  {
    service: "Komunikace mezi týmy",
    column1: "Tření mezi odděleními a nedorozumění v každodenní spolupráci",
    column2: "Lepší porozumění, jasnější očekávání a hladší spolupráci",
  },
  {
    service: "Transparentní a asertivní komunikace",
    column1: "Nejasnou nebo konfliktní komunikaci uvnitř firmy",
    column2: "Srozumitelnější komunikaci a jistější vystupování",
  },
  {
    service: "Náročné rozhovory",
    column1: "Odkládání problémů, slabou zpětnou vazbu a nepříjemné situace",
    column2: "Praktické frameworky pro těžké rozhovory v managementu",
  },
  {
    service: "Rozvoj vedoucích pracovníků",
    column1: "Potřebu posunout manažery v každodenním fungování",
    column2: "Rozvoj lidí, kteří vedou týmy i změny ve firmě",
  },
  {
    service: "Workshopy pro týmy a management",
    column1: "Potřebu sladit tým, vedení nebo spolupráci",
    column2: "Interaktivní formát zaměřený na konkrétní problém firmy",
  },
];

export interface CourseData {
  title: string;
  subtitle: string;
  imageUrl: string;
  rows: Record<string, string>[];
}

export const tableRowsHashLookup: Record<CourseId, CourseData> = {
  processes: {
    title: "Procesy, řízení a rozvoj firmy",
    subtitle:
      "Zlepšujeme fungování firem od procesů a odpovědností až po spolupráci mezi odděleními. Výsledkem je přehlednější řízení, méně vnitřního chaosu a organizace, která funguje stabilněji a efektivněji.",
    imageUrl: "/images/metrics.png",
    rows: courseProcessesTableRows,
  },
  digitalization: {
    title: "Digitalizace, software a AI",
    imageUrl: "/images/cyber_sec.png",
    subtitle:
      "Navrhujeme smysluplnou digitalizaci, využití AI a technologická řešení, která firmám skutečně pomáhají fungovat lépe. Od architektury a automatizace až po compliance a modernizační doporučení propojujeme technologie s reálnými potřebami byznysu.",
    rows: courseDigitalizationTableRows,
  },
  education: {
    title: "Firemní vzdělávání",
    imageUrl: "/images/presenting_room.jpg",
    subtitle:
      "Pomáháme firmám rozvíjet vedoucí pracovníky, posilovat leadership a zlepšovat komunikaci napříč týmy. Díky praktickým školením a workshopům podporujeme management i zaměstnance v tom, aby fungovali jistěji, srozumitelněji a efektivněji.",
    rows: courseEducationTableRows,
  },
};
