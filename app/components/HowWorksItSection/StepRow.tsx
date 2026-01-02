import { MotionValue, motion, useTransform } from 'framer-motion';
import { FC } from 'react';

import Bubble from './Bubble';
import StepText from './StepText';
import HorizontalDivider from './HorizontalDivider';
import { Step } from '@/app/types/HowWorksIt';
import { useIsMobile } from '@/app/hooks/useMobile';

type Props = {
  index: number;
  total: number;
  step: Step;
  stepFloat: MotionValue<number>;
};

const StepRow: FC<Props> = ({ index, total, step, stepFloat }) => {
  const activeProgress = useTransform(stepFloat, [index - 0.001, index], [0, 1], { clamp: true });
  const fillProgress = useTransform(stepFloat, [index, index + 1], [0, 1], { clamp: true });

  const isMobile = useIsMobile(728);
  const isLeft = index % 2 === 0 && !isMobile;


  return (
    <div className="contents">
      {/* LEFT COLUMN: always align toward end */}
      {!isMobile &&
        <div className={`relative top-11 flex items-start gap-7 ${isLeft ? 'justify-end text-right' : ''}`}>
          {isLeft && (
            <>
              <StepText step={step} />
              <HorizontalDivider />
            </>
          )}
        </div>
      }

      {/* CENTER COLUMN: grid-rows-[top spacer, bubble row, gap, connector] */}
      <div className={`grid grid-rows-[24px_64px_16px_96px] ${isMobile ? 'justify-items-center' : 'justify-items-end'}`}>
        {/* top spacer */}
        <div />

        {/* bubble row */}
        <Bubble index={index + 1} activeProgress={activeProgress} />

        {/* gap */}
        <div />

        {/* connector row */}
        {index !== total - 1 ? (
          <div className="relative h-24 w-1 bg-primary overflow-hidden rounded-full">
            <motion.div
              className="absolute left-0 top-0 h-full w-1 bg-accent origin-top rounded-full"
              style={{ scaleY: fillProgress }}
            />
          </div>
        ) : (
          <div className="h-16" />
        )}
      </div>

      {/* RIGHT COLUMN: always align toward end */}
      <div className={`relative top-11 flex items-start gap-7 ${!isLeft ? 'justify-start text-left' : 'opacity-0'}`}>
        {!isLeft && (
          <>
            <HorizontalDivider />
            <StepText step={step} />
          </>
        )}
      </div>
    </div>
  );
};

export default StepRow;
