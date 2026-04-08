import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import CareSection from "./sections/CareSection";
import Footer from "./components/Footer";
import RevealOnScroll from "./components/RevealOnScroll";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CareSection />
      <RevealOnScroll delay={120} duration={800} distance={28}>
        <Footer />
      </RevealOnScroll>
      <WhatsAppButton />
    </div>
  );
}