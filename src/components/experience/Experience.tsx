import type { ReactNode } from "react";
import { experiences } from "../../data/experience";
import { useLanguage } from "../../hooks/useLanguage";
import "./experience.css";

export function Experience(): ReactNode {
  const { locale, t } = useLanguage();

  return (
    <section id="experience" className="reveal">
      <div className="experience-tittle--container">
        <h4>{t.experience.title}</h4>
      </div>
      <div className="experience--container">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-box--container">
            <div className="experience-box-tittle--container">
              <div className="experience-box-ubication">
                <p>{experience.location[locale]}</p>
              </div>
              <div className="experience-box-company">
                <h4>{experience.companyName}</h4>
                <p>
                  {experience.startDate[locale]} -{" "}
                  {experience.finishDate[locale]}
                </p>
              </div>
              <div className="experience-box-position">
                <p>{experience.role}</p>
              </div>
            </div>
            <div className="experience-box-description--container">
              <ul>
                {experience.description.map((item, index) => (
                  <li key={index}>{item[locale]}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
