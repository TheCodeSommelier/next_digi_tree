import { CookiePreferences } from '../providers/cookies/CookiesContext';

export const updateGtmConsent = (prefs: CookiePreferences) => {
  if (typeof window === 'undefined') return;
  const win = window as typeof window & { dataLayer?: unknown[] };
  if (!win.dataLayer) win.dataLayer = [];
  win.dataLayer.push({
    event: 'consent_update',
    analytics_storage: prefs.analytics ? 'granted' : 'denied',
    ad_storage: prefs.marketing ? 'granted' : 'denied',
    functionality_storage: 'granted',
    personalization_storage: prefs.marketing ? 'granted' : 'denied',
    security_storage: 'granted',
  });
};
