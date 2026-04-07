import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import CareSection from "./sections/CareSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CareSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}