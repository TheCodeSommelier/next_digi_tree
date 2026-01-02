import { motion, MotionValue, useTransform } from 'framer-motion';
import { FC } from 'react';

type Props = {
  index: number;
  active: MotionValue<boolean>;
};

const Bubble: FC<Props> = ({ index, active }) => {
  const scale = useTransform(active, [false, true], [0.85, 1]);
  const backgroundColor = useTransform(active, [false, true], ['var(--color-primary)', 'var(--color-accent)']);

  return (
    <motion.div
      className="h-14 w-14 rounded-full bg-neutral-900 text-white grid place-items-center font-semibold"
      style={{ scale, backgroundColor }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {index}
    </motion.div>
  );
};

export default Bubble;
