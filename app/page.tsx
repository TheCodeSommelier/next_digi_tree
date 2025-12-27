'use client';

import Image from 'next/image';
import Button from './components/UI/Button';
import ThreePillarsSection from './components/ThreePillarsSection';
import ProductsSection from './components/ProductsSection';
import CtaSection from './components/CtaSection';
import PagePadding from './components/UI/PagePadding';


export default function Home() {
  return (
    <div className="min-h-screen from-primary/5 text-primary">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-14 px-6 py-12">
        <PagePadding>
          {/* hero section */}
          <section className="h-[50vh] text-center flex flex-col items-center justify-center gap-6">
            <h1 className='text-7xl font-bold'>
              Digitree, měníme strategii
              v měřitelné výsledky
            </h1>
            <p className='w-7/12 text-lg font-semibold'>
              Spojujeme umělou inteligenci, software a kybernetickou bezpečnost
              do komplexního řešení s prokazatelným dopadem na zisk.
            </p>
            <div className="flex gap-3 mt-4">
              <Button primary>Přehled balíčků</Button>
              <Button primary={false}>Kontakt</Button>
            </div>
            <Image
              src="/images/ellipse.svg"
              alt="Small green ball icon hovering up and down"
              width={16} height={16}
              className="absolute animate-bounce h-14 bottom-10"
            />
          </section>

          {/* Three pillars */}
          <ThreePillarsSection />
        </PagePadding>

        {/* Meet digitree section */}
        <section></section>

        <PagePadding>
          {/* Products section */}
          <ProductsSection />

          {/* Balls section */}


          {/* CTA section */}
          <CtaSection title='Domluvte si zdarma audit vašich procesů' subtitle='Integrace AI, robustního softwaru a bezpečnosti už není jen trend, ale kritický faktor pro přežití a dominantní růst ve vašem odvětví. Čekání znamená zaostávání.' >
            <Button>Konuzltace zdarma</Button>
            <Button primary={false}>Přehled balíčků</Button>

          </CtaSection>
        </PagePadding>

      </main>
    </div>
  );
}
