import type { ReactNode } from "react";
import type { ContentBlock } from "../../types/project";
import "./project_description.css";

interface ProjectDescriptionProps {
  content: ContentBlock[];
}

export function Project_descripcion({
  content,
}: ProjectDescriptionProps): ReactNode {

  if (!content) return null;
  
  return (
    <section id="projectDescription">
      {content.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.text}</p>;

          case "image":
            return (
              <div key={index} className="description-image--container">
                <img
                  src={block.url}
                  alt={block.alt || "Imagen del proyecto"}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );

          case "list":
            return (
              <ul key={index} className="description-list">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
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
