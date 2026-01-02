import { FC } from 'react';

import { Step } from '@/app/types/HowWorksIt';

type Props = {
  step: Step
}

const StepText: FC<Props> = ({ step }) => {
  return (
    <div className="max-w-md">
      <div className="text-lg font-semibold text-primary">{step.title}</div>
      <div className="mt-2 text-sm leading-relaxed text-primary">{step.body}</div>
    </div>
  );
};

export default StepText;
