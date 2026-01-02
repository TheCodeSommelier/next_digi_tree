import { FC } from 'react';
import { MotionValue } from 'framer-motion';

import { Step } from '@/app/types/HowWorksIt';
import StepRow from './StepRow';

type Props = {
  steps: Step[]
  stepFloat: MotionValue<number>
  lineScale: number | MotionValue<number>
}

const Timeline: FC<Props> = ({ steps, stepFloat }) => {
  return (
    <div className="grid grid-cols-[1fr_80px_1fr] gap-x-4">
      {steps.map((step: Step, index: number) => {
        return <StepRow
          key={step.id}
          index={index}
          step={step}
          stepFloat={stepFloat}
          total={steps.length}
               />;
      })}
    </div>
  );
};


export default Timeline;
