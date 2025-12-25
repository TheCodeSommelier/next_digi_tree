'use client';

import { FC, useState } from "react";

type Item = {
  question: string;
  answer: string;
};

type Props = {
  items?: Item[];
};

const defaultItems: Item[] = [
  {
    question: "Co znamená DigiTree UI kit pro náš projekt?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, lorem vel ultrices viverra, ipsum augue vehicula justo, sit amet posuere justo lacus in velit.",
  },
  {
    question: "Jak rychle můžeme komponenty nasadit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas justo at justo hendrerit, at tincidunt massa elementum. Vivamus efficitur lorem nec est pulvinar, et sagittis eros suscipit.",
  },
  {
    question: "Je možné upravit vizuální styl podle brandu?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

const FAQ: FC<Props> = ({ items = defaultItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const openClasses = isOpen
          ? "grid-rows-[1fr] opacity-100 px-5 pb-4"
          : "grid-rows-[0fr] opacity-0";

        return (
          <article
            key={item.question}
            className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-md shadow-primary/10 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between cursor-pointer gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex items-center gap-3">
                <p className="text-base font-semibold text-primary">
                  {item.question}
                </p>
              </div>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full text-primary transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>

            <div
              className={`grid transform transition-all duration-300 ease-out ${openClasses}`}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-primary/70">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default FAQ;
