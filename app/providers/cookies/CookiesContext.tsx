'use client';

import { createContext, useContext } from 'react';

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

type CookiesContextValue = {
  preferences: CookiePreferences;
  setPreferences: (prefs: CookiePreferences) => void;
};

export const CookiesContext = createContext<CookiesContextValue | undefined>(undefined);

export const useCookiesConsent = () => {
  const context = useContext(CookiesContext);

  if (!context) {
    throw new Error('useCookiesConsent must be used within CookieProvider');
  }

  return context;
};
