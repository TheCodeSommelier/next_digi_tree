import { basicProductInfo, basicResults } from "./basic";
import { individualProductInfo, individualResults } from "./individual";
import { growthProductInfo, growthResults } from "./growth";

import type { Product } from "@/app/types/Product";

export const products: Product[] = [
  {
    id: "stabilization",
    title: "Stabilizační balíček",
    subtitle:
      "Stabilizace procesů, rolí a komunikace pro přehlednější řízení a pevnější fungování firmy.",
    heroImageUrl: "/images/ai_hand.png",
    midHeroTitle: "Pevnější základy pro přehlednější řízení.",
    midHeroDescription:
      "Pomáháme firmám zpřehlednit procesy, nastavit odpovědnosti a zlepšit spolupráci mezi týmy. Balíček je vhodný tam, kde organizace potřebuje snížit vnitřní chaos a vytvořit stabilní základ pro další růst.",
    packageInfo: basicProductInfo,
    results: basicResults,
  },
  {
    id: "development",
    title: "Rozvojový balíček",
    subtitle:
      "Posílení managementu, leadershipu a spolupráce pro firmy, které chtějí růst efektivněji a s větší jistotou.",
    heroImageUrl: "/images/hacking.png",
    midHeroTitle: "Silnější vedení. Lepší spolupráce. Vyšší výkon.",
    midHeroDescription:
      "Balíček zaměřený na rozvoj managementu, leadershipu a každodenní spolupráce ve firmě. Pomáhá posílit komunikační jistotu, vedení lidí i fungování týmů v organizacích, které chtějí růst efektivněji.",
    packageInfo: growthProductInfo,
    results: growthResults,
  },
  {
    id: "transformation",
    title: "Individuální balíček",
    subtitle:
      "Strategická změna propojující procesy, lidi a technologie do dlouhodobě funkčního celku.",
    heroImageUrl: "/images/planner.png",
    midHeroTitle: "Smysluplná změna, která funguje jako celek.",
    midHeroDescription:
      "Pro firmy, které chtějí propojit procesní změnu, rozvoj managementu a modernizaci technologií do jednoho rámce. Balíček podporuje dlouhodobě udržitelný rozvoj firmy, ne jen dílčí zásahy bez návaznosti.",
    packageInfo: individualProductInfo,
    results: individualResults,
  },
];
