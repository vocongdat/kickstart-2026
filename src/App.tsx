import { ParticleField } from '@/components/ParticleField';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { FeaturesSection } from '@/sections/FeaturesSection';
import { TimelineSection } from '@/sections/TimelineSection';
import { StatsSection } from '@/sections/StatsSection';
import { PricingSection } from '@/sections/PricingSection';
import { FAQSection } from '@/sections/FAQSection';
import { CTASection } from '@/sections/CTASection';

function App() {
  return (
    <div className="relative min-h-screen animated-gradient overflow-x-hidden">
      {/* Background effects */}
      <ParticleField />
      <div className="grid-pattern fixed inset-0 pointer-events-none z-0 opacity-40" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <TimelineSection />
        <StatsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
