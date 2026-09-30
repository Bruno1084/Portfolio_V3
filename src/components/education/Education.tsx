import type { ReactNode } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import "./education.css";

export function Education(): ReactNode {
  const { t } = useLanguage();

  return (
    <section id="education" className="reveal">
      <div className="education-tittle--container">
        <h4>{t.education.title}</h4>
      </div>
      <div className="education--container">
        <div className="education-box--container">
          <div className="education-box-tittle--container">
            <div className="education-box-ubication">
              <p>San Luis, Argentina</p>
            </div>
            <div className="education-box-tittle">
              <h4>{t.education.degree}</h4>
              <p>2022 - 2025</p>
            </div>
            <div className="education-box-college">
              <p>Universidad Nacional de San Luis</p>
            </div>
          </div>
          <div className="education-box-description--container">
            <p>{t.education.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
