import { PropsWithChildren } from 'react';

import PagePadding from '../components/UI/PagePadding';

export default function PagesLayout({children}: PropsWithChildren) {
  return <PagePadding>
    {children}
  </PagePadding>;
}
