import Link from 'next/link';
import { FC, ReactNode } from 'react';

type Props = {
  primary?: boolean;
  href: string
  children: ReactNode;
  className?: string;
};

const LinkButton: FC<Props> = ({
  primary = true,
  href,
  children,
  className = '',
}) => {
  const variantClasses = primary
      ? 'bg-accent text-white border border-transparent hover:border-primary hover:bg-transparent hover:text-primary'
      : 'border border-primary text-primary hover:border-primary hover:bg-primary hover:text-white';

    return (
      <Link
        className={`inline-flex items-center justify-center gap-2 rounded-full
          px-5 py-2 text-sm font-semibold tracking-tight transition-all
          duration-200 focus-visible:outline focus-visible:outline-offset-2
          focus-visible:outline-accent cursor-pointer ${variantClasses} ${className}`}
        href={href}
      >
        {children}
      </Link>
    );
};

export default LinkButton;
