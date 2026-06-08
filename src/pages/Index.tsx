import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WirelessControlSection from "@/components/WirelessControlSection";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorksSection from "@/components/HowItWorksSection";
import MoiSpaceSection from "@/components/MoiSpaceSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScalableAutomationSection from "@/components/ScalableAutomationSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WirelessControlSection />
      <ProductShowcase />
      <HowItWorksSection />
      <MoiSpaceSection />
      <FeaturesSection />
      <ScalableAutomationSection />
      <PartnersSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
