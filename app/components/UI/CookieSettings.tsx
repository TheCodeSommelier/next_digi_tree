'use client';

import Link from 'next/link';
import { FC } from 'react';

import { ROUTES } from '@/app/routes';
import Button from './buttons/Button';
import { useCookiesConsent } from '@/app/providers/cookies/CookiesContext';
import CookieSettingsButton from './buttons/CookieSettingsButton';
import Checkbox from './inputs/Checkbox';

type Props = {
  setSettingsOpen?: (settingsOpen: boolean) => void
  isPage?: boolean
}

const CookieSettings: FC<Props> = ({ setSettingsOpen, isPage = false }) => {
  const { preferences, save, setPreferences } = useCookiesConsent();

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
      onChange: (checked: boolean) => setPreferences({ ...preferences, analytics: checked })
    },
    {
      label: 'Reklamní soubory cookie',
      disabled: false,
      checked: preferences.marketing,
      onChange: (checked: boolean) => setPreferences({ ...preferences, marketing: checked })
    }
  ];

  return (
    <div className={`${isPage ? 'w-3/7 py-10' : 'w-full'}`}>
      {setSettingsOpen &&
        <>
          <CookieSettingsButton onClick={() => setSettingsOpen(false)}>Správa souborů cookie</CookieSettingsButton>
          <div className="py-4">
            <p className="text-primary text-2xl font-semibold">Nastavení souborů cookie</p>
            <p className="text-primary">
              Soubory cookie nezbytné pro správné fungování stránek jsou vždy povoleny. {' '}
              Ostatní soubory cookie lze nastavit.
            </p>
          </div>
        </>
      }
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
      <div className="flex flex-wrap items-center justify-start gap-3 pt-4">
        {setSettingsOpen &&
          <p className="text-primary pb-8">
            Chcete-li vědět více jak nakládáme s vašimi daty odkažte se prosím {' '}
            <Link href={ROUTES.cookies()} className='text-accent hover:text-primary'>zde</Link>
          </p>
        }
        <Button onClick={save}>Uložit změny</Button>
      </div>
    </div>
  );
};

export default CookieSettings;
