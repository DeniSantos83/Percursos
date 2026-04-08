import aboutImage from "../assets/images/sobre.jpg";
import RevealOnScroll from "../components/RevealOnScroll";

export default function AboutSection() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="about-grid">
          <RevealOnScroll delay={0} duration={800} distance={32}>
            <div className="card-photo about-photo image-frame">
              <img src={aboutImage} alt="Sobre Taise Brasil" className="section-image" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120} duration={850} distance={36}>
            <div>
              <p className="badge">sobre mim</p>

              <h2 className="title-lg">
                Um cuidado clínico comprometido com a escuta e com a singularidade.
              </h2>

              <p className="text mb-18">
                Sou <strong>Taise Brasil (CRP 19/4957)</strong>, psicóloga de orientação
                psicanalítica. Atuo com adolescentes, adultos e idosos em uma prática
                clínica sustentada pela ética, pelo acolhimento e pelo respeito ao tempo
                de cada sujeito.
              </p>

              <p className="text mb-28">
                Também realizo avaliações psicológicas e sigo em formação contínua em
                psicanálise e saúde mental, buscando oferecer um trabalho sério, humano
                e sensível.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}