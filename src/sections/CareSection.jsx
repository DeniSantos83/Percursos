import atendimento1 from "../assets/images/atendimento1.jpg";
import atendimento2 from "../assets/images/atendimento2.jpg";
import atendimento3 from "../assets/images/atendimento3.jpg";
import atendimento4 from "../assets/images/atendimento4.jpg";
import caixa from "../assets/images/saude_caixa_1.png";
import petrobras from "../assets/images/logo_petro.png";
import RevealOnScroll from "../components/RevealOnScroll";

export default function CareSection() {
  const images = [atendimento1, atendimento2, atendimento3, atendimento4];

  return (
    <section id="atendimento" className="section care-section">
      <div className="container">
        <div className="care-grid">
          <RevealOnScroll delay={0} duration={800} distance={32}>
            <div>
              <p className="badge">atendimento</p>

              <h2 className="title-lg">
                Atendimento online ou presencial, com leveza desde o primeiro contato.
              </h2>

              <p className="text mb-24">
                Sessões para adolescentes, adultos e idosos, de forma online por videochamada
                ou presencial em Aracaju.
              </p>

              <ul className="list mb-28">
                <li>Primeiro acolhimento para escuta da demanda</li>
                <li>Orientações sobre formato e frequência do atendimento</li>
                <li>Informações sobre valores e disponibilidade pelo WhatsApp</li>
              </ul>

              <p className="plans-label">
                Atendimento por convênios e particular
              </p>

              <div className="plans-logos">
                <img src={caixa} alt="Saúde Caixa" />
                <img src={petrobras} alt="Saúde Petrobras" />
                <span>… e particular</span>
              </div>

              <div className="actions">
                <a
                  href="https://wa.me/5579991160780?text=Olá%20Taise,%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento."
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  Valores e disponibilidade
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120} duration={850} distance={36}>
            <div className="gallery-grid">
              {images.map((image, index) => (
                <RevealOnScroll
                  key={index}
                  delay={index * 120}
                  duration={700}
                  distance={24}
                >
                  <div className="gallery-item image-frame small-gallery-item">
                    <img
                      src={image}
                      alt={`Ambiente de acolhimento ${index + 1}`}
                      className="section-image"
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}