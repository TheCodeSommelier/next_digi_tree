'use client';

import Card from '../UI/cards/Card';
import SectionHeading from '../UI/SectionHeading';

const ThreePillarsSection = () => {
  return <section className="space-y-6 py-26">
    <SectionHeading>
      3 pilíře, které změní vaše podnikání
    </SectionHeading>
    <div className="grid gap-6 md:grid-cols-3">
      <Card
        title="Okamžitá měřitelná efektivita"
        description="Automatizujeme klíčové procesy a zkracujeme čas na rutinní úkoly až o 60 %. Váš tým se soustředí na růst, ne na rutinu."
        imageUrl="/images/metrics.png"
        imageAlt=''
      />
      <Card
        title="Kybernetická bezpečnost"
        description="GDPR, NIS2, AI Act. Neztrácejte spánek kvůli pokutám. Implementujeme robustní pravidla a školíme tým, abychom garantovali ochranu dat a vaši reputaci."
        imageUrl="/images/cyber_sec.png"
        imageAlt=''
      />
      <Card
        title="Udržitelný tech stack"
        description="Investice do technologií se musí vyplatit. Navrhujeme architektury, které vás osvobodí od závislosti na dodavateli a minimalizují budoucí náklady."
        imageUrl="/images/server_room.png"
        imageAlt=''
      />
    </div>
  </section>;
};

export default ThreePillarsSection;
