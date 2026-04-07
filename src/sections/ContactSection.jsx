export default function ContactSection() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <p className="badge">contato</p>

            <h2 className="title-lg">Vamos conversar?</h2>

            <p className="text">
              Conte-me o seu caso e entre em contato pelo WhatsApp para tornar o primeiro
              contato mais simples, humano e acolhedor.
            </p>
          </div>

          <a
            href="https://wa.me/5579991160780?text=Olá%20Taise,%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20você."
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}