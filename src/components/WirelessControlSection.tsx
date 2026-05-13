import { motion } from "framer-motion";
import { CableOff, Cpu, Smartphone } from "lucide-react";

const items = [
  {
    icon: CableOff,
    title: "No Extra Wiring",
    description:
      "Install lighting and switches without rewiring or adding control panels.",
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description:
      "Schedules, scenes, and sensors keep your space adaptive and intelligent.",
  },
  {
    icon: Smartphone,
    title: "App & Voice Control",
    description:
      "Control everything from your phone or with Alexa, Google, and Siri.",
  },
];

const WirelessControlSection = () => {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
            Wireless Smart Control
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.05] mb-6">
            Wireless Smart Control for{" "}
            <span className="text-gradient-cyan">Modern Spaces</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Control lighting, switches, sensors, and automation devices without
            complex wiring or expensive control systems.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-start gap-5 p-7 rounded-2xl bg-white border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
            >
              <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WirelessControlSection;