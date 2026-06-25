import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WirelessControlSection from "@/components/WirelessControlSection";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorksSection from "@/components/HowItWorksSection";
import MoiSpaceSection from "@/components/MoiSpaceSection";
import FeaturesSection from "@/components/FeaturesSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WirelessControlSection />
      <ProductShowcase />
      <HowItWorksSection />
      <MoiSpaceSection />
      <FeaturesSection />
      <PartnersSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
