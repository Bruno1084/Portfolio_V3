import { useState, type ReactNode } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import "./header.css";

export function Header(): ReactNode {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/#cv_header", label: t.header.nav.intro },
    { href: "/#about", label: t.header.nav.about },
    { href: "/#experience", label: t.header.nav.experience },
    { href: "/#projects", label: t.header.nav.projects },
    { href: "/#education", label: t.header.nav.education },
    { href: "/#stack", label: t.header.nav.stack },
    { href: "/#contact", label: t.header.nav.contact },
  ];

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label={t.header.openMenu}
        >
          ☰
        </button>

        <div
          className={`navbar-overlay ${isOpen ? "open" : ""}`}
          onClick={closeMenu}
        />

        <div className={`navbar-modal ${isOpen ? "open" : ""}`}>
          <button
            className="navbar-close"
            onClick={closeMenu}
            aria-label={t.header.closeMenu}
          >
            ✕
          </button>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
