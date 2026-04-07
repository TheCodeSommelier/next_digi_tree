import { ProductInfo, Result } from "@/app/types/Product";

export const individualProductInfo: ProductInfo[] = [
  {
    title: "Procesní audit",
    text: "Tato služba pomáhá firmám zmapovat klíčové procesy, odhalit systémová slabá místa a vytvořit pevný základ pro další změnu a modernizaci.",
    list: [
      "Zmapování hlavních procesů, návazností a slabých míst napříč firmou.",
      "Identifikace úzkých míst, duplicit a překážek, které brání efektivnímu fungování.",
      "Návrh konkrétních změn, na kterých lze stavět další rozvoj a transformaci.",
    ],
  },
  {
    title: "Change management",
    text: "Tato služba pomáhá firmám zavádět změny tak, aby byly srozumitelné, řízené a skutečně se propsaly do každodenní praxe.",
    list: [
      "Návrh struktury změny, odpovědností a způsobu jejího zavedení.",
      "Pojmenování rizik a bariér, které mohou změnu brzdit nebo oslabit.",
      "Podpora managementu při řízení přechodu na nové fungování firmy.",
    ],
  },
  {
    title: "Nastavení odpovědností",
    text: "Tato služba pomáhá firmám zpřehlednit role, kompetence a rozhodování tak, aby změna nestála jen na nápadu, ale na jasně rozdělené odpovědnosti.",
    list: [
      "Vyjasnění rolí, vlastnictví témat a kompetencí napříč organizací.",
      "Odstranění překryvů odpovědností a zdržování v rozhodování.",
      "Nastavení jasnějších pravidel pro fungování managementu i týmů.",
    ],
  },
  {
    title: "Manažerská akademie",
    text: "Tato služba pomáhá firmám systematicky rozvíjet management tak, aby vedoucí pracovníci uměli změnu nejen přijmout, ale také ji nést a řídit.",
    list: [
      "Rozvoj manažerských dovedností v oblasti vedení lidí, komunikace a odpovědnosti.",
      "Posílení schopnosti managementu fungovat jistěji v období změn a růstu.",
      "Přenos rozvojových témat do každodenní firemní praxe.",
    ],
  },
  {
    title: "Leadership programy",
    text: "Tato služba pomáhá vedoucím pracovníkům rozvíjet leadership tak, aby dokázali firmu i tým vést s větší jistotou, srozumitelností a důvěrou.",
    list: [
      "Posílení schopnosti nastavovat směr, vést lidi a nést odpovědnost.",
      "Rozvoj leadershipu v situacích spojených se změnou, nejistotou a růstem.",
      "Praktický trénink stylu vedení, který podporuje výkon i stabilitu týmu.",
    ],
  },
  {
    title: "Komunikace mezi týmy",
    text: "Tato služba pomáhá firmám zlepšit spolupráci mezi odděleními, která musí při transformaci fungovat sladěněji než dříve.",
    list: [
      "Identifikace hlavních příčin nedorozumění mezi týmy a odděleními.",
      "Nastavení jasnějších očekávání, způsobu předávání informací a spolupráce.",
      "Nácvik komunikace, která podporuje společný cíl místo vnitřního tření.",
    ],
  },
  {
    title: "Digitalizační poradenství",
    text: "Tato služba pomáhá firmám určit, kde a jak může digitalizace skutečně podpořit jejich další rozvoj a fungování.",
    list: [
      "Posouzení současného stavu technologií a úrovně digitalizace ve firmě.",
      "Identifikace oblastí, kde digitalizace přinese největší smysl a dopad.",
      "Návrh priorit a dalšího postupu odpovídajícího reálným potřebám firmy.",
    ],
  },
  {
    title: "Návrh využití AI",
    text: "Tato služba pomáhá firmám najít konkrétní a smysluplné využití AI v návaznosti na jejich procesy, cíle a každodenní realitu.",
    list: [
      "Identifikace vhodných use-case scénářů pro využití AI ve firmě.",
      "Posouzení přínosu, připravenosti a rizik spojených s nasazením AI.",
      "Návrh konkrétních směrů, kde může AI přinést skutečnou hodnotu.",
    ],
  },
  {
    title: "Software a systémové poradenství",
    text: "Tato služba pomáhá firmám lépe rozhodovat o softwaru, systémech a jejich propojení tak, aby technologie podporovaly fungování byznysu.",
    list: [
      "Posouzení současných systémů a jejich vhodnosti pro další rozvoj firmy.",
      "Identifikace slabin, neefektivního nastavení nebo zbytečné složitosti.",
      "Doporučení vhodnějšího řešení a logičtějšího propojení systémů.",
    ],
  },
  {
    title: "AI Act / NIS2 / Compliance",
    text: "Tato služba pomáhá firmám zorientovat se v nových regulatorních požadavcích a připravit se na modernizaci s ohledem na bezpečnost a soulad.",
    list: [
      "Přehled hlavních povinností a rizik vyplývajících z AI Act, NIS2 a compliance požadavků.",
      "Posouzení, jak se regulatorní rámec promítá do konkrétní situace firmy.",
      "Návrh dalšího postupu, interních pravidel a priorit pro bezpečnější fungování.",
    ],
  },
  {
    title: "IT/SW architektura",
    text: "Tato služba pomáhá firmám posoudit technologickou architekturu a určit, zda je připravená na růst, změnu a dlouhodobě udržitelné fungování.",
    list: [
      "Posouzení stability, škálovatelnosti a přehlednosti současné architektury.",
      "Identifikace technických slabin a rizik bránících dalšímu rozvoji.",
      "Doporučení kroků pro robustnější a udržitelnější technologické fungování.",
    ],
  },
];

export const individualResults: Result[] = [
  {
    iconUrl: "/images/merge_icon.svg",
    iconAlt: "merge icon",
    description:
      "Změny ve firmě budou stát na jasném řízení, připravených lidech a smysluplně zvolených technologiích.",
  },
  {
    iconUrl: "/images/lock_icon.svg",
    iconAlt: "lock icon",
    description:
      "Digitalizace, software a AI budou navázané na reálné potřeby byznysu, ne jen na technologický trend.",
  },
  {
    iconUrl: "/images/graph_icon.svg",
    iconAlt: "graph icon",
    description:
      "Firma získá pevnější základ pro rozvoj, modernizaci a řízení změn v dlouhodobém horizontu.",
  },
];
