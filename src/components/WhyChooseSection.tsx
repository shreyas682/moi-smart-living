import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Cloud, Mic, Smartphone, Wifi, ShieldCheck, Cpu } from "lucide-react";

const stats = [
  { value: 50000, suffix: "+", label: "Devices Deployed" },
  { value: 1200, suffix: "+", label: "Spaces Automated" },
  { value: 99.9, suffix: "%", label: "Platform Uptime", decimals: 1 },
  { value: 250, suffix: "+", label: "Channel Partners" },
];

const integrations = [
  { icon: Wifi, label: "WiFi" },
  { icon: Cloud, label: "Cloud" },
  { icon: Mic, label: "Voice" },
  { icon: Smartphone, label: "App" },
  { icon: Cpu, label: "Sensors" },
  { icon: ShieldCheck, label: "Security" },
];

const Counter = ({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {decimals ? n.toFixed(decimals) : Math.floor(n).toLocaleString()}
      {suffix}
    </span>
  );
};

const WhyChooseSection = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Why Choose <span className="text-gradient-cyan">MOI Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade automation, built to scale across rooms, buildings, and brands.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium rounded-2xl p-6 md:p-8 text-center"
            >
              <div className="text-3xl md:text-5xl font-extrabold tracking-tighter text-gradient-cyan mb-2">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Smart integrations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {integrations.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card flex items-center justify-center text-primary group-hover:glow-orange group-hover:-translate-y-1 transition-all duration-300">
                  <it.icon size={28} strokeWidth={1.6} />
                </div>
                <span className="text-xs text-muted-foreground">{it.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
