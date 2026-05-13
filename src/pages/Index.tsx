import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WirelessControlSection from "@/components/WirelessControlSection";
import EcosystemSection from "@/components/EcosystemSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WirelessControlSection />
      <ProductShowcase />
      <EcosystemSection />
      <FeaturesSection />
      <PartnersSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
