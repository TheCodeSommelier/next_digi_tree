'use client';

import { FC } from 'react';

import DropdownCard from './DropdownCard';

import type { FaqItem } from '@/app/types/Faq';

const faqItems: FaqItem[] = [
  {
    question: 'Co znamená DigiTree UI kit pro náš projekt?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, lorem vel ultrices viverra, ipsum augue vehicula justo, sit amet posuere justo lacus in velit.',
  },
  {
    question: 'Jak rychle můžeme komponenty nasadit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas justo at justo hendrerit, at tincidunt massa elementum. Vivamus efficitur lorem nec est pulvinar, et sagittis eros suscipit.',
  },
  {
    question: 'Je možné upravit vizuální styl podle brandu?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];

const Faq: FC = () => {
  return (
    <div className="space-y-3">
      {faqItems.map((item) => (
        <DropdownCard key={item.question} title={item.question} text={item.answer} />
      ))}
    </div>
  );
};

export default Faq;
