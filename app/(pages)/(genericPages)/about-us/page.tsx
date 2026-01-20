import CtaSection from '../../../components/sections/CtaSection';
import ImageWithOverlay from '../../../components/UI/ImageWithOverlay';
import ThreePillarsSection from '../../../components/sections/ThreePillarsSection';
import { ROUTES } from '../../../routes';
import CtaBook from '@/app/components/sections/CtaBook';
import NavigationButton from '@/app/components/UI/buttons/NavigationButton';
import GrowthSection from '@/app/components/sections/GrowthSection';

export const metadata = {
  title: 'O nás',
};

export default function AboutUsPage() {
  return (
    <div className="flex w-full flex-col gap-16 ">
      <ImageWithOverlay imageUrl="/images/david_podcast.jpg" className='my-26 h-[750px] w-full'>
        <div className="space-y-4 flex flex-col justify-between h-[750px] px-8 py-20">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">Digitree</h1>
          <div className='flex flex-col gap-4 w-full md:w-1/2'>
            <p className="text-lg leading-relaxed text-white">
              Naše společnost se specializuje na rychlou a efektivní implementaci technologií, které skutečně mění
              způsob, jakým firmy fungují.
            </p>

            <p className="text-lg leading-relaxed text-white">
              Spojujeme umělou inteligenci, moderní softwarová řešení a kybernetickou
              bezpečnost do komplexního přístupu, který přináší hmatatelné výsledky, ve vašich procesech, {' '}
              již v prvních měsících spolupráce.
            </p>
          </div>
        </div>
      </ImageWithOverlay>

      <GrowthSection />

      <ThreePillarsSection />

      <CtaBook />

      <CtaSection
        title='Investujte do růstu' subtitle='Naším cílem je posílit vás k soběstačnosti a akcelerovat váš růst. Domluvte si nezávaznou konzultaci a
              odhalte největší příležitosti.'
      >
        <NavigationButton href={ROUTES.contact()}>Konzultace zdarma</NavigationButton>
      </CtaSection>
    </div>
  );
}
