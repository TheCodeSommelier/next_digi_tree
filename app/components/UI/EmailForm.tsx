'use client';

import { FC, FormEvent, useState } from 'react';

import Button from './Button';
import TextInput from './inputs/TextInput';
import { validateEmailForm } from '@/app/utils/feValidations/validateEmailForm';
import { setFieldErrorState } from '@/app/utils/setFieldErrorState';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/app/routes';

type Props = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

const EmailForm: FC<Props> = ({ buttonLabel = 'Poslat zprávu' }) => {
  const [isSent, setIsSent] = useState(false);
  const searchParams = useSearchParams();
  const defaultMessage = searchParams.get('message') ?? undefined;

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

    setIsSent(true);
  };

  return (
    <div className="relative overflow-hidden">
      {
        isSent ? (
          <div className='text-primary flex flex-col items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-25 duration-300'>
            <Image src="/images/checkmark_icon.svg" width={75} height={75} alt="Checked icon" />
            <p className='text-2xl font-semibold w-auto'>Odesláno</p>
            <p className='text-center'>
              Vážíme si Vaší zprávy a v nejbližší době se jí budeme věnovat. {' '}
              Zatímco se věnujeme Vaší žádosti, projděte si naše <Link className='hover:text-accent border-b pb-px duration-200' href={ROUTES.products()}>produkty</Link>.
            </p>
            <Button className='mt-8' primary={false} onClick={() => setIsSent(false)}>Chci poslat další email</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative mt-6 space-y-4 animate-in fade-in slide-in-from-bottom-25 duration-300">
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
              defaultValue={defaultMessage}
            />

            <Button primary={false} disabled={isSent} type="submit" className="w-1/2 mt-3">
              {buttonLabel}
            </Button>
          </form>
        )
      }
    </div>
  );
};

export default EmailForm;
