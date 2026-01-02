'use client';

import { FC, ReactNode } from 'react';

type Props = {
  imageUrl: string
  className?: string
  children: ReactNode
}

const ImageWithOverlay: FC<Props> = ({ imageUrl, className = 'h-[550px] w-full', children }) => {
  return <section
    className={`overflow-hidden rounded-3xl border border-primary/10 bg-primary text-white shadow-xl shadow-primary/20 ${className}`}
    style={{
            backgroundImage:
              `linear-gradient(120deg, rgba(26,26,65,0.85), rgba(26,26,65,0.4)), url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
         >
    {children}
  </section>;
};

export default ImageWithOverlay;
