import Image from 'next/image';

import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import CtaSection from '../components/UI/CtaSection';

export default function AboutUs() {
  return (
    <main className="min-h-screen text-primary">
      <div className="flex w-full flex-col gap-16">
        <section
          className="overflow-hidden w-full h-[550px] mb-32 rounded-3xl border border-primary/10 bg-primary text-white shadow-xl shadow-primary/20"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(26,26,65,0.85), rgba(26,26,65,0.7)), url('/window.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          <div className="space-y-4 flex flex-col justify-between h-[550px] px-8 py-10">
            <h1 className="text-6xl font-semibold leading-tight sm:text-5xl">Digitree</h1>
            <div className='flex flex-col gap-4'>
              <p className="text-base leading-relaxed text-white/80">
                Naše společnost se specializuje na rychlou a efektivní implementaci technologií, které skutečně mění
                způsob, jakým firmy fungují.
              </p>

              <p className="text-base leading-relaxed text-white/80">Spojujeme umělou inteligenci, moderní softwarová řešení a kybernetickou
                bezpečnost do komplexního přístupu, který přináší hmatatelné výsledky již v prvních měsících spolupráce.
              </p>
            </div>
          </div>

        </section>

        <section className="flex gap-16 space-y-3 py-32">
          <h2 className="text-5xl w-9/10 font-semibold text-primary">Svoboda růstu</h2>
          <p className="text-primary/70">
            Naše filozofie je jednoduchá: technologie musí sloužit byznysu, ne naopak. Nezatěžujeme vás zbytečnou
            komplexitou – automatizujeme rutinní úkoly, optimalizujeme pracovní toky a zajišťujeme, aby každá
            investice měla jasný a měřitelný dopad. Věříme v partnerský přístup a navrhujeme škálovatelná
            řešení bez vendor lock-inu, která vám dávají plnou svobodu a flexibilitu.
          </p>
        </section>

        <section className="space-y-6 py-32">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-[0.2em] text-primary">
              3 pilíře, které změní vaše podnikání
            </h2>
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

        <section className="grid gap-8 py-32">
          <div className="relative flex w-full justify-start items-center gap-48">
            <Image
              src="/file.svg"
              alt="Digitální zlato kniha"
              width={260}
              height={360}
            />

            <div className="space-y-2 flex flex-col gap-4">
              <h3 className="text-5xl font-semibold text-primary">Naše kniha</h3>
              <p className="max-w-xl text-primary/70">
                Získejte praktický průvodce, jak postavit bezpečné a škálovatelné digitální produkty. Žádné bullshity,
                jen ověřené postupy.
              </p>
              <Button primary className='w-1/5'>
                Chci knihu
              </Button>
            </div>

          </div>
        </section>

        <CtaSection
          title='Investujte do růstu' subtitle='Naším cílem je posílit vás k soběstačnosti a akcelerovat váš růst. Domluvte si nezávaznou diagnostiku a
              odhalte největší příležitosti.'
        >
          <Button primary>Konzultace zdarma</Button>
          <Button primary={false}>Přehled balíčků</Button>
        </CtaSection>
      </div>
    </main>
  );
}
