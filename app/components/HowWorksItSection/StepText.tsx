import { Step } from '@/app/types/HowWorksIt';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { FC } from 'react';

type Props = {
  step: Step
  active: MotionValue<boolean>
}

const StepText: FC<Props> = ({ step, active }) => {
  return (
    <motion.div
      className="max-w-md"
      style={{
        opacity: useTransform(active, [false, true], [0.35, 1]),
        y: useTransform(active, [false, true], [12, 0]),
      }}
    >
      <div className="text-lg font-semibold text-primary">{step.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-primary">{step.body}</div>
    </motion.div>
  );
};

export default StepText;
