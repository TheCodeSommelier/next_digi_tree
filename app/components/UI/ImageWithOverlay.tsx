'use client';

import { useIsMobile } from '@/app/hooks/useMobile';
import { FC, ReactNode } from 'react';

type Props = {
  imageUrl: string
  className?: string
  children: ReactNode
}

const ImageWithOverlay: FC<Props> = ({ imageUrl, className = 'h-[550px] w-full', children }) => {
  const isMobile = useIsMobile(720);

  const direction = isMobile ? '0deg' : '120deg';

  return <section
    className={`overflow-hidden rounded-3xl bg-primary text-white shadow-xl shadow-primary/20 ${className}`}
    style={{
            backgroundImage:
              `linear-gradient(${direction}, rgba(26,26,65,0.85), rgba(26,26,65,0.4)), url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
         >
    {children}
  </section>;
};

export default ImageWithOverlay;
