'use client';

import SectionHeading from '../UI/SectionHeading';
import SectionSubheading from '../UI/SectionSubheading';

const GrowthSection = () => {
  return  <section className="flex flex-col md:flex-row items-start justify-center gap-20 space-y-3 py-26">
    <SectionHeading headingCenter={false} className='text-4xl md:text-5xl md:w-1/3 font-semibold text-primary'>
      Svoboda růstu
    </SectionHeading>

    <SectionSubheading className='text-primary/70 text-left w-full md:w-2/3 text-lg'>
      Naše filozofie je jednoduchá: technologie musí sloužit byznysu, ne naopak. Nezatěžujeme vás zbytečnou
      komplexitou – automatizujeme rutinní úkoly, optimalizujeme pracovní toky a zajišťujeme, aby každá
      investice měla jasný a měřitelný dopad. Věříme v partnerský přístup a navrhujeme škálovatelná
      řešení bez vendor lock-inu, která vám dávají plnou svobodu a flexibilitu.
    </SectionSubheading>
  </section>;
};

export default GrowthSection;
