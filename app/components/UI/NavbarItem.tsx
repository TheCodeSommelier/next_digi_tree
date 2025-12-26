import Link from 'next/link';
import { FC, ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

const NavbarItem: FC<Props> = ({ href, children }) => {
  return (
    <Link
      className="cursor-pointer text-lg text-primary transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavbarItem;
