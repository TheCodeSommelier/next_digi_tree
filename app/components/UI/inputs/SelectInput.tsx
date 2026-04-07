"use client";

import { Check, ChevronDown } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";

type Props = {
  name: string;
  id: string;
  label: string;
  options: string[];
  multiple?: boolean;
  placeholder?: string;
};

const SelectInput: FC<Props> = ({
  name,
  id,
  label,
  options,
  multiple = false,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelect = (option: string) => {
    if (multiple) {
      setSelectedOptions((previous) =>
        previous.includes(option)
          ? previous.filter((item) => item !== option)
          : [...previous, option],
      );

      return;
    }

    setSelectedOptions([option]);
    setIsOpen(false);
  };

  const inputPlaceholder =
    placeholder ?? (multiple ? "Vyberte služby" : "Vyberte možnost");

  return (
    <div ref={wrapperRef} className="relative space-y-1.5" data-error-indicator>
      <label htmlFor={id} className="text-primary data-[error=true]:text-error">
        {label}
      </label>

      <button
        id={id}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${id}-options`}
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex min-h-12 w-full items-center justify-between gap-3 border-b border-b-gray-50 py-3
          text-left text-sm font-medium text-primary transition-colors duration-200 focus:border-accent
          focus:outline-none data-[error=true]:border-error"
      >
        <span
          className={selectedOptions.length ? "text-primary" : "text-gray-50"}
        >
          {selectedOptions.length
            ? selectedOptions.join(", ")
            : inputPlaceholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          id={`${id}-options`}
          className="absolute left-0 right-0 top-full z-20 mt-3 max-h-64 overflow-auto rounded-3xl border
            border-gray-20 bg-white p-2 shadow-lg shadow-primary/10"
        >
          {options.map((option) => {
            const isSelected = selectedOptions.includes(option);

            return (
              <button
                key={option}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleSelect(option)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm
                  font-medium transition-colors duration-150 ${
                    isSelected
                      ? "bg-primary text-white"
                      : "text-primary hover:bg-gray-10"
                  }`}
              >
                <span>{option}</span>
                <Check
                  className={`h-4 w-4 shrink-0 ${isSelected ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            );
          })}
        </div>
      )}

      {multiple ? (
        selectedOptions.map((option) => (
          <input key={option} type="hidden" name={name} value={option} />
        ))
      ) : (
        <input type="hidden" name={name} value={selectedOptions[0] ?? ""} />
      )}
    </div>
  );
};

export default SelectInput;
