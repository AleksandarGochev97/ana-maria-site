import { useContext, useMemo } from "react";

import { LanguageContext } from "@/i18n/LanguageProvider";
import { translations } from "@/i18n/translations";

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("LanguageProvider is missing");
  }
  return ctx;
};

export const useT = () => {
  const { language } = useLanguage();

  return useMemo(() => {
    return (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[language] ?? entry.bg;
    };
  }, [language]);
};
