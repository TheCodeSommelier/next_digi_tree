import { ProductInfo, Result } from "@/app/types/Product";

export const basicProductInfo: ProductInfo[] = [
  {
    title: "Procesní audit",
    text: "Tato služba pomáhá firmám najít konkrétní AI use-case a vytvořit interní pravidla pro její používání (AI policy).",
    list: [
      "Pochopení základních pricipů umělé inteligence.",
      "Praktické ukázky nástrojů jako ChatGPT, Copilot a Claude.",
      "Analýza digitální stopy firmy a doporučená nastavenní nástrojů.",
    ],
  },
  {
    title: "Nastavení odpovědností",
    text: "V rámci této služby provedeme detailní audit a navrhneme optimalizované workflow, abychom eliminovali opakující se úkoly a uvolnili čas vašich týmů pro strategickou práci.",
    list: [
      "Hloubkové seznámení s pokročilými AI technologiemi.",
      "Efektivní a etické využití umělé inteligence v rámci vaší firmy.",
      "Zaměření na praktické aplikace a případové studie.",
    ],
  },
  {
    title: "Zlepšení spolupráce mezi odděleními",
    text: "Tato služba rozšiřuje vaši digitální převahu do fyzického světa a pomáhá získat plnou kontrolu nad vašimi daty.",
    list: [
      "Individuální konzultace zaměřená na itegraci AI nástrojů do vaší společnosti.",
      "Posouzení technických požadavků a doporučení ochrany dat.",
    ],
  },
  {
    title: "Interní komunikace",
    text: "Tato služba pomáhá firmám zmapovat klíčové procesy, odhalit slabá místa a navrhnout konkrétní zlepšení fungování.",
    list: [
      "Zmapování hlavních procesů, návazností a odpovědností napříč firmou.",
      "Identifikace úzkých míst, duplicit, zdržení a neefektivních kroků.",
      "Návrh konkrétních změn pro přehlednější a efektivnější fungování.",
    ],
  },
  {
    title: "Komunikace mezi týmy",
    text: "Tato služba pomáhá firmám zlepšit porozumění mezi týmy, které spolu denně spolupracují, ale často mluví odlišným jazykem.",
    list: [
      "Pochopení typických příčin nedorozumění mezi odděleními.",
      "Praktické principy pro jasnější formulaci očekávání a požadavků.",
      "Nácvik komunikace, která podporuje spolupráci místo frustrace.",
    ],
  },
  {
    title: "Transparentní a asertivní komunikace",
    text: "Tato služba pomáhá lidem ve firmách komunikovat otevřeněji, srozumitelněji a zároveň s respektem k druhé straně.",
    list: [
      "Základy transparentní komunikace bez zbytečných nedorozumění.",
      "Praktický nácvik asertivního vyjadřování v pracovních situacích.",
      "Posílení jistoty při sdělování očekávání, zpětné vazby a hranic.",
    ],
  },
  {
    title: "Rozvoj vedoucích pracovníků",
    text: "Tato služba pomáhá firmám rozvíjet vedoucí pracovníky v každodenním vedení lidí, rozhodování a řízení týmů.",
    list: [
      "Posílení manažerské jistoty v běžném provozu i náročných situacích.",
      "Rozvoj schopnosti vést lidi, zadávat očekávání a pracovat s odpovědností.",
      "Praktické principy leadershipu použitelné v každodenním fungování týmu.",
    ],
  },
  {
    title: "Digitalizační poradenství",
    text: "Tato služba pomáhá firmám zorientovat se v digitalizaci a určit, které změny dávají skutečný smysl pro jejich fungování.",
    list: [
      "Identifikace oblastí, kde technologie mohou firmě reálně pomoci.",
      "Posouzení současného stavu a doporučení priorit dalšího postupu.",
      "Návrh smysluplných digitalizačních kroků bez zbytečné složitosti.",
    ],
  },
];

export const basicResults: Result[] = [
  {
    iconUrl: "/images/merge_icon.svg",
    iconAlt: "merge icon",
    description:
      "Jasněji nastavené procesy, role a odpovědnosti pro každodenní řízení bez zbytečného chaosu.",
  },
  {
    iconUrl: "/images/lock_icon.svg",
    iconAlt: "lock icon",
    description:
      "Méně tření mezi odděleními, srozumitelnější očekávání a funkčnější předávání informací.",
  },
  {
    iconUrl: "/images/graph_icon.svg",
    iconAlt: "graph icon",
    description:
      "Pevnější řídicí rámec, rychlejší orientace v provozu a větší jistota managementu v každodenní praxi.",
  },
];
