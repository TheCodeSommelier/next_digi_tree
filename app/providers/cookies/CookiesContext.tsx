'use client';

import { createContext, useContext } from 'react';
import type { CookiePreferences } from './preferences';

export type { CookiePreferences } from './preferences';

type CookiesContextValue = {
  preferences: CookiePreferences;
  setPreferences: (prefs: CookiePreferences) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  save: () => void;
};

export const CookiesContext = createContext<CookiesContextValue | undefined>(undefined);

export const useCookiesConsent = () => {
  const context = useContext(CookiesContext);

  if (!context) {
    throw new Error('useCookiesConsent must be used within CookieProvider');
  }

  return context;
};
