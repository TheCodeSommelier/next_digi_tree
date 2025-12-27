import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NavbarItem from './NavbarItem';
import Button from './Button';
import PagePadding from './PagePadding';
import { ROUTES } from '@/app/routes';

const Navbar: FC = () => {
  const navigation = [
    { href: ROUTES.products(), label: 'Produkty' },
    { href: ROUTES.aboutUs(), label: 'O nás' },
    { href: ROUTES.faq(), label: 'FAQ' },
    { href: ROUTES.contact(), label: 'Kontakty' },
  ];

  return (
    <nav className="w-full my-12">
      <PagePadding>
        <div className="relative flex items-center justify-between gap-6 overflow-hidden
      rounded-full border border-primary/10 bg-white/85 px-6 py-2 shadow-sm shadow-primary/10 backdrop-blur-lg"
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

          <div className="relative hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <NavbarItem key={item.href} href={item.href}>
                {item.label}
              </NavbarItem>
          ))}
          </div>

          <div className="relative flex items-center gap-3">
            <Button primary>Přehled balíčků</Button>
          </div>
        </div>
      </PagePadding>
    </nav>
  );
};

export default Navbar;
