'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

import { type CookiePreferences } from './CookiesContext';
import Button from '../../components/UI/buttons/Button';
import Checkbox from '../../components/UI/inputs/Checkbox';
import { ROUTES } from '../../routes';
import CookieSettingsButton from '@/app/components/UI/buttons/CookieSettingsButton';
import { ButtonVariant } from '@/app/types/Button';

type Props = {
  preferences: CookiePreferences;
  onChange: (prefs: CookiePreferences) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSave: () => void;
}

const CookieBanner: FC<Props> = ({
  preferences,
  onChange,
  onAcceptAll,
  onRejectAll,
  onSave,
}) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const checkBoxes = [
  {
    label: 'Základní soubory cookie',
    disabled: true,
    checked: true
  },
  {
    label: 'Analytické soubory cookie',
    disabled: false,
    checked: preferences.analytics,
    onChange: (checked: boolean) => onChange({ ...preferences, analytics: checked })
  },
  {
    label: 'Reklamní soubory cookie',
    disabled: false,
    checked: preferences.marketing,
    onChange: (checked: boolean) => onChange({ ...preferences, marketing: checked })
  }
];

  return (
    <div
      className="fixed bottom-0 md:bottom-11 md:right-16 z-50 w-full md:w-[min(100%,500px)] origin-bottom-right
      scale-100 md:scale-90 rounded-t-lg rounded-b-none md:rounded-b-lg bg-white p-6 shadow-lg shadow-primary/20
      opacity-0 animate-cookie-pop"
      style={{ animationFillMode: 'forwards' }}
    >

      <div className="text-primary">
        {settingsOpen ? (
          <>
            <CookieSettingsButton onClick={() => setSettingsOpen(false)}>Správa souborů cookie</CookieSettingsButton>
            <div className="py-4">
              <p className="text-2xl font-semibold">Nastavení souborů cookie</p>
              <p className="text-primary">
                Soubory cookie nezbytné pro správné fungování stránek jsou vždy povoleny. {' '}
                Ostatní soubory cookie lze nastavit.
              </p>
            </div>
            <div className="flex flex-col py-4">
              {checkBoxes.map((checkBox, index) => (
                <Checkbox
                  key={crypto.randomUUID()}
                  label={checkBox.label}
                  checked={checkBox.checked}
                  disabled={checkBox.disabled}
                  onChange={checkBox.onChange}
                  labelLeft
                  className={`text-lg py-4 border-gray-60
                    ${index === checkBoxes.length - 1 ? 'border-y-[0.5px]' : 'border-t-[0.5px]'}`
                  }
                />
              ))}
            </div>
          </>
        ) : (
          <div className='flex flex-col gap-2 pb-4'>
            <p className="text-2xl font-semibold">Správa souborů cookie</p>
            <p className="text-primary">
              Používáme soubory cookie, abychom vám poskytli co nejlepší zážitek z webu.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-start gap-3 pt-4">
        {settingsOpen ? (
          <>
            <p className="text-primary pb-8">
              Chcete-li vědět více jak nakládáme s vašimi daty odkažte se prosím {' '}
              <Link href={ROUTES.cookies()} className='text-accent hover:text-primary'>zde</Link>
            </p>
            <Button onClick={onSave}>Uložit volby</Button>
          </>
        ) : (
          <>
            <Button onClick={onRejectAll} variant={ButtonVariant.Secondary}>Odmítnout</Button>
            <Button onClick={onAcceptAll}>Přijmout vše</Button>
            <Button onClick={() => setSettingsOpen(true)} variant={ButtonVariant.Ghost}>Nastavení</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
