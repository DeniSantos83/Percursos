export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Primeiro contato",
      text: "Você envia uma mensagem no WhatsApp e compartilha, com tranquilidade, sua dúvida ou necessidade inicial.",
    },
    {
      number: "02",
      title: "Alinhamento",
      text: "Conversamos sobre formato do atendimento, disponibilidade de horários e orientações iniciais.",
    },
    {
      number: "03",
      title: "Início do cuidado",
      text: "A partir daí, o acompanhamento pode começar de forma ética, acolhedora e respeitando o seu tempo.",
    },
  ];

  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <p className="badge">como funciona</p>

        <h2 className="title-lg section-title-limit">
          Um caminho simples, acolhedor e possível para começar.
        </h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`step-card reveal reveal-delay-${index + 1}`}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}