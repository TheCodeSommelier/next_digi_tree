'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';

import { CookiePreferences, CookiesContext } from './CookiesContext';
import { updateGtmConsent } from '@/app/utils/updateGtmPreferences';
import CookieBanner from './Cookies';

const STORAGE_KEY = 'cookie-preferences';

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookiesProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    if (typeof window === 'undefined') return defaultPreferences;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        return { ...defaultPreferences, ...parsed };
      } catch {
        return defaultPreferences;
      }
    }
    return defaultPreferences;
  });

  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem(STORAGE_KEY);
    return !stored;
  });

  useEffect(() => {
    if (!showBanner) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      updateGtmConsent(preferences);
    }
  }, [preferences, showBanner]);

  const value = useMemo(() => ({ preferences, setPreferences }), [preferences]);

  const handleAcceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    setPreferences({ necessary: true, analytics: false, marketing: false });
    setShowBanner(false);
  };

  const handleSave = () => {
    setShowBanner(false);
  };

  return (
    <CookiesContext.Provider value={value}>
      {children}
      {showBanner ? (
        <CookieBanner
          preferences={preferences}
          onChange={setPreferences}
          onAcceptAll={handleAcceptAll}
          onRejectAll={handleRejectAll}
          onSave={handleSave}
        />
      ) : null}
    </CookiesContext.Provider>
  );
};

export default CookiesProvider;
