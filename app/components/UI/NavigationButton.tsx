'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

import Button from './Button';

type Props = {
  primary?: boolean;
  href: string
  children: ReactNode;
  className?: string
};

const NavigationButton: FC<Props> = ({
  primary = true,
  href,
  children,
  className
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(href);
  };

    return (
      <Button
        primary={primary}
        onClick={handleNavigation}
        className={className}
      >
        {children}
      </Button>
    );
};

export default NavigationButton;
