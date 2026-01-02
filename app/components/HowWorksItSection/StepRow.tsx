import { MotionValue, motion, useTransform } from 'framer-motion';
import { FC } from 'react';
import Bubble from './Bubble';
import StepText from './StepText';
import HorizontalDivider from './HorizontalDivider';
import { Step } from '@/app/types/HowWorksIt';

type Props = {
  index: number;
  total: number;
  step: Step;
  stepFloat: MotionValue<number>;
};

const StepRow: FC<Props> = ({ index, total, step, stepFloat }) => {
  const activeProgress = useTransform(stepFloat, [index - 0.001, index], [0, 1], { clamp: true });

  const fillProgress = useTransform(stepFloat, [index, index + 1], [0, 1], {
    clamp: true,
  });

  const isLeft = index % 2 === 0;

  return (
    <div className="contents">
      {/* LEFT COLUMN: always align toward center */}
      <div className={`flex items-center ${isLeft ? 'justify-end text-right' : 'opacity-0'}`}>
        {isLeft && (
          <div className="flex items-center gap-7">
            <StepText step={step} />
            <HorizontalDivider />
          </div>
        )}
      </div>

      {/* CENTER COLUMN: grid to lock the bubble "middle row" */}
      <div className="flex justify-center">
        <div className="grid grid-rows-[1fr_auto_1fr] items-center">
          {/* top spacer/connector area (optional) */}
          <div />

          {/* bubble row (this row defines the vertical center for the whole row) */}
          <div className="flex justify-center">
            <Bubble index={index + 1} activeProgress={activeProgress} />
          </div>

          {/* bottom connector */}
          <div className="flex justify-center">
            {index !== total - 1 ? (
              <div className="relative top-1/2 translate-y-1/2 h-16 w-1 bg-primary overflow-hidden rounded-full">
                <motion.div
                  className="absolute left-0 top-0 h-full w-1 bg-accent origin-top rounded-full"
                  style={{ scaleY: fillProgress }}
                />
              </div>
            ) : (
              <div className="h-16" />
            )}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: always align toward center */}
      <div className={`flex items-center ${!isLeft ? 'justify-start text-left' : 'opacity-0'}`}>
        {!isLeft && (
          <div className="flex items-center gap-7">
            <HorizontalDivider />
            <StepText step={step} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepRow;
