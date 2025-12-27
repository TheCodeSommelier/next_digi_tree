import { FC } from 'react';

import Button from './Button';
import TextInput from './TextInput';

type Props = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

const EmailForm: FC<Props> = ({
  buttonLabel = 'Poslat zprávu',
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl px-6 py-7 text-white">
      <form className="relative mt-6 space-y-3">
        <TextInput
          name="fullName"
          type="text"
          required
          label="Jméno a příjmení"
          placeholder="Jan Novák"
        />
        <TextInput
          name="email"
          type="email"
          required
          label="E-mail"
          placeholder="Zadejte emailovou addressu"
        />
        <TextInput
          name="message"
          required
          isTextArea
          label="Zpráva"
          placeholder="Řekněte nám, co vás zajímá..."

        />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Button primary={false} type="submit" className="w-full sm:w-auto">
            {buttonLabel}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
