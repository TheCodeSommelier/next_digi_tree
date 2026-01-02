import { Step } from '@/app/types/HowWorksIt';
import { motion } from 'framer-motion';
import { FC } from 'react';

type Props = {
  step: Step
}

const StepText: FC<Props> = ({ step }) => {
  return (
    <motion.div className="max-w-md">
      <div className="text-lg font-semibold text-primary">{step.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-primary">{step.body}</div>
    </motion.div>
  );
};

export default StepText;
