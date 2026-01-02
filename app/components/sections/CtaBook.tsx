'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '../UI/Button';
import { ROUTES } from '@/app/routes';

const CtaBook = () => {
  const router = useRouter();

  return <section className="grid gap-8 py-32">
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
  </section>;
};

export default CtaBook;
