import Navbar from "@/components/Navbar";
import PartnersUpgradeSection from "@/components/PartnersUpgradeSection";
import FooterSection from "@/components/FooterSection";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <PartnersUpgradeSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Partners;