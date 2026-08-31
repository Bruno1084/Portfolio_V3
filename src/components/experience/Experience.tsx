import type { ReactNode } from "react";
import { experiences } from "../../data/experience";
import "./experience.css";

export function Experience(): ReactNode {
  return (
    <section id="experience" className="reveal">
      <div className="experience-tittle--container">
        <h4>Experiencia</h4>
      </div>
      <div className="experience--container">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-box--container">
            <div className="experience-box-tittle--container">
              <div className="experience-box-ubication">
                <p>{experience.location}</p>
              </div>
              <div className="experience-box-company">
                <h4>{experience.companyName}</h4>
                <p>
                  {experience.startDate} - {experience.finishDate}
                </p>
              </div>
              <div className="experience-box-position">
                <p>{experience.role}</p>
              </div>
            </div>
            <div className="experience-box-description--container">
              <ul>
                {experience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
