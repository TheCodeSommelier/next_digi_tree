import { FC, ReactNode } from 'react';

import BackgroundGradient from './BackgroundGradient';
import PagePadding from './PagePadding';
import { GradientConfig } from '@/app/types/Gradient';

type Props = {
  children: ReactNode;
  gradients?: GradientConfig[];
  className?: string;
};

const PageShell: FC<Props> = ({ children, gradients = [], className = '' }) => {
  return (
    <main className={`relative min-h-screen overflow-hidden ${className}`}>
      {gradients.map((gradient, index) => (
        <BackgroundGradient key={`${gradient.position}-${index}`} position={gradient.position} height={gradient.height} />
      ))}
      <PagePadding>{children}</PagePadding>
    </main>
  );
};

export default PageShell;
