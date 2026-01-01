import { FC } from 'react';

type Props = {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

const Checkbox: FC<Props> = ({ label, checked = false, disabled = false, onChange }) => {
  return (
    <label htmlFor={label} className="flex items-center gap-2 text-primary">
      <input
        type="checkbox"
        id={label}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={disabled ? 'text-primary/60' : 'text-primary'}>{label}</span>
    </label>
  );
};

export default Checkbox;
