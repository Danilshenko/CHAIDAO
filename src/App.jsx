import Navbar from "./components/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import CollectionSection from "./sections/CollectionSection.jsx";
import PhilosophySection from "./sections/PhilosophySection.jsx";
import BenefitsSection from "./sections/BenefitsSection.jsx";
import TestimonialsSection from "./sections/TestimonialsSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <HeroSection />
        <CollectionSection />
        <PhilosophySection />
        <BenefitsSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
    </div>
  );
}
