import type { ReactNode } from "react";
import "./about.css";

export function About(): ReactNode {
  return (
    <section id="about" className="reveal">
      <div className="about-tittle--container">
        <h4>Sobre Mi</h4>
      </div>
      <div className="about-desc--container">
        <p>
          Graduado de la Universidad Nacional de San Luis como Técnico en Web.
        </p>
        <p>
          Desarrollador Fullstack con experiencia en el diseño de aplicaciones
          web escalables, integración de servicios IA y migración de sistemas
          legacy. Experiencia colaborando en el liderazgo de equipos ágiles y
          entregando arquitecturas orientadas al rendimiento e impacto de
          negocio.
        </p>
      </div>
    </section>
  );
}
