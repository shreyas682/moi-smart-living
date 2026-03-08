import { Home, Award, TrendingUp, Headphones } from "lucide-react";

const solutions = [
  {
    icon: Home,
    title: "Most Advanced Smart Home Solution",
    description: "MOI Technologies products are wireless, retrofit and modular and fit seamlessly into modern homes and offices.",
  },
  {
    icon: Award,
    title: "Leading Smart Home Brand",
    description: "MOI Technologies develops innovative automation solutions designed for smart spaces and connected environments.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Support",
    description: "We provide business partners with qualified leads and marketing support to grow their smart automation business.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our technical teams provide training, installation guidance, and long-term support.",
  },
];

const SmartSolutionsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Smart <span className="text-gradient-blue">Solutions</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Comprehensive automation solutions for homes and businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className="flex gap-5 p-6 card-neon rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <s.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartSolutionsSection;
