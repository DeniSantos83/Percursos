import aboutImage from "../assets/images/sobre.jpg";
import RevealOnScroll from "../components/RevealOnScroll";

export default function AboutSection() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-block">
            <RevealOnScroll delay={0} duration={800} distance={32}>
            <div className="card-photo about-photo image-frame">
              <img src={aboutImage} alt="Sobre Taise Brasil" className="section-image" />
            </div>
            </RevealOnScroll>
          </div>

          <div className="about-content-block">
          <RevealOnScroll delay={120} duration={850} distance={36}>
            <div>
              <p className="badge">sobre mim</p>

              <h2 className="title-lg">
                Um cuidado clínico comprometido com a escuta e com a singularidade.
              </h2>

              <p className="text mb-18">
                Sou <strong>Taise Brasil, psicóloga clínica de orientação psicanalítica, CRP 19/4957</strong>,
                formada em 2020 pela Universidade Pio Décimo, em Aracaju.
              </p>

              <p className="text mb-18">
                Minha trajetória profissional se construiu na clínica, aliada a uma formação
                contínua em Psicanálise. Atuei em plantão psicológico na referência estadual
                em crises psiquiátricas de Sergipe e em gestão hospitalar. Atualmente, também
                atuo como perita técnica do TRT 17.
              </p>

              <p className="text mb-18">
                Hoje, minha prática clínica é voltada ao atendimento particular de adolescentes,
                adultos e idosos, presencialmente em Aracaju e também online.
              </p>

              <p className="text mb-28">
                Para agendar uma consulta ou tirar dúvidas, fale comigo pelo WhatsApp.
              </p>
            </div>
          </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}