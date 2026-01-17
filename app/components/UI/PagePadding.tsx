import { FC, PropsWithChildren } from 'react';

const PagePadding: FC<PropsWithChildren> = ({ children }) => {
  return <div className="px-6 lg:px-32">{children}</div>;
};

export default PagePadding;
