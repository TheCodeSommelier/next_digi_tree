import { FC } from 'react';

import { Step } from '@/app/types/HowWorksIt';

type Props = {
  step: Step
}

const StepText: FC<Props> = ({ step }) => {
  return (
    <div className="max-w-md">
      <div className={`font-semibold text-primary tex-base md:text-lg`}>{step.title}</div>
      <div className={`mt-2 leading-relaxed text-primary text-xs md:text-sm`}>{step.body}</div>
    </div>
  );
};

export default StepText;
