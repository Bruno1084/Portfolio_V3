import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { useLanguage } from "../../hooks/useLanguage";
import { Lazy_image } from "../lazy_image/Lazy_image";
import "./projects.css";

export function Projects(): ReactNode {
  const { locale, t } = useLanguage();

  return (
    <section id="projects" className="reveal">
      <div className="projects-title--container">
        <h4>{t.projects.title}</h4>
      </div>
      <div className="projects-box--container">
        {projects.map((project) => (
          <div className="project-box--container" key={project.id}>
            <Link to={`/projects/${project.slug}`} key={project.id}>
              <div className="project-box-display">
                <Lazy_image
                  src={project.cover_image}
                  alt={t.projects.coverAlt(project.title)}
                />
              </div>
              <div className="project-box-description">
                <h5>{project.title}</h5>
                <p>{project.subtitle[locale]}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
