import { FC, MouseEvent, ReactNode } from 'react';

type Props = {
  primary?: boolean;
  children: ReactNode;
  className?: string;
  onClick: (e: MouseEvent) => void
  type?: 'button' | 'submit' | 'reset';
};

const Button: FC<Props> = ({
  primary = true,
  children,
  className = '',
  onClick,
  type = 'button',
}) => {
  const variantClasses = primary
    ? 'bg-accent text-white border border-transparent hover:border-primary hover:bg-transparent hover:text-primary'
    : 'border border-primary text-primary hover:border-primary hover:bg-primary hover:text-white';

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
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
    >
      {children}
    </button>
  );
};

export default Button;
