import { useEffect, type ReactNode } from "react";
import { Header } from "../components/header/Header";
import { Project_descripcion } from "../components/project_description/Project_description";
import { Project_header } from "../components/project_header/Project_header";
import { Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Footer } from "../components/footer/Footer";
import { useLanguage } from "../hooks/useLanguage";

export function ProjectPage(): ReactNode {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <main>
        <Header />
        <div id="main--container">
          <Project_header
            title={project.title}
            subtitle={project.subtitle[locale]}
            repository_url={project.repository_url}
            website_url={project.website_url}
            description={project.description[locale]}
            category={project.category[locale]}
            year={project.year}
          />

          <Project_descripcion content={project.content} />
        </div>
      </main>

      <Footer />
    </>
  );
}
