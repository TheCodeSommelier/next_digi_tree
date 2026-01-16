'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

import Button from './Button';

type Props = {
  primary?: boolean;
  href: string
  children: ReactNode;
};

const LinkButton: FC<Props> = ({
  primary = true,
  href,
  children,
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(href);
  };

    return (
      <Button
        primary={primary}
        onClick={handleNavigation}
      >
        {children}
      </Button>
    );
};

export default LinkButton;
