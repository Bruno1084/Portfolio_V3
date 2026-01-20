import type { ReactNode } from "react";
import { Header } from "../components/header/Header";
import { Project_descripcion } from "../components/project_description/Project_description";
import { Project_header } from "../components/project_header/Project_header";
import { Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectPage(): ReactNode {
    const { slug } = useParams<{ slug: string }>();

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return <Navigate to="/projects" replace />;
    };

    return (
        <>
            <main>
                <Header />
                <div id="main--container">
                    <Project_header 
                        title={project.title}
                        subtitle={project.subtitle}
                        website_url={project.website_url}
                        repository_url={project.repository_url}
                        description={project.description}
                        category={project.category}
                        year={project.year}
                    />
                    <Project_descripcion
                        img_1={project.img_1}
                        paragraph={project.paragraph}
                    />
                </div>
            </main>
        </>
    );
}