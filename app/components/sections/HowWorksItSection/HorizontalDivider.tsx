import { useIsMobile } from '@/app/hooks/useMobile';

const HorizontalDivider = () => {
  const isMobile = useIsMobile(728);

  return <div className={`relative top-3 h-px bg-primary ${isMobile ? 'w-16' : 'w-44'}`} />;
};

export default HorizontalDivider;
