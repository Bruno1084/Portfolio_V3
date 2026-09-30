import { useContext } from "react";
import {
  LanguageContext,
  type LanguageContextValue,
} from "../i18n/LanguageContext";

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }

  return context;
}
