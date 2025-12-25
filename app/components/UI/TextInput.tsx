import { FC, InputHTMLAttributes } from "react";

type Props = {
  label?: string;
  helperText?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput: FC<Props> = ({
  label,
  helperText,
  className = "",
  id,
  required,
  ...rest
}) => {
  const inputId = id || rest.name || "text-input";

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-primary"
        >
          {label}
          {required ? <span className="text-accent"> *</span> : null}
        </label>
      )}
      <input
        id={inputId}
        required={required}
        className={`w-full border-b border-b-gray-50 bg-none py-3 text-sm font-medium text-primary placeholder:text-gray-50 duration-200 focus:border-accent focus:outline-none ${className}`}
        {...rest}
      />
      {helperText && (
        <p className="text-xs text-primary/60">{helperText}</p>
      )}
    </div>
  );
};

export default TextInput;
