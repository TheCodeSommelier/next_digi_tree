import { ChangeEvent, FC, useId } from 'react';

type Props = {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  labelLeft?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
};

const Checkbox: FC<Props> = ({
  label,
  checked = false,
  disabled = false,
  labelLeft = false,
  className,
  onChange,
}) => {
  const inputId = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };


  return (
    <label
      htmlFor={inputId}
      className={`flex items-center justify-between gap-2 text-primary
        ${className}
      ${labelLeft ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <input
        type="checkbox"
        id={inputId}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className="relative inline-flex h-5 w-5 items-center justify-center rounded-xs transition-colors duration-150
          peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary"
      >
        {!checked && !disabled && (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="0.25" y="0.25" width="21.5" height="21.5" rx="1.75" style={{ fill: 'var(--color-white)' }} />
            <rect x="0.25" y="0.25" width="21.5" height="21.5" rx="1.75" style={{ stroke: 'var(--color-gray-60)', strokeWidth: '0.5' }} />
          </svg>
        )}

        {checked && !disabled && (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="0.25" y="0.25" width="21.5" height="21.5" rx="1.75" style={{ fill: 'var(--color-accent)' }} />
            <rect x="0.25" y="0.25" width="21.5" height="21.5" rx="1.75" style={{ stroke: 'var(--color-accent)', strokeWidth: '0.5' }} />
            <path d="M9.49693 15L6 11.2079L6.87423 10.2599L9.49693 13.104L15.1258 7L16 7.94802L9.49693 15Z" fill="#FEFEFE"/>
          </svg>
        )}

        {disabled && (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="0.25" y="0.25" width="21.5" height="21.5" rx="1.75" style={{ fill: 'var(--color-gray-60)' }} />
            <rect x="0.25" y="0.25" width="21.5" height="21.5" rx="1.75" style={{ stroke: 'var(--color-gray-60)', strokeWidth: '0.5' }} />
            <path d="M9.49693 15L6 11.2079L6.87423 10.2599L9.49693 13.104L15.1258 7L16 7.94802L9.49693 15Z" style={{ fill: 'var(--color-white)' }} />
          </svg>
        )}

      </span>
      <span className={disabled ? 'text-primary/60' : 'text-primary'}>{label}</span>
    </label>
  );
};

export default Checkbox;
