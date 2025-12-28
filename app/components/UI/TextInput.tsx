import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type Props = {
  label?: string;
  helperText?: string;
  className?: string;
  isTextArea?: boolean
  rows?: number
} & InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextInput: FC<Props> = ({
  label,
  helperText,
  className = '',
  id,
  isTextArea = false,
  rows,
  required,
  ...rest
}) => {
  const inputId = id || rest.name || 'text-input';

  return (
    <div className="space-y-1.5" data-error-indicator>
      {label && (
        <label
          htmlFor={inputId}
          className="text-primary data-[error=true]:text-error"
        >
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          id={inputId}
          required={required}
          rows={rows}
          className={`w-full border-b border-b-gray-50 py-3 text-sm font-medium
            text-primary placeholder:text-gray-50 focus:border-accent
            focus:outline-none data-[error=true]:border-error
            data-[error=true]:placeholder:text-error ${className}`}
          {...rest}
        />
      ) : (
        <input
          id={inputId}
          required={required}
          className={`w-full border-b border-b-gray-50 bg-none py-3 text-sm
            font-medium text-primary placeholder:text-gray-50 duration-200
            focus:border-accent focus:outline-none data-[error=true]:border-error
            data-[error=true]:placeholder:text-error ${className}`}
          {...rest}
        />
      )}

      {helperText && (
        <p className="text-xs text-primary/60">{helperText}</p>
      )}
    </div>
  );
};

export default TextInput;
