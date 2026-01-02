import { FC, ReactNode } from 'react';

type Props = {
  className?: string
  children: ReactNode
}

const SectionHeading: FC<Props> = ({className = 'mb-20', children}) => {
  return <div className="text-center">
    <h2 className={`text-5xl font-bold text-primary ${className}`}>
      {children}
    </h2>
  </div>;
};

export default SectionHeading;
