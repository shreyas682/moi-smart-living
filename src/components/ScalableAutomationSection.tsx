import { motion } from "framer-motion";
import { DoorOpen, Building2, Cloud, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: DoorOpen,
    title: "Single Room",
    description: "Start with one switch, sensor, or controller. Plug-and-play setup in minutes.",
  },
  {
    icon: Building2,
    title: "Full Building",
    description: "Modular infrastructure scales to every floor, suite, and zone — no rewiring.",
  },
  {
    icon: Cloud,
    title: "Cloud Network",
    description: "Centralized control across locations with secure cloud-based management.",
  },
];

const ScalableAutomationSection = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden bg-soft-orange">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Scalable <span className="text-gradient-cyan">Automation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a single room to a connected enterprise — grow at your pace, without redoing infrastructure.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-stretch">
          <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none" />

          {stages.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="card-premium rounded-3xl p-8 md:p-10 h-full text-center relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 glow-orange">
                  <s.icon size={30} strokeWidth={1.6} />
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                  Stage 0{i + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
              {i < stages.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-primary text-primary-foreground items-center justify-center glow-orange">
                  <ArrowRight size={16} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalableAutomationSection;
