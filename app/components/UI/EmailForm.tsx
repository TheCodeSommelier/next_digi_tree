import { FC } from 'react';
import Button from './Button';
import TextArea from './TextArea';
import TextInput from './TextInput';

type Props = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

const EmailForm: FC<Props> = ({
  title = 'Přihlaste se k odběru novinek',
  description = 'Aktualizace o nových funkcích, cenách a inspiraci do vaší schránky jednou týdně.',
  buttonLabel = 'Odeslat',
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary px-6 py-7 text-white shadow-2xl shadow-primary/25">
      <div className="absolute -left-10 -top-12 h-28 w-28 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-white/10 blur-3xl" />

      <div className="relative space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
          Email form
        </p>
        <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>

      <form className="relative mt-6 space-y-3">
        <TextInput
          name="email"
          type="email"
          required
          label="Email"
          placeholder="vaše@email.cz"
        />
        <TextArea
          name="message"
          label="Vaše zpráva"
          placeholder="Řekněte nám, co vás zajímá..."
        />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" className="w-full sm:w-auto">
            {buttonLabel}
          </Button>
          <p className="text-xs text-white/60">
            Žádný spam, jen hodnotné insighty. Odběr můžete kdykoli ukončit.
          </p>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
