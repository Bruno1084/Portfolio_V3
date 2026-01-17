import "./projects.css";
import { type ReactNode } from "react";
import NCWIngs from "../../assets/NCWings.jpg";
import ElBuhoWeb from "../../assets/ElBuho-Web.jpg";
import StockApp from "../../assets/StockApp.jpg";
import VeryDeliWeb from "../../assets/VeryDeli-Web.jpg";

export function Projects(): ReactNode {

    return (
        <section id="projects" className="reveal">
            <div className="projects-tittle--container">
                <h4>Mis Proyectos</h4>
            </div>
            <div className="projects-box--container">
                <div className="project-box--container">
                    <div className="project-box-display">
                        <img src={NCWIngs} alt="NCWings.jpg" loading={"lazy"} decoding={"async"} onLoad={(e) => e.currentTarget.classList.add("loaded")} />
                    </div>
                    <div className="project-box-description">
                        <h5>NCWings</h5>
                        <p>Web de compra de pasajes</p>
                    </div>
                </div>
                <div className="project-box--container">
                    <div className="project-box-display">
                        <img src={ElBuhoWeb} alt="ElBuhoWeb.jpg" loading={"lazy"} decoding={"async"} onLoad={(e) => e.currentTarget.classList.add("loaded")} />
                    </div>
                    <div className="project-box-description">
                        <h5>El Buho Web</h5>
                        <p>Ecomerce de ropa</p>
                    </div>
                </div>
                <div className="project-box--container">
                    <div className="project-box-display">
                        <img src={StockApp} alt="StockApp.jpg" loading={"lazy"} decoding={"async"} onLoad={(e) => e.currentTarget.classList.add("loaded")} />
                    </div>
                    <div className="project-box-description">
                        <h5>Stock App</h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="project-box--container">
                    <div className="project-box-display">
                        <img src={VeryDeliWeb} alt="VeryDeliWeb.jpg" loading={"lazy"} decoding={"async"} onLoad={(e) => e.currentTarget.classList.add("loaded")} />
                    </div>
                    <div className="project-box-description">
                        <h5>VeryDeli Web</h5>
                        <p>Sistema de envíos</p>
                    </div>
                </div>
            </div>
        </section>
    )
}