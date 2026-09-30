import { createContext } from "react";
import type { Translations } from "./es";
import type { Locale } from "./types";

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
