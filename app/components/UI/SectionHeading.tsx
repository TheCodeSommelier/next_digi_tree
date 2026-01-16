'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  rootMargin?: string;
  threshold?: number;
  headingCenter?: boolean
};

const SectionHeading: FC<Props> = ({
  children,
  className = 'mb-20',
  animationClassName = 'animate-fade-in-7',
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.2,
  headingCenter = true
}) => {
   const wrapperRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const node = wrapperRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin, threshold }
      );

      observer.observe(node);

      return () => observer.disconnect();
    }, [rootMargin, threshold]);

    const combinedClassName = [
      className,
      isVisible ? animationClassName : 'opacity-0',
      headingCenter ? 'text-center' : ''
    ]
      .filter(Boolean)
      .join(' ');

  return <h2 className={`text-3xl md:text-5xl font-bold text-primary ${combinedClassName}`} ref={wrapperRef}>
    {children}
  </h2>;
};

export default SectionHeading;
