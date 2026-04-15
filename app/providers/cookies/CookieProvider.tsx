'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';

import { CookiesContext } from './CookiesContext';
import {
  COOKIE_PREFERENCES_STORAGE_KEY,
  DEFAULT_COOKIE_PREFERENCES,
  type CookiePreferences,
} from './preferences';
import { updateGtmConsent } from '@/app/utils/updateGtmPreferences';
import CookieBanner from './CookiesBanner';

const CookiesProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_COOKIE_PREFERENCES);
  const [hasConsented, setHasConsented] = useState(false);

  // Initial load
  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_PREFERENCES_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        // eslint-disable-next-line
        setPreferences({ ...DEFAULT_COOKIE_PREFERENCES, ...parsed });
        setHasConsented(true);
        updateGtmConsent({ ...DEFAULT_COOKIE_PREFERENCES, ...parsed });
      } catch {
        // ignore invalid storage
      }
    }
  }, []);

  useEffect(() => {
    if (!hasConsented) return;

    localStorage.setItem(COOKIE_PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
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
