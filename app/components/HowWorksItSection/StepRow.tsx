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
  const fillProgress = useTransform(
    stepFloat,
    [index, index + 1],
    [0, 1],
    { clamp: true }
  );


  return (
    <div className="contents">
      {/* Left text */}
      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end text-right' : 'opacity-0'}`}>
        {index % 2 === 0 && <>
          <StepText step={step} />
          <div className="h-px w-12 bg-neutral-900/70" />
        </>}
      </div>

      {/* Center timeline cell */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* bubble */}
          <Bubble index={index + 1} active={isActive} />

          {/* bottom connector (not for last step) */}
          {index !== total - 1 ? (
            <div className="relative w-1 top-1/2 translate-y-1/2 bg-primary h-16 overflow-hidden rounded-full">
              <motion.div
                className="absolute left-0 top-0 w-1 h-full bg-accent origin-top rounded-full"
                style={{ scaleY: fillProgress }}
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
          <StepText step={step} />
        </>}
      </div>

    </div>
  );
};

export default StepRow;
