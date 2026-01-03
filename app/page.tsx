import Image from 'next/image';

import ThreePillarsSection from './components/sections/ThreePillarsSection';
import ProductsSection from './components/sections/ProductsSection';
import CtaSection from './components/sections/CtaSection';
import PagePadding from './components/UI/PagePadding';
import { ROUTES } from './routes';
import HowItWorksSection from './components/sections/HowWorksItSection/HowItWorksSection';
import LinkButton from './components/UI/LinkButton';
import GradientAnchor from './components/UI/gradients/GradientAnchor';

export const metadata = {
  title: 'Domů | Digitree',
  description: 'Digitree - Strategická AI a digitální transformace pro měřitelný růst vašeho podnikání. Pomáháme firmám automatizovat procesy, implementovat umělou inteligenci, navrhovat moderní software a zabezpečit data bez vendor lock-inu. Získejte strategický audit, akční plán a kontinuální optimalizaci pro výrazné zlepšení výkonu.',
};

export default function Home() {
  return (
    <div className="relative min-h-screen from-primary/5 text-primary">
      <main className="mx-auto flex min-h-screen w-full flex-col gap-14">
        <PagePadding>
          {/* hero section */}
          <section className="h-[600px] text-center flex flex-col items-center justify-between gap-6">
            <div className="flex flex-col h-full items-center justify-center gap-7">
              <h1 className='text-7xl font-bold'>
                Digitree, měníme strategii
                v měřitelné výsledky
              </h1>
              <p className='w-7/12 text-lg font-semibold'>
                Spojujeme umělou inteligenci, software a kybernetickou bezpečnost
                do komplexního řešení s prokazatelným dopadem na zisk.
              </p>
              <div className="flex gap-3 mt-4">
                <LinkButton href={ROUTES.products()}>Přehled balíčků</LinkButton>
                <LinkButton primary={false} href={ROUTES.contact()}>Kontakt</LinkButton>
              </div>
            </div>

            <Image
              src="/images/ellipse.svg"
              alt="Small green ball icon hovering up and down"
              width={16} height={16}
              className="animate-bounce h-14"
            />
          </section>

          <GradientAnchor name="page-2/4" />

          <ThreePillarsSection />
        </PagePadding>

        {/* About us section */}
        <section
          className="relative isolate min-h-[600px] overflow-hidden px-32"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(26,26,65,0), rgba(26,26,65,0.90)) , url('/images/david_classroom.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/40 to-transparent" aria-hidden />
          <div className="relative right-0 top-1/2 translate-y-2/3 mx-auto flex h-full w-full max-w-6xl flex-col justify-center items-end px-6">
            <div className="max-w-xl space-y-4">
              <h2 className="text-5xl font-semibold text-white sm:text-6xl">Poznejte DigiTree</h2>
              <p className="text-base leading-relaxed text-white/85">
                Transformujeme strategii v měřitelné zisky. Dodáváme konkrétní, akční řešení, která spojují umělou
                inteligenci, moderní software a kybernetickou bezpečnost do jednoho systému. Implementujeme řešení bez
                vendor lock-inu, s prokazatelným dopadem už v prvních měsících spolupráce.
              </p>
              <LinkButton href={ROUTES.aboutUs()}>Více o nás</LinkButton>
            </div>
          </div>
        </section>

        <PagePadding>
          <ProductsSection />

          <GradientAnchor name="page-3/4" />

          <HowItWorksSection />

          <CtaSection title='Domluvte si zdarma audit vašich procesů' subtitle='Integrace AI, robustního softwaru a bezpečnosti už není jen trend, ale kritický faktor pro přežití a dominantní růst ve vašem odvětví. Čekání znamená zaostávání.' >
            <LinkButton href={ROUTES.contact()}>Konuzltace zdarma</LinkButton>
            <LinkButton primary={false} href={ROUTES.products()}>Přehled balíčků</LinkButton>
          </CtaSection>
        </PagePadding>
      </main>
    </div>
  );
}
