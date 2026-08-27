import atendimento1 from "../assets/images/atendimento1.jpg";
import atendimento2 from "../assets/images/atendimento2.jpg";
import atendimento3 from "../assets/images/atendimento3.jpg";
import atendimento4 from "../assets/images/atendimento4.jpg";
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

              <p className="text mb-18">
                O primeiro contato é feito pelo WhatsApp, onde apresento as informações
                iniciais sobre o atendimento, valores e disponibilidade de horários.
              </p>

              <p className="text mb-18">
                A primeira sessão é dedicada à escuta da demanda e à construção do primeiro
                contato com o processo terapêutico. A partir dela, frequência e formato das
                sessões seguintes são definidos de acordo com cada caso e com a condução clínica.
              </p>

              <ul className="list mb-28">
                <li><strong>Presencial:</strong> Aracaju (SE)</li>
                <li><strong>Online:</strong> videochamada, para outras localidades</li>
              </ul>

              <p className="text mb-28">
                Para saber mais ou agendar uma consulta, envie uma mensagem pelo WhatsApp.
              </p>

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
                <RevealOnScroll key={index} delay={index * 120} duration={700} distance={24}>
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
