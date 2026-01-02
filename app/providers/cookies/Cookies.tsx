'use client';

import { useState } from 'react';
import Link from 'next/link';

import { type CookiePreferences } from './CookiesContext';
import Button from '../../components/UI/Button';
import Checkbox from '../../components/UI/inputs/Checkbox';
import { ROUTES } from '../../routes';

const CookieBanner = ({
  preferences,
  onChange,
  onAcceptAll,
  onRejectAll,
  onSave,
}: {
  preferences: CookiePreferences;
  onChange: (prefs: CookiePreferences) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onSave: () => void;
}) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-11 right-16 z-50 w-[min(100%,500px)] origin-bottom-right
      scale-90 rounded-lg bg-white px-7 py-5 shadow-lg shadow-primary/20
      opacity-0 animate-cookie-pop"
      style={{ animationFillMode: 'forwards' }}
    >

      <div className="space-y-2 text-primary">
        {settingsOpen ? (
          <>
            <p className="text-2xl font-semibold">Nastavení souborů cookie</p>
            <p className="text-primary">
              Soubory cookie nezbytné pro správné fungování stránek jsou vždy povoleny. {' '}
              Ostatní soubory cookie lze nastavit.
            </p>
            <div className="flex flex-col">
              <Checkbox label="Nezbytné" checked disabled />
              <Checkbox
                label="Marketing"
                checked={preferences.marketing}
                onChange={(checked) => onChange({ ...preferences, marketing: checked })}
              />
              <Checkbox
                label="Analytické"
                checked={preferences.analytics}
                onChange={(checked) => onChange({ ...preferences, analytics: checked })}
              />
            </div>
          </>
      ) : (
        <>
          <p className="text-2xl font-semibold">Správa souborů cookie</p>
          <p className="text-primary">
            Používáme soubory cookie, abychom vám poskytli co nejlepší zážitek z webu. {' '}
            Podrobnosti o nastavení cookies {' '}
            <Link href={ROUTES.cookies()} className='text-accent hover:text-primary'>zde</Link>.
          </p>
        </>
      )}
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-start gap-3">
        <Button onClick={() => setSettingsOpen(!settingsOpen)} primary={false}>Nastavení</Button>
        {settingsOpen ? (
          <Button onClick={onSave}>Uložit volby</Button>
        ) : (
          <>
            <Button onClick={onRejectAll} primary={false}>Odmítnout</Button>
            <Button onClick={onAcceptAll}>Přijmout vše</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
