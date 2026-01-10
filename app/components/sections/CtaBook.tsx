'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '../UI/Button';
import { ROUTES } from '@/app/routes';

const CtaBook = () => {
  const router = useRouter();

  return <section className="grid gap-8 py-26">
    <div className="relative flex flex-col md:flex-row w-full justify-start items-center gap-24 md:gap-48">
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
          Získejte praktického průvodce o tom, jak bezpečně fungovat na internetu a minimalizovat svojí digitální stopu. {' '}
          Žádné bullshity, jen ověřené postupy. {' '}
          Bude přínosem, pro vaše zaměstnance a zároveň bezpečnost vaší společnosti.
        </p>
        <Button onClick={() => router.push(ROUTES.getBook())} className='w-1/3 md:w-1/5'>
          Chci knihu
        </Button>
      </div>
    </div>
  </section>;
};

export default CtaBook;
