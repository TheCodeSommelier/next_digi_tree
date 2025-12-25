import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import NavbarItem from "./NavbarItem";
import Button from "./Button";

const Navbar: FC = () => {
  const navigation = [
    { href: "/products", label: "Produkty" },
    { href: "/about-us-dawg", label: "O nás" },
    { href: "/faq", label: "FAQ" },
    { href: "/contacts", label: "Kontakty" },
  ];

  return (
    <nav className="w-full">
      <div className="relative flex items-center justify-between gap-6 overflow-hidden rounded-full border border-primary/10 bg-white/85 px-6 py-3 shadow-xl shadow-primary/10 backdrop-blur-lg">
        <div className="absolute -left-10 -top-12 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-8 -bottom-16 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Logo_safe_zone.svg"
              alt="DigiTree logo"
              width={150}
              height={25}
              priority
            />
          </Link>
          <span className="hidden rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary/70 sm:inline-flex">
            UI kit
          </span>
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
    </nav>
  );
};

export default Navbar;
