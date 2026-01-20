import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import "./projects.css";

export function Projects(): ReactNode {

    return (
        <section id="projects" className="reveal">
            <div className="projects-title--container">
                <h4>Mis Proyectos</h4>
            </div>
            <div className="projects-box--container">
                {projects.map(project => (
                    <div className="project-box--container">
                        <Link to={`/projects/${project.slug}`} key={project.id} >
                            <div className="project-box-display">
                                <img src={project.img_1} alt={project.slug} loading={"lazy"} decoding={"async"} onLoad={(e) => e.currentTarget.classList.add("loaded")} />
                            </div>
                            <div className="project-box-description">
                                <h5>{project.title}</h5>
                                <p>{project.subtitle}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}