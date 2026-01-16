'use client';

import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import NavbarItem from './NavbarItem';
import Button from './Button';
import { ROUTES } from '@/app/routes';

type Props = {
  isOpen: boolean
  navigation: Array<Record<string, string>>
  onClick:  Dispatch<SetStateAction<boolean>>
}

const SlidingMenu: FC<Props> = ({ isOpen, navigation, onClick }) => {
  const router = useRouter();

  return <div
    className={`fixed left-0 top-0 py-6 px-4 h-screen w-screen z-100
    bg-primary/50 shadow-xl shadow-primary/10 transition-transform duration-300 ease-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
    onClick={() => onClick(false)}
         >
    <div
      id="mobile-menu"
      className="fixed left-0 top-0 py-6 px-4 h-screen w-[85vw] z-100 bg-white
      shadow-xl shadow-primary/10 transition-transform duration-300 ease-out"
      aria-hidden={!isOpen}
    >
      <div className="flex items-center justify-between py-2.5">
        <Link href="/">
          <Image
            src="/images/logo_dark.svg"
            alt="DigiTree logo"
            width={120}
            height={25}
            priority
          />
        </Link>

        <Image
          src="/images/cross_icon.svg"
          alt="DigiTree logo"
          width={25}
          height={25}
          priority
          aria-label="Close navigation"
          onClick={() => onClick(false)}
        />
      </div>
      <div className="flex flex-col pt-10 gap-4 pl-5">
        {navigation.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            onClick={() => onClick(false)}
          >
            {item.label}
          </NavbarItem>
      ))}

        <div className='mt-10'>
          <Button onClick={() => router.push(ROUTES.products())}>Přehled balíčků</Button>
        </div>
      </div>
    </div>
  </div>;
};

export default SlidingMenu;
