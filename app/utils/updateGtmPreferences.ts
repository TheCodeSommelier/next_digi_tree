import {
  COOKIE_PREFERENCES_STORAGE_KEY,
  DEFAULT_COOKIE_PREFERENCES,
  type CookiePreferences,
} from '../providers/cookies/preferences';

type ConsentValue = 'granted' | 'denied';

type GtmConsentState = {
  ad_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
  analytics_storage: ConsentValue;
  functionality_storage: ConsentValue;
  personalization_storage: ConsentValue;
  security_storage: ConsentValue;
};

type WindowWithConsentMode = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export const DEFAULT_GTM_CONSENT_STATE: GtmConsentState & { wait_for_update: number } = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500,
};

export const getGtmConsentState = (prefs: CookiePreferences): GtmConsentState => ({
  ad_storage: prefs.marketing ? 'granted' : 'denied',
  ad_user_data: prefs.marketing ? 'granted' : 'denied',
  ad_personalization: prefs.marketing ? 'granted' : 'denied',
  analytics_storage: prefs.analytics ? 'granted' : 'denied',
  functionality_storage: 'granted',
  personalization_storage: prefs.marketing ? 'granted' : 'denied',
  security_storage: 'granted',
});

export const getGtmConsentBootstrapScript = () => `
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
window.gtag('consent', 'default', ${JSON.stringify(DEFAULT_GTM_CONSENT_STATE)});
try {
  var stored = window.localStorage.getItem(${JSON.stringify(COOKIE_PREFERENCES_STORAGE_KEY)});
  if (stored) {
    var prefs = JSON.parse(stored);
    var resolved = {
      ...${JSON.stringify(DEFAULT_COOKIE_PREFERENCES)},
      ...prefs,
    };
    window.gtag('consent', 'update', {
      ad_storage: resolved.marketing ? 'granted' : 'denied',
      ad_user_data: resolved.marketing ? 'granted' : 'denied',
      ad_personalization: resolved.marketing ? 'granted' : 'denied',
      analytics_storage: resolved.analytics ? 'granted' : 'denied',
      functionality_storage: 'granted',
      personalization_storage: resolved.marketing ? 'granted' : 'denied',
      security_storage: 'granted',
    });
  }
} catch {}
`;

export const updateGtmConsent = (prefs: CookiePreferences) => {
  if (typeof window === 'undefined') return;
  const win = window as WindowWithConsentMode;
  if (!win.dataLayer) win.dataLayer = [];
  win.gtag =
    win.gtag ||
    function gtag(...args: unknown[]) {
      win.dataLayer?.push(args);
    };
  win.gtag('consent', 'update', getGtmConsentState(prefs));
};
