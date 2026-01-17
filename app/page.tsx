import Image from 'next/image';

import ThreePillarsSection from './components/sections/ThreePillarsSection';
import ProductsSection from './components/sections/ProductsSection';
import CtaSection from './components/sections/CtaSection';
import PagePadding from './components/UI/PagePadding';
import { ROUTES } from './routes';
import HowItWorksSection from './components/sections/HowWorksItSection/HowItWorksSection';
import NavigationButton from './components/UI/NavigationButton';
import ImageWithOverlay from './components/UI/ImageWithOverlay';

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
          <section className="h-screen text-center flex flex-col items-center justify-between gap-6 py-26">
            <div className="flex flex-col h-full items-center justify-center gap-7">
              <h1 className='text-4xl md:text-7xl w-full lg:w-3/4 font-bold animate-fade-in-7'>
                Digitree, měníme strategii
                v měřitelné výsledky
              </h1>
              <p className='w-full md:w-9/12 lg:w-7/12 text-lg font-semibold animate-fade-in-8'>
                Spojujeme umělou inteligenci, software a kybernetickou bezpečnost
                do komplexního řešení s prokazatelným dopadem na zisk.
              </p>
              <div className="flex gap-3 mt-9">
                <NavigationButton href={ROUTES.products()}>Přehled balíčků</NavigationButton>
                <NavigationButton primary={false} href={ROUTES.contact()}>Kontakt</NavigationButton>
              </div>
            </div>

            <Image
              src="/images/ellipse.svg"
              alt="Small green ball icon hovering up and down"
              width={16} height={16}
              className="animate-bounce h-14"
            />
          </section>

          <ThreePillarsSection />
        </PagePadding>

        {/* About us section */}
        <ImageWithOverlay
          imageUrl="/images/david_classroom.png"
          className="relative my-26 flex flex-col justify-end md:justify-center isolate min-h-[750px] w-full rounded-none py-14 px-6 md:px-32"
        >
          <div className="relative md:right-0 mx-auto flex h-full w-full max-w-6xl flex-col items-end px-2 md:px-6">
            <div className="relative md:max-w-xl space-y-4">
              <h2 className="text-4xl font-semibold text-white md:text-6xl">Poznejte DigiTree</h2>
              <p className="w-full text-base leading-relaxed text-white/85">
                Transformujeme strategii v měřitelné zisky. Dodáváme konkrétní, akční řešení, která spojují umělou
                inteligenci, moderní software a kybernetickou bezpečnost do jednoho systému. Implementujeme řešení bez
                vendor lock-inu, s prokazatelným dopadem už v prvních měsících spolupráce.
              </p>
              <NavigationButton href={ROUTES.aboutUs()}>Více o nás</NavigationButton>
            </div>
          </div>
        </ImageWithOverlay>

        <PagePadding>
          <ProductsSection />

          <HowItWorksSection />

          <CtaSection title='Domluvte si zdarma audit vašich procesů' subtitle='Integrace AI, robustního softwaru a bezpečnosti už není jen trend, ale kritický faktor pro přežití a dominantní růst ve vašem odvětví. Čekání znamená zaostávání.' >
            <NavigationButton href={ROUTES.contact()}>Konuzltace zdarma</NavigationButton>
            <NavigationButton primary={false} href={ROUTES.products()}>Přehled balíčků</NavigationButton>
          </CtaSection>
        </PagePadding>
      </main>
    </div>
  );
}
