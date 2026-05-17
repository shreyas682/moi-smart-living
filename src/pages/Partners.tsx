import Navbar from "@/components/Navbar";
import PartnersUpgradeSection from "@/components/PartnersUpgradeSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <PartnersUpgradeSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Partners;