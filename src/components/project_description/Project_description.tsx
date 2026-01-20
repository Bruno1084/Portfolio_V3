import type { ReactNode } from "react";
import "./project_description.css";

interface project {
    img_1: string;
    paragraph: string;
}

export function Project_descripcion(project: project): ReactNode {

    return (
        <section id="projectDescription">
            <div className="description-image--container">
                <img src={project.img_1} alt="project_img_1" loading={"lazy"} decoding={"async"} />
            </div>

            <p>{project.paragraph}</p>
        </section>
    );
}