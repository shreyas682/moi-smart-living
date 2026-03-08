import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import SmartSolutionsSection from "@/components/SmartSolutionsSection";
import AboutSection from "@/components/AboutSection";
import PartnerBannerSection from "@/components/PartnerBannerSection";
import PartnerFormSection from "@/components/PartnerFormSection";
import ResourcesSection from "@/components/ResourcesSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <SmartSolutionsSection />
      <AboutSection />
      <PartnerBannerSection />
      <PartnerFormSection />
      <ResourcesSection />
      <CTASection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
