import { useEffect, useState, type ReactNode } from "react";
import { en } from "./en";
import { es } from "./es";
import { LanguageContext } from "./LanguageContext";
import type { Locale } from "./types";

const translations = { es, en };

function getInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem("locale");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // Sin acceso al storage se usa el idioma del navegador
  }

  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale): void => {
    try {
      localStorage.setItem("locale", next);
    } catch {
      // Sin acceso al storage el idioma solo dura hasta recargar la página
    }

    setLocaleState(next);
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
