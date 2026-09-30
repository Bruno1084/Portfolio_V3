import type { Localized } from "../i18n/types";

export interface Experience {
  id: number;
  location: Localized<string>;
  companyName: string;
  role: string;
  startDate: Localized<string>;
  finishDate: Localized<string>;
  description: Localized<string>[];
}
