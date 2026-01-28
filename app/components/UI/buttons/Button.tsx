'use client';

import { ButtonVariant } from '@/app/types/Button';
import { FC, MouseEvent, ReactNode } from 'react';



type Props = {
  primary?: boolean;
  variant?: ButtonVariant
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent) => void
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean
};

const Button: FC<Props> = ({
  variant = ButtonVariant.Primary,
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  let variantClasses;

  if (variant === ButtonVariant.Primary) {
    variantClasses = 'bg-accent text-white hover:bg-primary';
  }

  if (variant === ButtonVariant.Secondary) {
    variantClasses = 'border border-primary text-primary hover:border-primary hover:bg-primary hover:text-white';
  }

  if (variant === ButtonVariant.Ghost) {
    variantClasses = 'border border-transparent text-primary hover:text-accent';
  }

  const handleClick = (e: MouseEvent) => {
    if (type === 'submit') {
      return;
    }

    if (!onClick) {
      return;
    }

    onClick(e);
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full
        px-5 py-2 text-sm font-semibold tracking-tight transition-all
        duration-200 focus-visible:outline focus-visible:outline-offset-2
        focus-visible:outline-accent cursor-pointer ${variantClasses} ${className}`}
      onClick={(e) => handleClick(e)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
