import { motion } from "framer-motion";
import { Cable, Lightbulb, Smartphone } from "lucide-react";

const items = [
  {
    icon: Cable,
    title: "No Rewiring",
    description:
      "Retrofit smart lighting into any space without tearing down walls or wiring.",
  },
  {
    icon: Lightbulb,
    title: "Scenes & Schedules",
    description:
      "Design lighting moods for every hour, room and occasion — automated.",
  },
  {
    icon: Smartphone,
    title: "One Lighting App",
    description:
      "Control every fixture, zone and scene from Moi Space — our purpose-built app.",
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
            Design-Grade Smart Lighting
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.05] mb-6">
            Wireless lighting for{" "}
            <span className="text-gradient-cyan">modern spaces</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Control fixtures, strips and switches across your space — without rewiring, control panels or DIY complexity.
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