"use client";

import { ROUTES } from "@/app/routes";
import Card from "../UI/cards/Card";
import SectionHeading from "../UI/SectionHeading";
import Link from "next/link";

const CoursesSection = () => {
  return (
    <section className="space-y-6 py-26">
      <SectionHeading>Oblasti poradenství</SectionHeading>
      <div className="grid gap-6 md:grid-cols-3">
        <Link href={ROUTES.courses({ courseId: "processes" })}>
          <Card
            title="Procesy, řízení a rozvoj firmy"
            description="Zlepšujeme fungování firem od procesů a odpovědností až po spolupráci mezi odděleními. Výsledkem je přehlednější řízení, méně vnitřního chaosu a organizace, která funguje stabilněji a efektivněji."
            imageUrl="/images/metrics.png"
            imageAlt=""
          />
        </Link>

        <Link href={ROUTES.courses({ courseId: "digitalization" })}>
          <Card
            title="Digitalizace, software a AI"
            description="Navrhujeme smysluplnou digitalizaci, využití AI a technologická řešení, která firmám skutečně pomáhají fungovat lépe. Od architektury a automatizace až po compliance a modernizační doporučení propojujeme technologie s reálnými potřebami byznysu."
            imageUrl="/images/cyber_sec.png"
            imageAlt=""
          />
        </Link>

        <Link href={ROUTES.courses({ courseId: "education" })}>
          <Card
            title="Firemní vzdělávání"
            description="Pomáháme firmám rozvíjet vedoucí pracovníky, posilovat leadership a zlepšovat komunikaci napříč týmy. Díky praktickým školením a workshopům podporujeme management i zaměstnance v tom, aby fungovali jistěji, srozumitelněji a efektivněji."
            imageUrl="/images/presenting_room.jpg"
            imageAlt=""
          />
        </Link>
      </div>
    </section>
  );
};

export default CoursesSection;
