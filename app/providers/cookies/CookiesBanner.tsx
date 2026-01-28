'use client';

import { FC, useState } from 'react';

import { useCookiesConsent } from './CookiesContext';
import Button from '../../components/UI/buttons/Button';
import { ButtonVariant } from '@/app/types/Button';
import CookieSettings from '@/app/components/UI/CookieSettings';

const CookieBanner: FC = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { rejectAll, acceptAll } = useCookiesConsent();

  return (
    <div
      className="fixed bottom-0 md:bottom-11 md:right-16 z-50 w-full md:w-[min(100%,500px)] origin-bottom-right
      scale-100 md:scale-90 rounded-t-lg rounded-b-none md:rounded-b-lg bg-white p-6 shadow-lg shadow-primary/20
      opacity-0 animate-cookie-pop"
      style={{ animationFillMode: 'forwards' }}
    >

      <div className="text-primary">
        {settingsOpen ? (
          <CookieSettings setSettingsOpen={setSettingsOpen} />
        ) : (
          <>
            <div className='flex flex-col gap-2 pb-4'>
              <p className="text-2xl font-semibold">Správa souborů cookie</p>
              <p className="text-primary">
                Používáme soubory cookie, abychom vám poskytli co nejlepší zážitek z webu.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-3 pt-4">
              <Button onClick={rejectAll} variant={ButtonVariant.Secondary}>Odmítnout</Button>
              <Button onClick={acceptAll}>Přijmout vše</Button>
              <Button onClick={() => setSettingsOpen(true)} variant={ButtonVariant.Ghost}>Nastavení</Button>
            </div>
          </>
        )}
      </div>

    </div>
  );
};

export default CookieBanner;
