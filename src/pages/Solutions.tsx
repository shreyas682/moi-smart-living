import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import FooterSection from "@/components/FooterSection";
import {
  Home as HomeIcon,
  Coffee,
  Store,
  Building2,
  Hotel,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const solutionItems = [
  {
    icon: HomeIcon,
    title: "Homes",
    description: "Automate mood lighting for living rooms, bedrooms, entrances. No rewiring.",
    href: "#home",
  },
  {
    icon: Coffee,
    title: "Cafes & Restaurants",
    description: "Auto-set ambiance for breakfast, lunch, dinner service.",
    href: "#cafe",
  },
  {
    icon: Store,
    title: "Boutiques & Retail",
    description: "Highlight products with precision lighting that adapts to time of day.",
    href: "#retail",
  },
  {
    icon: Building2,
    title: "Offices & Coworking",
    description: "Improve focus with tunable white lighting across work zones.",
    href: "#office",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    description: "Scene-based room lighting for premium guest experience.",
    href: "/contact",
  },
  {
    icon: Sparkles,
    title: "Salons & Spas",
    description: "Warm, dimmable light zones for calm professional atmosphere.",
    href: "/contact",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-6 bg-white">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Built for <span className="text-primary">your space</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Designed for homes, cafes, boutiques and offices — installed in hours.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
              {solutionItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group bg-white rounded-2xl p-10 text-left border border-border border-b-2 shadow-sm hover:-translate-y-2 hover:border-b-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon size={26} strokeWidth={1.8} />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className="bg-[hsl(36_25%_97%)]">
          <SolutionsShowcase />
        </div>
        <FeaturesSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Solutions;