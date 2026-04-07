export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-top">
            <div className="footer-brand-block">
              <span className="footer-badge">Percursos Analíticos</span>

              <h3 className="footer-title">
                Psicologia com escuta ética, tranquila e acolhedora.
              </h3>

              <p className="footer-description">
                Um espaço de cuidado pensado para acolher com delicadeza, clareza
                e presença humana, no online ou no presencial em Aracaju.
              </p>
            </div>

            <div className="footer-nav-block">
              <p className="footer-heading">Navegação</p>

              <div className="footer-links">
                <a href="#inicio">Início</a>
                <a href="#sobre">Sobre mim</a>
                <a href="#atendimento">Atendimento</a>
                <a href="#como-funciona">Como funciona</a>
                <a href="#contato">Contato</a>
              </div>
            </div>

            <div className="footer-cta-block">
              <p className="footer-heading">Contato direto</p>

              <p className="footer-cta-text">
                Fale comigo pelo WhatsApp para agendar ou tirar dúvidas.
              </p>

              <a
                href="https://wa.me/5579991160780?text=Olá%20Taise,%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20você."
                target="_blank"
                rel="noreferrer"
                className="button button-primary footer-button"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Percursos Analíticos — Taise Brasil</p>
            <p>Desenvolvido por deniCreativeStudio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}