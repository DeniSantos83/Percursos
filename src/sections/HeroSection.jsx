import heroImage from "../assets/images/hero.jpg";

export default function HeroSection() {
  return (
    <main id="inicio" className="section hero-section">
      <div className="container">
        <div className="reveal">
          <section className="hero-grid">
            <div>
              <p className="badge">
                Atendimento particular — não atendendemos convênios
              </p>

              <h1 className="title-xl">
                Psicologia com presença leve, humana e acolhedora.
              </h1>

              <p className="text-lg mb-30">
                Sou <strong>Taise Brasil</strong>, psicóloga de orientação
                psicanalítica e realizo atendimentos psicológicos particulares
                para adolescentes, adultos e idosos, de forma presencial em
                Aracaju ou online.
              </p>

              <div className="actions">
                <a
                  href="https://tintim.link/whatsapp/f45168fc-10a1-484e-bfec-dd9ccd560171/16a63886-339b-4fbe-9add-50b6e3a73113"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Agende sua primeira consulta
                </a>
              </div>
            </div>

            <div className="card-photo image-frame reveal reveal-delay-1">
              <img
                src={heroImage}
                alt="Taise Brasil"
                className="section-image"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
