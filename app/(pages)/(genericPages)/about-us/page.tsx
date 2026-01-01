'use client';

import Image from 'next/image';

import Button from '../../../components/UI/Button';
import CtaSection from '../../../components/CtaSection';
import ImageWithOverlay from '../../../components/UI/ImageWithOverlay';
import ThreePillarsSection from '../../../components/ThreePillarsSection';
import { useRouter } from 'next/navigation';
import { ROUTES } from '../../../routes';

export default function AboutUsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen text-primary">
      <div className="flex w-full flex-col gap-16">
        <ImageWithOverlay imageUrl="/images/david_presenting.jpg">
          <div className="space-y-4 flex flex-col justify-between h-[550px] px-8 py-10">
            <h1 className="text-7xl font-semibold leading-tight">Digitree</h1>
            <div className='flex flex-col gap-4 w-2/3'>
              <p className="text-base leading-relaxed text-white/80">
                Naše společnost se specializuje na rychlou a efektivní implementaci technologií, které skutečně mění
                způsob, jakým firmy fungují.
              </p>

              <p className="text-base leading-relaxed text-white/80">Spojujeme umělou inteligenci, moderní softwarová řešení a kybernetickou
                bezpečnost do komplexního přístupu, který přináší hmatatelné výsledky již v prvních měsících spolupráce.
              </p>
            </div>
          </div>
        </ImageWithOverlay>

        <section className="flex gap-16 space-y-3 py-32">
          <h2 className="text-5xl w-9/10 font-semibold text-primary">Svoboda růstu</h2>
          <p className="text-primary/70">
            Naše filozofie je jednoduchá: technologie musí sloužit byznysu, ne naopak. Nezatěžujeme vás zbytečnou
            komplexitou – automatizujeme rutinní úkoly, optimalizujeme pracovní toky a zajišťujeme, aby každá
            investice měla jasný a měřitelný dopad. Věříme v partnerský přístup a navrhujeme škálovatelná
            řešení bez vendor lock-inu, která vám dávají plnou svobodu a flexibilitu.
          </p>
        </section>

        <ThreePillarsSection />

        <section className="grid gap-8 py-32">
          <div className="relative flex w-full justify-start items-center gap-48">
            <Image
              src="/images/book.png"
              alt="Digitální zlato kniha"
              width={320}
              height={400}
              className='rounded-lg'
            />

            <div className="space-y-2 flex flex-col gap-4">
              <h3 className="text-5xl font-semibold text-primary">Naše kniha</h3>
              <p className="max-w-xl text-primary/70">
                Získejte praktický průvodce, jak postavit bezpečné a škálovatelné digitální produkty. Žádné bullshity,
                jen ověřené postupy.
              </p>
              <Button onClick={() => router.push(ROUTES.getBook())} className='w-1/5'>
                Chci knihu
              </Button>
            </div>

          </div>
        </section>

        <CtaSection
          title='Investujte do růstu' subtitle='Naším cílem je posílit vás k soběstačnosti a akcelerovat váš růst. Domluvte si nezávaznou diagnostiku a
              odhalte největší příležitosti.'
        >
          <Button onClick={() => router.push(ROUTES.contact())}>Konzultace zdarma</Button>
          <Button primary={false} onClick={() => router.push(ROUTES.products())}>Přehled balíčků</Button>
        </CtaSection>
      </div>
    </main>
  );
}
