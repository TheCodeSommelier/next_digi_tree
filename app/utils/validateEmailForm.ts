type EamilValidationReturn = {
  isFullNameValid: boolean
  isEmailValid: boolean
  isMessageValid: boolean
  isValid: boolean
}

export const validateEmailForm = (formData: FormData): EamilValidationReturn => {
  const fullName = formData.get('fullName');
  const email = formData.get('email');
  const message = formData.get('message');

  const isNonEmptyString = (value: FormDataEntryValue | null) =>
    typeof value === 'string' && value.trim().length > 0;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = typeof email === 'string' && emailRegex.test(email.trim());

  const isFullNameValid = isNonEmptyString(fullName);
  const isMessageValid = isNonEmptyString(message);

  const isValid = isEmailValid && isFullNameValid && isMessageValid;

  return { isFullNameValid, isEmailValid, isMessageValid, isValid };
};
