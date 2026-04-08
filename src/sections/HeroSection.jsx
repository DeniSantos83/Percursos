import heroImage from "../assets/images/hero.jpg";

export default function HeroSection() {
  return (
    <main id="inicio" className="section hero-section">
      <div className="container">
        <div className="reveal">
        <section className="hero-grid">
          <div>
            <p className="badge">escuta ética, tranquila e acolhedora</p>

            <h1 className="title-xl">
              Psicologia com presença leve, humana e acolhedora.
            </h1>

            <p className="text-lg mb-30">
              Sou <strong>Taise Brasil (CRP 19/4957)</strong>, psicóloga de orientação
              psicanalítica. Atendo adolescentes e adultos de forma online ou presencial em Aracaju.
            </p>

            <div className="actions">
              <a
                href="https://wa.me/5579991160780?text=Olá%20Taise,%20gostaria%20de%20agendar%20um%20atendimento."
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Conheça meu trabalho
              </a>

              
            </div>

            
          </div>

          <div className="card-photo image-frame reveal reveal-delay-1">
            <img src={heroImage} alt="Taise Brasil" className="section-image" />
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}