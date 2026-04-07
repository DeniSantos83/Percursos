import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="container navbar-inner">
        <div className="brand">Percursos Analíticos</div>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          <a href="#inicio" onClick={() => setOpen(false)}>Início</a>
          <a href="#sobre" onClick={() => setOpen(false)}>Sobre mim</a>
          <a href="#atendimento" onClick={() => setOpen(false)}>Atendimento</a>
          <a href="#como-funciona" onClick={() => setOpen(false)}>Como funciona</a>
          <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
        </nav>

        <a
          href="https://wa.me/5579991160780?text=Olá%20Taise,%20gostaria%20de%20agendar%20um%20atendimento."
          target="_blank"
          rel="noreferrer"
          className="button button-primary button-pill navbar-cta"
        >
          Agendar atendimento
        </a>
      </div>
    </header>
  );
}