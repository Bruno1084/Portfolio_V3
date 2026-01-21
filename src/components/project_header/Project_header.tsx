import type { ReactNode } from "react";
import "./project_header.css";

interface project {
    title: string;
    subtitle: string;
    repository_url: string;
    description: string;
    category: string;
    year: number;
}

export function Project_header(project: project): ReactNode {

    return (
        <section id="projectHeader">
            <div className="header-title">
                <h1>{project.title} - {project.subtitle}</h1>
            </div>
            <div className="header-link">
                <a href={project.repository_url}>Repository</a>
            </div>
            <div className="header-description">
                <p>{project.description}</p>
            </div>
            <div className="header-resume">
                <div className="header-resume-box--container">
                    <h5>Categoría</h5>
                    <p>{project.category}</p>
                </div>
                <div className="header-resume-box--container">
                    <h5>Año</h5>
                    <p>{project.year}</p>
                </div>
            </div>
        </section>
    );
}