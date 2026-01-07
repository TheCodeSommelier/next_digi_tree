import CtaSection from '../../../components/sections/CtaSection';
import ImageWithOverlay from '../../../components/UI/ImageWithOverlay';
import ThreePillarsSection from '../../../components/sections/ThreePillarsSection';
import { ROUTES } from '../../../routes';
import CtaBook from '@/app/components/sections/CtaBook';
import LinkButton from '@/app/components/UI/LinkButton';

export const metadata = {
  title: 'O nás',
};

export default function AboutUsPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-20">
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

      <CtaBook />

      <CtaSection
        title='Investujte do růstu' subtitle='Naším cílem je posílit vás k soběstačnosti a akcelerovat váš růst. Domluvte si nezávaznou diagnostiku a
              odhalte největší příležitosti.'
      >
        <LinkButton href={ROUTES.contact()}>Konzultace zdarma</LinkButton>
        <LinkButton href={ROUTES.products()} primary={false}>Přehled balíčků</LinkButton>
      </CtaSection>
    </div>
  );
}
