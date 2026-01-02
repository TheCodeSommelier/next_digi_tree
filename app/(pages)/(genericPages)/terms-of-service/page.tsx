import Link from 'next/link';

import { contacts } from '@/app/consts/consts';

export const metadata = {
  title: 'Obchodní podmínky'
};

const sections = [
  {
    title: '1. Úvodní ustanovení',
    body: [
      'Tyto obchodní podmínky (dále jen „Podmínky“) stanovují podmínky a pravidla užívání vzdělávacích služeb poskytovaných společností DigiTree Education, s.r.o., IČ: 12345678, se sídlem Ulice 123, 110 00 Praha (dále jen „Poskytovatel“), a upravují práva a povinnosti mezi Poskytovatelem a uživateli těchto služeb (dále jen „Zákazník“).',
      'Tyto Podmínky tvoří nedílnou součást smluvního vztahu mezi Poskytovatelem a Zákazníkem a jsou závazné pro všechny subjekty, které využívají služby Poskytovatele.',
      'Poskytovatel si vyhrazuje právo Podmínky kdykoli jednostranně změnit, přičemž aktuální znění Podmínek je vždy zveřejněno na webových stránkách Poskytovatele. Změny nabývají účinnosti dnem jejich zveřejnění.',
    ],
  },
  {
    title: '2. Charakteristika poskytovaných služeb',
    body: [
      'Poskytovatel nabízí vzdělávací služby, zejména ve formě kurzů, webinářů, seminářů a dalších vzdělávacích aktivit, se zaměřením na oblasti jako umělá inteligence, moderní technologie, odborné školení a jazykové vzdělávání (dále jen „Služby“).',
      'Detailní informace o obsahu jednotlivých Služeb, jejich termínech, cenách a formě (prezenční nebo online) jsou uvedeny na webových stránkách Poskytovatele.',
      'Poskytovatel nezaručuje konkrétní výsledek dosažený účastí na poskytovaných Službách, přičemž odpovědnost za dosažení konkrétního cíle je výlučně na Zákazníkovi.',
    ],
  },
  {
    title: '3. Uzavření smluvního vztahu',
    body: [
      'Smluvní vztah mezi Poskytovatelem a Zákazníkem vzniká potvrzením objednávky Zákazníka Poskytovatelem, přičemž objednávku lze učinit prostřednictvím online formuláře na webových stránkách Poskytovatele.',
      'Objednávkou Služeb Zákazník stvrzuje, že se seznámil s těmito Podmínkami, souhlasí s jejich zněním a zavazuje se je dodržovat.',
    ],
  },
  {
    title: '4. Platební podmínky',
    body: [
      'Cena jednotlivých Služeb je uvedena u příslušného kurzu či webináře na webových stránkách Poskytovatele a zahrnuje veškeré náklady spojené s poskytováním Služby, není-li výslovně uvedeno jinak.',
      'Platba za Služby je možná platební kartou (Stripe) na základě faktury s odkazem na zabezpečenou platební bránu, nebo bankovním převodem dle fakturačních údajů.',
      'Platba musí být uhrazena před zahájením Služby. V případě neuhrazení platby si Poskytovatel vyhrazuje právo zrušit přístup Zákazníka k objednané Službě.',
    ],
  },
  {
    title: '5. Storno podmínky a právo na odstoupení',
    body: [
      'Zákazník má právo odstoupit od smlouvy ve lhůtě 14 dnů od uzavření smluvního vztahu, pokud poskytování Služby dosud nebylo zahájeno.',
      'Po zahájení poskytování Služby již není možné od smlouvy odstoupit, protože se jedná o službu, kterou nelze po jejím poskytnutí vrátit.',
    ],
  },
  {
    title: '6. Reklamace',
    body: [
      'Poskytovatel nezodpovídá za očekávání Zákazníka, která přesahují obsah Služby definovaný v jejím sylabu. Reklamace se nevztahují na subjektivní nespokojenost s obsahem Služby.',
      'Reklamace mohou být podány pouze před zahájením Služby v případě chybných fakturačních údajů nebo nesrovnalostí v objednávce.',
    ],
  },
  {
    title: '7. Ochrana osobních údajů',
    body: ['Poskytovatel zpracovává osobní údaje Zákazníka v souladu s platnými právními předpisy, zejména GDPR.'],
  },
  {
    title: '8. Závěrečná ustanovení',
    body: [
      'Veškeré právní vztahy vyplývající z těchto Podmínek se řídí právním řádem České republiky.',
      'Veškeré spory, které nevzniknou smírně, budou rozhodovány příslušnými soudy dle sídla Poskytovatele.',
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen text-primary">
      <div className="flex w-full flex-col gap-8 py-12">
        <header className="space-y-2 py-4">
          <h1 className="text-4xl font-bold text-primary">Obchodní podmínky společnosti DigiTree Education, s.r.o.</h1>
          <p className="text-primary/80">
            Níže najdete souhrn pravidel a podmínek pro využívání našich vzdělávacích služeb. Čtěte prosím pozorně.
          </p>
        </header>

        {sections.map((section) => (
          <section key={section.title} className="space-y-3 py-4">
            <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-primary/80">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <section className="space-y-3 py-4">
          <h2 className="text-xl font-semibold text-primary">9. Kontaktní údaje</h2>
          <div className="text-primary/80">
            <p>DigiTree Education, s.r.o.</p>
            <p>Ulice 123</p>
            <p>110 00 Praha</p>
            <p>
              E-mail:{' '}
              <Link href={`mailto:${contacts.email}`} className="text-accent hover:text-primary duration-200">
                {contacts.email}
              </Link>
            </p>
            <p>
              Telefon:{' '}
              <Link href={`tel:${contacts.tel}`} className="text-accent hover:text-primary duration-200">
                {contacts.tel}
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
