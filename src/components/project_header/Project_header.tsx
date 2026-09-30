import type { ReactNode } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import "./project_header.css";

interface project {
  title: string;
  subtitle: string;
  repository_url: string;
  website_url: string;
  description: string;
  category: string;
  year: number;
}

export function Project_header(project: project): ReactNode {
  const { t } = useLanguage();

  return (
    <section id="projectHeader">
      <div className="header-title">
        <h1>
          {project.title} - {project.subtitle}
        </h1>
      </div>
      <div className="header-link">
        {project.repository_url && (
          <a href={project.repository_url}>{t.projectPage.repository}</a>
        )}

        {project.website_url && (
          <a href={project.website_url}>{t.projectPage.website}</a>
        )}
      </div>
      <div className="header-description">
        <p>{project.description}</p>
      </div>
      <div className="header-resume">
        <div className="header-resume-box--container">
          <h5>{t.projectPage.category}</h5>
          <p>{project.category}</p>
        </div>
        <div className="header-resume-box--container">
          <h5>{t.projectPage.year}</h5>
          <p>{project.year}</p>
        </div>
      </div>
    </section>
  );
}
