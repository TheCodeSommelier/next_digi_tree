import { PropsWithChildren } from 'react';

import PagePadding from '@/app/components/UI/PagePadding';

export default function PageLayout({children}: PropsWithChildren) {
  return <PagePadding>
    {children}
  </PagePadding>;
}
