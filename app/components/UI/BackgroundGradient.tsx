import { GradientPosition } from '@/app/types/Gradient';
import { FC } from 'react';

type Props = {
  position: GradientPosition
  height?: number;
};

type GradientPositionAttrs = {
  className: string
  position: string
}

const positionClasses: Record<GradientPosition, GradientPositionAttrs> = {
  hero: {
    className: 'top-96',
    position: '50% 50%'
  },
  top: {
    className: 'top-0',
    position: '50% 0%'
  },
  middle: {
    className: 'top-1/2 -translate-y-1/2',
    position: '50% 50%'
  },
  bottom: {
    className: 'bottom-0',
    position: '50% 100%'
  }
};

const BackgroundGradient: FC<Props> = ({ position, height = 1000 }) => {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 ${positionClasses[position].className} -z-10 overflow-visible`}
      style={{ height }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(200% 80% at ${positionClasses[position].position}, var(--color-accent), transparent 65%)`,
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default BackgroundGradient;
