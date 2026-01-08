import { CSSProperties, FC } from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
};

const BackgroundGradient: FC<Props> = ({ className, style }) => {
  const baseStyle: CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    background: 'radial-gradient(ellipse 100% 50% at center, var(--color-accent), transparent)',
  };

  return (
    <div
      aria-hidden
      className={className}
      style={{
        ...baseStyle,
        ...style,
      }}
    />
  );
};

export default BackgroundGradient;
