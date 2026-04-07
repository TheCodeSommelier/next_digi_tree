"use client";

import Card from "../UI/cards/Card";
import SectionHeading from "../UI/SectionHeading";

const ThreePillarsSection = () => {
  return (
    <section className="space-y-6 py-26">
      <SectionHeading>3 pilíře, které změní vaše podnikání</SectionHeading>
      <div className="grid gap-6 md:grid-cols-3">
        <Card
          title="Procesy, řízení a rozvoj firmy"
          description="Zlepšujeme fungování firem od procesů a odpovědností až po spolupráci mezi odděleními. Výsledkem je přehlednější řízení, méně vnitřního chaosu a organizace, která funguje stabilněji a efektivněji."
          imageUrl="/images/metrics.png"
          imageAlt=""
        />
        <Card
          title="Digitalizace, software a AI"
          description="Navrhujeme smysluplnou digitalizaci, využití AI a technologická řešení, která firmám skutečně pomáhají fungovat lépe. Od architektury a automatizace až po compliance a modernizační doporučení propojujeme technologie s reálnými potřebami byznysu."
          imageUrl="/images/cyber_sec.png"
          imageAlt=""
        />
        <Card
          title="Firemní vzdělávání"
          description="Pomáháme firmám rozvíjet vedoucí pracovníky, posilovat leadership a zlepšovat komunikaci napříč týmy. Díky praktickým školením a workshopům podporujeme management i zaměstnance v tom, aby fungovali jistěji, srozumitelněji a efektivněji."
          imageUrl="/images/presenting_room.jpg"
          imageAlt=""
        />
      </div>
    </section>
  );
};

export default ThreePillarsSection;
