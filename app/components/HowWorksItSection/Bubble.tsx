import { motion, MotionValue, useTransform } from 'framer-motion';
import { FC } from 'react';

type Props = {
  index: number;
  activeProgress: MotionValue<number>;
};

const Bubble: FC<Props> = ({ index, activeProgress }) => {
  const scale = useTransform(activeProgress, [0, 1], [0.85, 1]);
  const backgroundColor = useTransform(activeProgress, [0, 1], ['var(--color-primary)', 'var(--color-accent)']);

  return (
    <motion.div
      className="h-16 w-16 rounded-full bg-neutral-900 text-white grid place-items-center font-semibold duration-200"
      style={{ scale, backgroundColor }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {index}
    </motion.div>
  );
};

export default Bubble;
