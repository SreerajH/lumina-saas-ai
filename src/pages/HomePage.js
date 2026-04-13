import HeroSection from '../components/sections/HeroSection';
import LogosSection from '../components/sections/LogosSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PricingSection from '../components/sections/PricingSection';
import FaqSection from '../components/sections/FaqSection';
import CtaBanner from '../components/sections/CtaBanner';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
    </main>
  );
}

export default HomePage;
