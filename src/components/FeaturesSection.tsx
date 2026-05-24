import { motion } from "framer-motion";
import { Lightbulb, Wifi, Leaf, ShieldCheck } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Lightbulb,
    title: "Lighting-First Design",
    description: "Engineered around real lighting needs — not generic IoT.",
  },
  {
    icon: Wifi,
    title: "Wireless Retrofit",
    description: "Install in hours, in any existing space. No rewiring.",
  },
  {
    icon: Leaf,
    title: "Energy Efficient",
    description: "Schedules and scenes that quietly cut power use.",
  },
  {
    icon: ShieldCheck,
    title: "Works with Moi Space",
    description: "Controlled by Moi Space — our purpose-built lighting app.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white border border-border rounded-2xl p-8 text-center overflow-hidden cursor-default shadow-sm hover:-translate-y-2 hover:border-primary hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      {/* Radial gradient follow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, hsl(26 100% 50% / 0.08), transparent 60%)`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center h-full">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
          <feature.icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">{feature.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="solutions" className="py-28 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-28" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Why Choose <span className="text-gradient-cyan">MOI Technologies?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Premium smart lighting, engineered for design-conscious spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
