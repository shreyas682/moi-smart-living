import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Home as HomeIcon, Coffee, Store, Building2 } from "lucide-react";

const solutionItems = [
  {
    icon: HomeIcon,
    title: "Smart Homes",
    description: "Lighting scenes that match your mood, from one app.",
  },
  {
    icon: Coffee,
    title: "Cafes & Restaurants",
    description: "Ambience that changes with your service hours.",
  },
  {
    icon: Store,
    title: "Boutiques & Retail",
    description: "Accent and window lighting — controlled like a campaign.",
  },
  {
    icon: Building2,
    title: "Offices",
    description: "Productive spaces, retrofitted with zero rewiring.",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-6 bg-soft-orange">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Lighting use cases for <span className="text-primary">modern spaces</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Designed for homes, cafes, boutiques and offices — installed in hours.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {solutionItems.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white rounded-2xl p-10 text-left border border-border shadow-sm hover:-translate-y-2 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon size={26} strokeWidth={1.8} />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <SolutionsShowcase />
        <FeaturesSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Solutions;