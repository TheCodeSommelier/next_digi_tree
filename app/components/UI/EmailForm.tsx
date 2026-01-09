'use client';

import { FC, FormEvent } from 'react';

import Button from './Button';
import TextInput from './inputs/TextInput';
import { validateEmailForm } from '@/app/utils/feValidations/validateEmailForm';
import { setFieldErrorState } from '@/app/utils/setFieldErrorState';

type Props = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

const EmailForm: FC<Props> = ({ buttonLabel = 'Poslat zprávu' }) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const validationResult = validateEmailForm(formData);

    setFieldErrorState(form, 'nameInput', !validationResult.isFullNameValid);
    setFieldErrorState(form, 'emailInput', !validationResult.isEmailValid);
    setFieldErrorState(form, 'messageInput', !validationResult.isMessageValid);

    if (!validationResult.isValid) return;

    const payload = Object.fromEntries(formData.entries());

    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!result.ok) {
      throw new Error('Email could not be sent');
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl p-0 md:p-6 text-white">

      <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
        <TextInput
          id="nameInput"
          name="fullName"
          type="text"
          label="Jméno a příjmení"
          placeholder="Jan Novák"
        />
        <TextInput
          id="emailInput"
          name="email"
          type="email"
          label="E-mail"
          placeholder="Zadejte emailovou addressu"
        />
        <TextInput
          id="messageInput"
          name="message"
          isTextArea
          label="Zpráva"
          placeholder="Řekněte nám, co vás zajímá..."
        />

        <Button primary={false} type="submit" className="w-1/2 mt-3">
          {buttonLabel}
        </Button>
      </form>
    </div>
  );
};

export default EmailForm;
