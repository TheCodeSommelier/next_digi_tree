import { FC, TextareaHTMLAttributes } from 'react';

type Props = {
  label?: string;
  helperText?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: FC<Props> = ({
  label,
  helperText,
  className = '',
  id,
  required,
  rows = 4,
  ...rest
}) => {
  const textareaId = id || rest.name || 'textarea';

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-semibold text-primary"
        >
          {label}
          {required ? <span className="text-accent"> *</span> : null}
        </label>
      )}
      <textarea
        id={textareaId}
        required={required}
        rows={rows}
        className={`w-full border-b border-b-gray-50 py-3 text-sm font-medium text-primary placeholder:text-gray-50 focus:border-accent focus:outline-none ${className}`}
        {...rest}
      />
      {helperText && (
        <p className="text-xs text-primary/60">{helperText}</p>
      )}
    </div>
  );
};

export default TextArea;
