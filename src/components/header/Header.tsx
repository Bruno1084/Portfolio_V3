import { useState, type ReactNode } from "react";
import "./header.css";

export function Header(): ReactNode {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <header>
            <nav className="navbar">

                <div className="navbar-desktop">
                    <a href="/#cv_header">Introducción</a>
                    <a href="/#about">Sobre Mi</a>
                    <a href="/#experience">Experiencia</a>
                    <a href="/#projects">Proyectos</a>
                    <a href="/#education">Educación</a>
                    <a href="/#stack">Tecnologías</a>
                    <a href="/#contact">Contacto</a>
                </div>

                <button
                    className="navbar-toggle"
                    onClick={toggleMenu}
                    aria-label="Abrir menú"
                >
                    ☰
                </button>

                <div
                    className={`navbar-overlay ${isOpen ? "open" : ""}`}
                    onClick={closeMenu}
                />

                <div className={`navbar-modal ${isOpen ? "open" : ""}`}>
                    <button className="navbar-close" onClick={closeMenu}>
                        ✕
                    </button>

                    <div className="navbar-links">
                        <a href="/#cv_header" onClick={closeMenu}>Introducción</a>
                        <a href="/#about" onClick={closeMenu}>Introducción</a>
                        <a href="/#experience" onClick={closeMenu}>Sobre Mi</a>
                        <a href="/#education" onClick={closeMenu}>Educación</a>
                        <a href="/#stack" onClick={closeMenu}>Tecnologías</a>
                        <a href="/#contact" onClick={closeMenu}>Contacto</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
