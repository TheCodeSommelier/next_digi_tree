import { MotionValue, motion, useTransform } from 'framer-motion';
import Bubble from './Bubble';
import StepText from './StepText';
import { Step } from '@/app/types/HowWorksIt';
import { FC } from 'react';

type Props = {
  index: number;
  total: number;
  step: Step;
  stepFloat: MotionValue<number>;
};

const StepRow: FC<Props> = ({ index, total, step, stepFloat }) => {
  const isActive = useTransform(stepFloat, (v) => v >= index);
  const topFill = useTransform(stepFloat, [index - 1, index], [0, 1]);
  const bottomFill = useTransform(stepFloat, [index, index + 1], [0, 1]);

  return (
    <div className="contents">
      {/* Left text */}
      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end text-right' : 'opacity-0'}`}>
        {index % 2 === 0 && <>
          <StepText step={step} active={isActive} />
          <div className="h-px w-12 bg-neutral-900/70" />
        </>}
      </div>

      {/* Center timeline cell */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* top connector (not for first step) */}
          {index !== 0 ? (
            <div className="relative h-10 w-0.5 bg-neutral-200">
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-neutral-900 origin-top"
                style={{ scaleY: topFill }}
              />
            </div>
          ) : (
            <div className="h-10" />
          )}

          {/* bubble */}
          <Bubble index={index} active={isActive} />

          {/* bottom connector (not for last step) */}
          {index !== total - 1 ? (
            <div className="relative h-10 w-0.5 bg-neutral-200">
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-neutral-900 origin-top"
                style={{ scaleY: bottomFill }}
              />
            </div>
          ) : (
            <div className="h-10" />
          )}
        </div>
      </div>

      {/* Right text */}
      <div className="flex items-center justify-end gap-4">
        {index % 2 !== 0 && <>
          <div className="h-px w-12 bg-neutral-900/70" />
          <StepText step={step} active={isActive} />
        </>}
      </div>

    </div>
  );
};

export default StepRow;
