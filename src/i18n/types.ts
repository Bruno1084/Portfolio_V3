export type Locale = "es" | "en";

export type Localized<T> = Record<Locale, T>;
