import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './i18n';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'edgethink.lang';

export function LanguageProvider({ children }) {
  // Default language is pt-BR. Persist the user's choice across reloads.
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'pt';
    return window.localStorage.getItem(STORAGE_KEY) || 'pt';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
