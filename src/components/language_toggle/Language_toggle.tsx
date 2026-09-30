import type { ReactNode } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { Toggle_switch } from "../toggle_switch/Toggle_switch";

export function Language_toggle(): ReactNode {
  const { locale, setLocale, t } = useLanguage();
  const isEnglish = locale === "en";

  return (
    <Toggle_switch
      checked={isEnglish}
      label={t.controls.english}
      title={isEnglish ? t.controls.languageToEs : t.controls.languageToEn}
      onToggle={() => setLocale(isEnglish ? "es" : "en")}
    >
      {isEnglish ? "EN" : "ES"}
    </Toggle_switch>
  );
}
