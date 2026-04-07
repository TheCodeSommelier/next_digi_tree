"use client";

import { FC, ReactNode, useState } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const DropdownCard: FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openClasses = isOpen
    ? "grid-rows-[1fr] opacity-100"
    : "grid-rows-[0fr] opacity-0";

  return (
    <article
      key={title}
      className="overflow-hidden rounded-2xl bg-white shadow-md shadow-primary/10 transition-transform duration-200 hover:-translate-y-0.5"
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left md:p-7"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <p
            className={`text-lg font-semibold transition-colors duration-300 md:text-2xl ${
              isOpen ? "text-accent" : "text-primary"
            }`}
          >
            {title}
          </p>
        </div>
        <span
          className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? "text-accent" : "text-primary"
          }`}
          aria-hidden
        >
          <span className="absolute h-0.5 w-4 rounded-full bg-current transition-colors duration-300" />
          <span
            className={`absolute h-4 w-0.5 rounded-full bg-current transition-all duration-300 ease-out ${
              isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
            }`}
          />
        </span>
      </button>

      <div
        className={`grid transform transition-all duration-300 ease-out ${openClasses}`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </article>
  );
};

export default DropdownCard;
