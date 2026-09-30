import type { ReactNode } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import "./about.css";

export function About(): ReactNode {
  const { t } = useLanguage();

  return (
    <section id="about" className="reveal">
      <div className="about-tittle--container">
        <h4>{t.about.title}</h4>
      </div>
      <div className="about-desc--container">
        {t.about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
