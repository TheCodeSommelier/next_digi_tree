import { FC, ReactNode } from 'react';

type Props = {
  title: string
  subtitle: string
  children: ReactNode
}

const CtaSection: FC<Props> = ({title, subtitle, children}) => {
  return <section className="flex flex-col justify-center items-center py-32 gap-4">
    <h2 className='text-4xl font-bold'>{title}</h2>
    <p className='w-5/12 text-center'>
      {subtitle}
    </p>

    <div className='flex justify-between items-center gap-3 mt-4'>
      {children}
    </div>
  </section>;
};

export default CtaSection;
