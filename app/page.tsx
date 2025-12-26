import Image from 'next/image';

import Button from './components/UI/Button';
import Card from './components/UI/Card';
import EmailForm from './components/UI/EmailForm';

export default function Home() {
  return (
    <div className="min-h-screen from-primary/5 text-primary">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-14 px-6 py-12">
        <section
          className="overflow-hidden rounded-3xl border border-primary/10 bg-primary text-white shadow-xl shadow-primary/20"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(26,26,65,0.85), rgba(26,26,65,0.7)), url('/window.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="grid gap-6 px-8 py-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Digitree</p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Digitree</h1>
              <p className="text-sm leading-relaxed text-white/80">
                Naše společnost se specializuje na rychlou a efektivní implementaci technologií, které skutečně mění
                způsob, jakým firmy fungují. Spojujeme umělou inteligenci, moderní softwarová řešení a kybernetickou
                bezpečnost do komplexního přístupu, který přináší hmatatelné výsledky již v prvních měsících spolupráce.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button primary className="bg-white text-primary hover:bg-accent">
                  Přehled balíčků
                </Button>
                <Button primary={false}>Kontaktujte nás</Button>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative aspect-4/3 w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-lg shadow-black/20 backdrop-blur">
                <Image src="/window.svg" alt="Digitree hero" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white/70 p-8 shadow-lg shadow-primary/10 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-primary">Svoboda růstu</h2>
            <p className="text-primary/70">
              Naše filozofie je jednoduchá: technologie musí sloužit byznysu, ne naopak. Nezatěžujeme vás zbytečnou
              komplexitou – automatizujeme rutinní úkoly, optimalizujeme pracovní toky a zajišťujeme, aby každá
              investice měla jasný a měřitelný dopad.
            </p>
            <p className="text-primary/70">
              Věříme v partnerský přístup a navrhujeme škálovatelná řešení bez vendor lock-inu, která vám dávají plnou
              svobodu a flexibilitu.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 rounded-2xl bg-linear-to-br from-primary/5 via-white to-accent/15 p-6 shadow-inner shadow-primary/10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">Rychlé kroky</p>
            <ul className="space-y-2 text-sm text-primary/80">
              <li>• Audit stávajících nástrojů a procesů</li>
              <li>• Návrh architektury a roadmapy</li>
              <li>• Implementace a měření dopadů</li>
            </ul>
            <Button primary>Domluvit konzultaci</Button>
          </div>
        </section>

        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">
              3 pilíře, které změní vaše podnikání
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-primary">Postavte se na jisté základy</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              title="Okamžitá měřitelná efektivita"
              description="Automatizace rutinních úkolů, rychlé dashboardy a jasná data pro rozhodnutí."
              imageUrl="/file.svg"
            />
            <Card
              title="Kybernetická bezpečnost"
              description="Bezpečnostní standardy, které chrání vaše zákazníky i reputaci značky."
              imageUrl="/globe.svg"
            />
            <Card
              title="Udržitelný tech stack"
              description="Škálovatelná architektura bez vendor lock-inu, která roste s vaším byznysem."
              imageUrl="/window.svg"
            />
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white p-8 shadow-lg shadow-primary/10 lg:grid-cols-[1fr,1.1fr]">
          <div className="relative mx-auto flex w-full max-w-xs justify-center lg:mx-0">
            <Image
              src="/file.svg"
              alt="Digitální zlato kniha"
              width={260}
              height={360}
              className="h-auto w-full rounded-2xl object-cover shadow-xl shadow-primary/20"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">Naše kniha</p>
              <h3 className="text-3xl font-semibold text-primary">Digitální zlato</h3>
              <p className="max-w-xl text-primary/70">
                Získejte praktický průvodce, jak postavit bezpečné a škálovatelné digitální produkty. Žádné bullshity,
                jen ověřené postupy.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button primary className="bg-accent text-primary hover:bg-white">
                Chci knihu
              </Button>
              <Button primary={false}>Více o obsahu</Button>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl from-white to-primary/5 p-8 text-center shadow-lg shadow-primary/10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/60">Investujte do růstu</p>
            <h2 className="text-3xl font-semibold text-primary">Spojme síly a akcelerujme váš byznys</h2>
            <p className="text-primary/70">
              Naším cílem je posílit vás k soběstačnosti a akcelerovat váš růst. Domluvte si nezávaznou diagnostiku a
              odhalte největší příležitosti.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button primary className="bg-accent text-primary hover:bg-white">
              Konzultace zdarma
            </Button>
            <Button primary={false}>Přehled balíčků</Button>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/60">
                Email pro lead generation
              </p>
              <h2 className="text-2xl font-semibold text-primary">Zůstaňte v obraze</h2>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm shadow-primary/10">
              Email form
            </span>
          </div>
          <EmailForm />
        </section>

      </main>
    </div>
  );
}
