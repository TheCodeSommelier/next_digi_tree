import Link from 'next/link';

import { contacts } from '@/app/consts/consts';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen text-primary py-5">
      <header className="space-y-3 pb-4">
        <h1 className="text-4xl font-bold text-primary">Zásady ochrany osobních údajů</h1>
        <p className="text-primary/80">
          Společnost DigiTree Education, s.r.o. chrání vaše data v souladu s GDPR a platnou legislativou. Níže
          naleznete přehled hlavních ustanovení a práv, která vám náleží.
        </p>
      </header>

      <section className="space-y-4 py-4">
        <h2 className="text-xl font-semibold text-primary">1. Úvodní ustanovení</h2>
        <p className="text-primary/80 leading-relaxed">
          Společnost DigiTree Education, s.r.o., IČ: 12345678, se sídlem Ulice 123, 110 00 Praha (dále jen
          „Společnost“), jakožto správce osobních údajů, prohlašuje, že veškeré zpracování osobních údajů je prováděno
          v souladu s platnými právními předpisy České republiky a Evropské unie, zejména s Nařízením Evropského
          parlamentu a Rady (EU) 2016/679 ze dne 27. dubna 2016 (GDPR).
        </p>
      </section>

      <section className="space-y-3 py-4">
        <h2 className="text-xl font-semibold text-primary">2. Definice pojmů</h2>
        <ul className="list-disc space-y-2 pl-6 text-primary/80">
          <li>
            <strong>Osobní údaje:</strong> veškeré informace o identifikované nebo identifikovatelné fyzické osobě
            (Subjekt údajů).
          </li>
          <li>
            <strong>Zpracování:</strong> jakákoli operace nebo soubor operací s osobními údaji.
          </li>
          <li>
            <strong>Správce:</strong> subjekt, který určuje účely a prostředky zpracování osobních údajů.
          </li>
          <li>
            <strong>Zpracovatel:</strong> subjekt, který zpracovává osobní údaje pro Správce.
          </li>
        </ul>
      </section>

      <section className="space-y-3 py-4">
        <h2 className="text-xl font-semibold text-primary">3. Zásady zpracování osobních údajů</h2>
        <ul className="list-disc space-y-2 pl-6 text-primary/80">
          <li>Zákonnost, korektnost a transparentnost.</li>
          <li>Účelové omezení a minimalizace údajů.</li>
          <li>Přesnost, omezení uložení a integrita.</li>
          <li>Důvěrnost a přiměřená bezpečnost zpracování.</li>
        </ul>
      </section>

      <section className="space-y-3 py-4">
        <h2 className="text-xl font-semibold text-primary">4. Účely a právní základy</h2>
        <p className="text-primary/80 leading-relaxed">
          Osobní údaje zpracováváme pro plnění smlouvy, splnění právních povinností, ochranu oprávněných zájmů
          (bezpečnost, majetek) a na základě vašeho souhlasu pro marketingové účely.
        </p>
      </section>

      <section className="space-y-3 py-4">
        <h2 className="text-xl font-semibold text-primary">5. Kategorie údajů</h2>
        <p className="text-primary/80 leading-relaxed">
          Zpracováváme identifikační, kontaktní a platební údaje, údaje o využívání služeb a další údaje, které nám
          poskytnete.
        </p>
      </section>

      <section className="space-y-3 py-4">
        <h2 className="text-xl font-semibold text-primary">6. Příjemci a předávání</h2>
        <p className="text-primary/80 leading-relaxed">
          Údaje mohou být zpřístupněny zaměstnancům, zpracovatelům na základě smlouvy a orgánům veřejné moci. Do
          třetích zemí nepředáváme, pokud není zajištěna odpovídající ochrana dle GDPR.
        </p>
      </section>

      <section className="space-y-3 py-4">
        <h2 className="text-xl font-semibold text-primary">7. Práva subjektů údajů</h2>
        <ul className="list-disc space-y-2 pl-6 text-primary/80">
          <li>Přístup, oprava, výmaz a omezení zpracování.</li>
          <li>Přenositelnost údajů a právo vznést námitku.</li>
          <li>Odvolání souhlasu bez vlivu na zákonnost dřívějšího zpracování.</li>
          <li>Stížnost u Úřadu pro ochranu osobních údajů.</li>
        </ul>
      </section>

      <section className="space-y-3 py-4">
        <h2 className="text-xl font-semibold text-primary">8. Zabezpečení a doba uchování</h2>
        <p className="text-primary/80 leading-relaxed">
          Uplatňujeme technická a organizační opatření proti neoprávněnému přístupu, ztrátě či zničení. Údaje
          uchováváme pouze po dobu nezbytně nutnou pro naplnění účelu nebo dle zákonných lhůt.
        </p>
      </section>

      <section className="space-y-3 py-4">
        <h2 className="text-xl font-semibold text-primary">9. Změny zásad a kontakty</h2>
        <p className="text-primary/80 leading-relaxed">
          Tyto zásady mohou být aktualizovány. V případě dotazů či uplatnění práv nás kontaktujte na {' '}
          <Link className='text-accent hover:text-primary' href={`mailto:${contacts.email}`}>{contacts.email}</Link>{' '}
          nebo písemně na adresu sídla. Zásady jsou účinné od 1. ledna 2025.
        </p>
      </section>
    </main>
  );
}
