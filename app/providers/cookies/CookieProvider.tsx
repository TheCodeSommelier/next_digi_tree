'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';

import { CookiePreferences, CookiesContext } from './CookiesContext';
import { updateGtmConsent } from '@/app/utils/updateGtmPreferences';
import CookieBanner from './CookiesBanner';

const STORAGE_KEY = 'cookie-preferences';

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookiesProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);

  // Initial load
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        // eslint-disable-next-line
        setPreferences({ ...defaultPreferences, ...parsed });
        setHasConsented(true);
        updateGtmConsent({ ...defaultPreferences, ...parsed });
      } catch {
        // ignore invalid storage
      }
    }
  }, []);

  useEffect(() => {
    if (!hasConsented) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    updateGtmConsent(preferences);
  }, [preferences, hasConsented]);

  const acceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    setHasConsented(true);
  };

  const rejectAll = () => {
    setPreferences({ necessary: true, analytics: false, marketing: false });
    setHasConsented(true);
  };

  const save = () => {
    setHasConsented(true);
  };

  const value = useMemo(
    () => ({ preferences, setPreferences, acceptAll, rejectAll, save }),
    [preferences]
  );

  return (
    <CookiesContext.Provider value={value}>
      {children}
      {!hasConsented && (
        <CookieBanner />
      )}
    </CookiesContext.Provider>
  );
};

export default CookiesProvider;
