export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const COOKIE_PREFERENCES_STORAGE_KEY = 'cookie-preferences';

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};
