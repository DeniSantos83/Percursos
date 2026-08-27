import RevealOnScroll from "../components/RevealOnScroll";

const issues = [
  "Ansiedade e sofrimento emocional",
  "Luto e perdas",
  "Relacionamentos e conflitos familiares",
  "Questões afetivas",
  "Autoconhecimento",
  "Mudanças e momentos de transição",
  "Questões relacionadas à adolescência",
  "Dificuldades profissionais",
  "Outros conflitos e sofrimentos que atravessam a experiência de cada pessoa",
];

export default function IssuesSection() {
  return (
    <section id="questoes" className="section issues-section">
      <div className="container">
        <RevealOnScroll delay={0} duration={800} distance={32}>
          <div className="issues-heading">
            <p className="badge">psicoterapia</p>

            <h2 className="title-lg section-title-limit">
              Questões que podem fazer parte do processo
            </h2>

            <p className="text issues-intro">
              A psicoterapia pode ser um espaço de escuta e elaboração para
              diferentes momentos e questões da vida, como:
            </p>
          </div>
        </RevealOnScroll>

        <div className="issues-grid">
          {issues.map((issue, index) => (
            <RevealOnScroll
              key={issue}
              delay={index * 70}
              duration={700}
              distance={24}
            >
              <article className="issue-card">
                <span className="issue-marker" aria-hidden="true" />
                <p>{issue}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
