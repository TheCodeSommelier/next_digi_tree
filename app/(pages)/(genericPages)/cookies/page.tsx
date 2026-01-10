import ContactSection from '@/app/components/sections/ContactSection';

export const metadata = {
  title: 'Cookies',
};

const sections = [
  {
    title: '1. Co jsou cookies?',
    body: [
      'Cookies jsou malé textové soubory ukládané do vašeho zařízení při návštěvě webových stránek. Tyto soubory umožňují webovým stránkám rozpoznat vaše zařízení při opakované návštěvě, zapamatovat si vaše preference a zlepšit uživatelský zážitek.',
    ],
  },
  {
    title: '2. Jaké typy cookies používáme?',
    list: [
      'Nezbytné cookies: Klíčové pro základní funkce webu (navigace, zabezpečené oblasti).',
      'Analytické cookies: Pomáhají porozumět interakci návštěvníků a optimalizovat obsah (anonymní statistiky).',
      'Marketingové cookies: Personalizace obsahu a reklam podle zájmů; mohou být sdíleny s důvěryhodnými partnery (např. Google).',
    ],
  },
  {
    title: '3. Jak využíváme shromážděné informace?',
    list: [
      'Zlepšení uživatelského zážitku: Přizpůsobení obsahu a funkcí webu vašim preferencím.',
      'Analýza návštěvnosti: Identifikace oblastí ke zlepšení na základě používání webu.',
      'Marketingové účely: Zobrazení relevantního obsahu a reklam na základě vašich zájmů.',
    ],
  },
  {
    title: '4. Sdílení informací s třetími stranami',
    body: [
      'Shromážděné informace využíváme pro interní účely a sdílíme pouze s důvěryhodnými třetími stranami (např. Google Analytics) pro analýzu návštěvnosti a marketing. Neposkytujeme vaše údaje třetím stranám pro jejich vlastní marketingové účely.',
    ],
  },
  {
    title: '5. Správa a nastavení cookies',
    body: [
      'Cookies můžete spravovat ve svém prohlížeči – blokovat, odstranit nebo nastavit upozornění při jejich ukládání. Deaktivace některých cookies může ovlivnit funkčnost webu.',
    ],
  },
  {
    title: '6. Vaše práva v oblasti ochrany osobních údajů',
    list: [
      'Přístup k osobním údajům.',
      'Oprava nepřesných nebo neúplných údajů.',
      'Výmaz údajů, pokud již nejsou potřebné.',
      'Omezení zpracování za určitých okolností.',
      'Námitky proti zpracování na základě oprávněného zájmu.',
    ],
  },
  {
    title: '7. Změny v zásadách používání cookies',
    body: [
      'Tyto zásady můžeme aktualizovat, aby odrážely změny v praxi nebo právních požadavcích. Doporučujeme pravidelně kontrolovat tuto stránku.',
    ],
  },
];

export default function CookiesPage() {
  return (
    <main className="flex w-full flex-col gap-8 py-26">
      <header className="space-y-2 py-4">
        <h1 className="text-4xl font-bold text-primary">Zásady používání cookies a ochrany osobních údajů</h1>
        <p className="text-primary/80">
          Vážení návštěvníci, vážíme si vašeho soukromí a transparentnosti. Níže popisujeme, jak používáme cookies, {' '}
          jak shromažďujeme a chráníme vaše data, a jaká práva máte.
        </p>
      </header>

      <section className="space-y-3 py-4">
        <p className="text-primary/80 leading-relaxed">
          Tento dokument podrobně popisuje, jak naše webová stránka využívá cookies, jaké informace shromažďujeme, k
          jakým účelům je používáme a jak chráníme vaše data. Veškeré shromážděné informace jsou využívány výhradně {' '}
          pro naše interní potřeby a sdíleny pouze s důvěryhodnými třetími stranami (např. Google Analytics) za účelem
          analýzy návštěvnosti.
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="space-y-3 py-4">
          <h2 className="text-xl font-semibold text-primary">{section.title}</h2>
          {section.body?.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-primary/80">
              {paragraph}
            </p>
            ))}
          {section.list ? (
            <ul className="list-disc space-y-2 pl-6 text-primary/80">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
                ))}
            </ul>
            ) : null}
        </section>
        ))}

      <ContactSection />
    </main>
  );
}
