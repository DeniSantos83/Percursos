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
          aria-expanded={open}
        >
          ☰
        </button>

        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          <a href="#inicio" onClick={() => setOpen(false)}>
            Início
          </a>
          <a href="#sobre" onClick={() => setOpen(false)}>
            Sobre mim
          </a>
          <a href="#questoes" onClick={() => setOpen(false)}>
            Psicoterapia
          </a>
          <a href="#atendimento" onClick={() => setOpen(false)}>
            Atendimento
          </a>
          <a href="#contato" onClick={() => setOpen(false)}>
            Contato
          </a>
        </nav>

        <a
          href="https://tintim.link/whatsapp/f45168fc-10a1-484e-bfec-dd9ccd560171/16a63886-339b-4fbe-9add-50b6e3a73113"
          target="_blank"
          rel="noreferrer"
          className="button button-primary button-pill navbar-cta"
        >
          Busque apoio profissional
        </a>
      </div>
    </header>
  );
}
