import aboutImage from "../assets/images/sobre.jpg";

export default function AboutSection() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="card-photo about-photo image-frame reveal">
            <img src={aboutImage} alt="Sobre Taise Brasil" className="section-image" />
          </div>
          <div className="reveal reveal-delay-1">   
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

            <a
              href="https://wa.me/5579991160780?text=Olá%20Taise,%20gostaria%20de%20agendar%20uma%20conversa."
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Agendar uma conversa
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}