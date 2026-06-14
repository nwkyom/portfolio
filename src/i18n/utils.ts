import fr from './fr';
import en from './en';

const translations = { fr, en } as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof fr;

export function t(locale: Locale): TranslationKeys {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, , lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'fr';
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}

export function getLocalizedPath(path: string, locale: Locale, base: string = '/portfolio'): string {
  // Remove base and locale prefix, then rebuild
  const cleanPath = path
    .replace(base, '')
    .replace(/^\/(fr|en)/, '')
    .replace(/^\//, '');
  return `${base}/${locale}/${cleanPath}`.replace(/\/$/, '') || `${base}/${locale}`;
}