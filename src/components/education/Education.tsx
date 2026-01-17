import type { ReactNode } from "react";
import "./education.css";

export function Education(): ReactNode {

    return (
        <section id="education" className="reveal">
            <div className="education-tittle--container">
                <h4>Educación</h4>
            </div>
            <div className="education--container">
                <div className="education-box--container">
                    <div className="education-box-tittle--container">
                        <div className="education-box-ubication">
                            <p>San Luis, Argentina</p>
                        </div>
                        <div className="education-box-tittle">
                            <h4>Tecnicatura en Web</h4>
                            <p>2022 - 2025</p>
                        </div>
                        <div className="education-box-college">
                            <p>Universidad Nacional de San Luis</p>
                        </div>
                    </div>
                    <div className="education-box-description--container">
                        <p>Enfocado en el desarrollo de software para web y escritorio. Adquirí conocimientos en backend y frontend con metodologías profesionales y de trabajo en equipo</p>
                    </div>
                </div>
            </div>
        </section>
    );
}