import { Cpu, Wifi, Home } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Smart Integration",
    description: "Works with Alexa, Google Home, and Apple HomeKit.",
  },
  {
    icon: Wifi,
    title: "Wireless Technology",
    description: "Easy installation without rewiring homes.",
  },
  {
    icon: Home,
    title: "Modern Smart Living",
    description: "Designed for future-ready automated homes.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="solutions" className="py-24 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Why Choose <span className="text-gradient-blue">MOI Technologies?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Smart technology designed for modern living.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group card-neon rounded-xl p-10 text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                <f.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
