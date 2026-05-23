import { motion } from "framer-motion";
import { PencilRuler, Wrench, Smartphone } from "lucide-react";

const steps = [
  {
    icon: PencilRuler,
    step: "01",
    title: "Design your space",
    desc: "Work with your designer or our lighting team to map scenes, zones and fixtures.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "We install in hours",
    desc: "No rewiring. No control panels. A clean retrofit into your existing space.",
  },
  {
    icon: Smartphone,
    step: "03",
    title: "Control from Moi Space",
    desc: "Scenes, schedules and zones — all from one purpose-built lighting app.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-28 px-6 bg-warm-gray">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            From sketch to scene — in three steps
          </h2>
          <p className="text-muted-foreground">
            Premium smart lighting, delivered without the install chaos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
                  <s.icon size={26} strokeWidth={1.6} />
                </div>
                <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                  STEP {s.step}
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;