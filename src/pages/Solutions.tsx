import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const solutionItems = ["Home Automation", "Energy Efficiency", "Smart Security"];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Smart home solutions for modern living
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {solutionItems.map((item) => (
                <div key={item} className="card-premium rounded-2xl p-10">
                  <h2 className="text-xl font-bold tracking-tight text-foreground">{item}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FeaturesSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Solutions;