'use client';

import { FC, ReactNode } from 'react';

import SectionHeading from '../UI/SectionHeading';

type Props = {
  title: string
  subtitle: string
  children?: ReactNode
  className?: string
}

const CtaSection: FC<Props> = ({ title, subtitle, children, className = 'py-26' }) => {
  return <section className={`flex flex-col justify-center items-center gap-4 ${className}`}>
    <SectionHeading className='mb-4'>
      {title}
    </SectionHeading>

    <p className='w-full md:w-5/12 text-center text-primary'>
      {subtitle}
    </p>

    {children &&
      <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-4'>
        {children}
      </div>
    }
  </section>;
};

export default CtaSection;
