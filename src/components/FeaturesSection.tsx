import { Cpu, Wifi, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Control your lights, switches, and devices from anywhere.",
  },
  {
    icon: Wifi,
    title: "Wireless Installation",
    description: "No complex rewiring required.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Smart control helps reduce electricity usage.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Technology",
    description: "Reliable and safe smart home connectivity.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Why Choose <span className="text-gradient-blue">MOI</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Smart technology designed for modern living.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group card-neon rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
