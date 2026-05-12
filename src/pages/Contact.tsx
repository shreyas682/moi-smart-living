import Navbar from "@/components/Navbar";
import PremiumContactSection from "@/components/PremiumContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <PremiumContactSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;