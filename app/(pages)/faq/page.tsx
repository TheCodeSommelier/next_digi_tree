'use client';

import { useRouter } from 'next/navigation';

import Button from '../../components/UI/Button';
import CtaSection from '../../components/CtaSection';
import DropdownCard from '../../components/UI/DropdownCard';
import { FaqItem } from '../../types/Faq';
import { ROUTES } from '../../routes';

const faqItems: FaqItem[] = [
  {
    question: 'Kdy uvidíme reálné výsledky?',
    answer:
      'Žádné čekání. Naše řešení doručují viditelné výsledky již v měsících, ne rocích. S balíčkem AI & Digital Kickstart máte první, hmatatelné výstupy (audit, konkrétní use-cases) do 2 týdnů. Začínáme pracovat HNED, ne za měsíce.',
  },
  {
    question: 'Jak chráníte naše data a zajišťujete compliance?',
    answer:
      'Vaše data jsou nedotknutelná. Implementujeme nejpřísnější standardy bezpečnosti a compliance, včetně GDPR, NIS2 a připravovaného AI Act. Žádné trénování AI modelů s vašimi daty, data zpracováváme striktně podle GDPR a jsme připraveni podepsat NDA před prvním kontaktem.',
  },
  {
    question: 'Potřebujeme AI bez cloudu. Jste schopni to řešit?',
    answer:
      'Absolutně. Chcete držet data u sebe? Navrhneme a implementujeme on-premise nebo edge AI řešení s open-source LLM (LLAMA, Mistral). Získáte tak 100% kontrolu nad vašimi daty, přímo ve vaší infrastruktuře.',
  },
  {
    question: 'Můžete prověřit náš stávající kód a architekturu?',
    answer:
      'To je naše silná stránka! Provedeme hloubkovou analýzu vašeho kódu, odhalíme bezpečnostní trhliny, technický dluh a kritické bottlenecky. Dostanete prioritizovaný akční plán refaktoringu, který okamžitě sníží rizika a zvýší výkon.',
  },
  {
    question: 'Jak zajistíte, že náš tým vše plně pochopí a převezme?',
    answer:
      'Žádné černé skříňky. Školíme formou intenzivních workshopů (2–4 hodiny) nebo 1:1 sessionů. Předáváme kompletní dokumentaci, praktické playbooky a videozáznamy. Náš cíl je jasný: Váš tým bude soběstačný a plně kompetentní.',
  },
  {
    question: 'Jak měříte náš společný úspěch a reportujete pokrok?',
    answer:
      'Měříme jen to podstatné. Na startu společně definujeme 3–5 klíčových, měřitelných KPI (např. snížení času na report o 50 %, pokles incidentů o 30 %, optimalizace cloudových nákladů o 40 %). Každý týden transparentní status report, na konci projektu detailní zpráva s prokázaným dosažením cílů.',
  },
];

export default function FAQPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen from-primary/5 text-primary">
      <header className="space-y-3 w-full flex justify-center items-center mb-7">
        <h1 className="text-4xl font-semibold leading-tight">FAQ</h1>
      </header>

      <section className="space-y-3 flex flex-col gap-8">
        {faqItems.map((item) => (
          <DropdownCard key={item.question} title={item.question} text={item.answer} />
        ))}
      </section>

      <CtaSection
        title='Máte jiné dotazy?' subtitle='Naším cílem je transparentnost a rychlá akcelerace vašeho růstu.
          Pokud potřebujete probrat specifický problém nebo se ujistit o
          detailech balíčku, neváhejte nás kontaktovat.'
      >
        <Button onClick={() => router.push(ROUTES.contact())}>Kontaktovat</Button>
        <Button primary={false} onClick={() => router.push(ROUTES.products())}>Přehled balíčků</Button>
      </CtaSection>
    </main>
  );
}
