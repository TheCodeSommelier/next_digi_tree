'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '../UI/Button';
import { ROUTES } from '@/app/routes';
import { useIsMobile } from '@/app/hooks/useMobile';
import SectionHeading from '../UI/SectionHeading';
import SectionSubheading from '../UI/SectionSubheading';

const CtaBook = () => {
  const router = useRouter();
  const isMobile = useIsMobile(720);

  return <section className="grid gap-8 py-26">
    <div className="relative flex flex-col md:flex-row w-full justify-start items-center gap-24 xl:gap-48">
      <Image
        src="/images/book.png"
        alt="Digitální zlato kniha"
        width={320}
        height={400}
        className='rounded-lg'
      />

      <div className="space-y-2 flex flex-col gap-4">
        <SectionHeading className='' headingCenter={false}>Naše kniha</SectionHeading>
        <SectionSubheading className="max-w-xl text-primary/70" center={false}>
          Získejte praktického průvodce o tom, jak bezpečně fungovat na internetu a minimalizovat svojí digitální stopu. {' '}
          Žádné bullshity, jen ověřené postupy. {' '}
          Bude přínosem, pro vaše zaměstnance a zároveň bezpečnost vaší společnosti.
        </SectionSubheading>

        <Button onClick={() => router.push(ROUTES.getBook({ isMobile }))} className='w-1/3 md:w-1/2 xl:w-1/5'>
          Chci knihu
        </Button>
      </div>
    </div>
  </section>;
};

export default CtaBook;
