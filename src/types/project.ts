export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; url: string; alt?: string }
  | { type: "list"; items: string[] };

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  repository_url: string;
  website_url: string;
  category: string;
  year: number;
  cover_image: string;
  content: ContentBlock[];
}
