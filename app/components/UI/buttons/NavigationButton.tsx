'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

import Button from './Button';
import { ButtonVariant } from '@/app/types/Button';

type Props = {
  variant?: ButtonVariant;
  href: string
  children: ReactNode;
  className?: string
};

const NavigationButton: FC<Props> = ({
  variant = ButtonVariant.Primary,
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
        variant={variant}
        onClick={handleNavigation}
        className={className}
      >
        {children}
      </Button>
    );
};

export default NavigationButton;
