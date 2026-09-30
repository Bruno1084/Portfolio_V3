import type { Localized } from "../i18n/types";

export type ContentBlock =
  | { type: "paragraph"; text: Localized<string> }
  | { type: "image"; url: string; alt?: Localized<string> }
  | { type: "list"; items: Localized<string>[] };

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: Localized<string>;
  description: Localized<string>;
  repository_url: string;
  website_url: string;
  category: Localized<string>;
  year: number;
  cover_image: string;
  content: ContentBlock[];
}
