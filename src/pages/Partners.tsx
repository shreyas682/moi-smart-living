import Navbar from "@/components/Navbar";
import PartnersSection from "@/components/PartnersSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Partner With MOI Technologies
            </h1>
            <p className="text-muted-foreground mb-8">We collaborate with developers and businesses</p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded-lg btn-primary-cyan text-base font-bold tracking-tight transition-transform hover:scale-105"
            >
              Become a Partner
            </a>
          </div>
        </section>
        <PartnersSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Partners;