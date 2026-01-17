import { useState, type ReactNode } from "react";
import "./header.css";

export function Header(): ReactNode {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior: "smooth" });
        closeMenu();
    };

    return (
        <header>
            <nav className="navbar">

                {/* DESKTOP MENU */}
                <div className="navbar-desktop">
                    <a href="#cv_header">Introducción</a>
                    <a href="#about">Sobre Mi</a>
                    <a href="#experience">Experiencia</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#education">Educación</a>
                    <a href="#stack">Tecnologías</a>
                    <a href="#contact">Contacto</a>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="navbar-toggle"
                    onClick={toggleMenu}
                    aria-label="Abrir menú"
                >
                    ☰
                </button>

                {/* OVERLAY */}
                <div
                    className={`navbar-overlay ${isOpen ? "open" : ""}`}
                    onClick={closeMenu}
                />

                {/* MODAL */}
                <div className={`navbar-modal ${isOpen ? "open" : ""}`}>
                    <button className="navbar-close" onClick={closeMenu}>
                        ✕
                    </button>

                    <div className="navbar-links">
                        <button onClick={() => scrollToSection("cv_header")}>Introducción</button>
                        <button onClick={() => scrollToSection("about")}>Sobre Mi</button>
                        <button onClick={() => scrollToSection("experience")}>Experiencia</button>
                        <button onClick={() => scrollToSection("education")}>Educación</button>
                        <button onClick={() => scrollToSection("stack")}>Tecnologías</button>
                        <button onClick={() => scrollToSection("contact")}>Contacto</button>
                    </div>

                </div>
            </nav>
        </header>
    );
}
