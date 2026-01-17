import type { ReactNode } from "react";
import "./about.css";

export function About(): ReactNode {

    return (
        <section id="about" className="reveal">
            <div className="about-tittle--container">
                <h4>Sobre Mi</h4>
            </div>
            <div className="about-desc--container">
                <p>Graduado de la Universidad Nacional de San Luis como Técnico en Web</p>
                <p>
                    Soy Desarrollador Fullstack con experiencia en Javascript, Typescript, React, Node.js y MySQL. Desarrollo de aplicaciones
                    web, aplicaciones de escritorio, diseño de base de datos, migración de software legado. Trabajo colaborativo y
                    orientación a resolución de problemas
                </p>
            </div>
        </section>
    )
}