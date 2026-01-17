import type { ReactNode } from "react";
import "./experience.css"

export function Experience(): ReactNode {

    return (
        <section id="experience" className="reveal"> 
            <div className="experience-tittle--container">
                <h4>Experiencia</h4>
            </div>
            <div className="experience--container">
                <div className="experience-box--container">
                    <div className="experience-box-tittle--container">
                        <div className="experience-box-ubication">
                            <p>Remoto</p>
                        </div>
                        <div className="experience-box-company">
                            <h4>Integrity Solutions</h4>
                            <p>Enero 2024 - Agosto 2024</p>
                        </div>
                        <div className="experience-box-position">
                            <p>Desarrollador Frontend</p>
                        </div>
                    </div>
                    <div className="experience-box-description--container">
                        <ul>
                            <li>
                                Participé en la migración de software legado a la web. Implementación de interfaces responsivas y
                                componentes reutilizables.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}