import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import DetailedFeaturesSection from "@/components/sections/DetailedFeaturesSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <DetailedFeaturesSection />
      <PricingSection />
      <CTASection />
    </div>
  );
};

export default Index;