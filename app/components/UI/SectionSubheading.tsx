'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  animationClassName?: string;
  rootMargin?: string;
  threshold?: number;
  center?: boolean
};

const SectionSubheading: FC<Props> = ({
  children,
  className = 'w-3/4 lg:w-2/4',
  animationClassName = 'animate-fade-in-7',
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.2,
  center = true
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
    center ? 'text-center' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return <p className={`text-primary ${combinedClassName}`} ref={wrapperRef}>
    {children}
  </p>;

};

export default SectionSubheading;
