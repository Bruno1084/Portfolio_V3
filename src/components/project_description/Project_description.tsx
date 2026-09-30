import type { ReactNode } from "react";
import type { ContentBlock } from "../../types/project";
import { useLanguage } from "../../hooks/useLanguage";
import { Lazy_image } from "../lazy_image/Lazy_image";
import "./project_description.css";

interface ProjectDescriptionProps {
  content: ContentBlock[];
}

export function Project_descripcion({
  content,
}: ProjectDescriptionProps): ReactNode {
  const { locale, t } = useLanguage();

  if (!content) return null;

  return (
    <section id="projectDescription">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.text[locale]}</p>;

          case "image":
            return (
              <div key={index} className="description-image--container">
                <Lazy_image
                  src={block.url}
                  alt={block.alt?.[locale] || t.image.defaultAlt}
                />
              </div>
            );

          case "list":
            return (
              <ul key={index} className="description-list">
                {block.items.map((item, i) => (
                  <li key={i}>{item[locale]}</li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </section>
  );
}
