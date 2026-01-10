'use client';

import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import NavbarItem from './NavbarItem';
import Button from './Button';
import PagePadding from './PagePadding';
import { ROUTES } from '@/app/routes';
import { useIsMobile } from '@/app/hooks/useMobile';
import SlidingMenu from './SlidingMenu';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const isTicking = useRef(false);

  const navigation = [
    { href: ROUTES.products(), label: 'Produkty' },
    { href: ROUTES.aboutUs(), label: 'O nás' },
    { href: ROUTES.faq(), label: 'FAQ' },
    { href: ROUTES.contact(), label: 'Kontakty' },
  ];

  const router = useRouter();
  const isMobile = useIsMobile(720);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (isTicking.current) return;
      isTicking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;

        if (currentScrollY < 80) {
          setIsHidden(false);
        } else if (delta > 10) {
          setIsHidden(true);
        } else if (delta < -10) {
          setIsHidden(false);
        }

        lastScrollY.current = currentScrollY;
        isTicking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 w-full pt-6 transition-transform duration-300 ease-out ${
        isHidden ? '-translate-y-[100px]' : 'translate-y-0'
      }`}
    >
      {isMobile && (
        <SlidingMenu isOpen={isOpen} navigation={navigation} onClick={setIsOpen} />
      )}
      <PagePadding>
        <div className="relative flex items-center justify-between gap-6 bg-white/70
      rounded-full border border-primary/10 px-6 py-2 shadow-sm shadow-primary/10 backdrop-blur-lg"
        >
          <div className="absolute -left-10 -top-12 h-24 w-24 rounded-full blur-3xl" />
          <div className="absolute -right-8 -bottom-16 h-28 w-28 rounded-full blur-3xl" />

          <div className="relative flex items-center gap-3">
            <Link href={ROUTES.home()} className="flex items-center gap-2">
              <Image
                src="/images/logo_dark.svg"
                alt="DigiTree logo"
                width={120}
                height={25}
                priority
              />
            </Link>
          </div>

          {isMobile ? (
            <div className="relative">
              <button
                type="button"
                className="relative z-20 flex h-10 w-10 items-center justify-center bg-white"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={handleClick}
              >
                <Image src="/images/burger_menu_icon.svg" width={25} height={25} alt='Burger menu Icon' />
              </button>
            </div>
          ) : (
            <>
              <div className="relative hidden items-center gap-7 md:flex">
                {navigation.map((item) => (
                  <NavbarItem key={item.href} href={item.href}>
                    {item.label}
                  </NavbarItem>
              ))}
              </div>

              <div className="relative flex items-center gap-3">
                <Button onClick={() => router.push(ROUTES.products())}>Přehled balíčků</Button>
              </div>
            </>
          )}
        </div>
      </PagePadding>
    </nav>
  );
};

export default Navbar;
