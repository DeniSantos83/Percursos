export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5579991160780?text=Olá%20Taise,%20gostaria%20de%20agendar%20um%20atendimento."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-float"
    >
      <span className="whatsapp-pulse"></span>
      <span className="whatsapp-icon">✆</span>
    </a>
  );
}