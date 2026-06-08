import Navbar from "@/components/Navbar";
import PartnersUpgradeSection from "@/components/PartnersUpgradeSection";
import BecomePartnerForm from "@/components/BecomePartnerForm";
import FooterSection from "@/components/FooterSection";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <PartnersUpgradeSection />
        <BecomePartnerForm />
      </main>
      <FooterSection />
    </div>
  );
};

export default Partners;