import { motion, useInView } from "framer-motion";
import { Cpu, Zap, Cloud, Wrench, Brain, Shield } from "lucide-react";
import { useRef, useState, useEffect } from "react";

/* ── Animated counter ── */
const useCounter = (target: number, duration = 1800) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = Math.ceil(duration / 16);
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
};

const StatCounter = ({
  target,
  suffix,
  label,
  icon,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  icon: string;
  delay: number;
}) => {
  const { count, ref } = useCounter(target);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 mb-4 text-2xl group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tighter">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground mt-2 font-medium">{label}</div>
    </motion.div>
  );
};

/* ── Feature cards ── */
const features = [
  {
    Icon: Cpu,
    title: "Smart Integration",
    description:
      "Works seamlessly with Alexa, Google Home, Apple HomeKit, and all major smart home platforms out of the box.",
    colorClass: "bg-blue-50 text-blue-500 border-blue-100 group-hover:bg-blue-500",
  },
  {
    Icon: Zap,
    title: "Energy Efficient",
    description:
      "Advanced scheduling and real-time monitoring reduces energy consumption by up to 47% on average.",
    colorClass: "bg-yellow-50 text-yellow-500 border-yellow-100 group-hover:bg-yellow-500",
  },
  {
    Icon: Cloud,
    title: "Cloud Control",
    description:
      "Manage your entire automation ecosystem from anywhere in the world with sub-second response times.",
    colorClass: "bg-sky-50 text-sky-500 border-sky-100 group-hover:bg-sky-500",
  },
  {
    Icon: Wrench,
    title: "Easy Installation",
    description:
      "No rewiring required. Our retrofit technology works with existing wiring in any home or commercial space.",
    colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100 group-hover:bg-emerald-500",
  },
  {
    Icon: Brain,
    title: "AI Scheduling",
    description:
      "On-device machine learning adapts to your lifestyle and automatically optimises settings over time.",
    colorClass: "bg-purple-50 text-purple-500 border-purple-100 group-hover:bg-purple-500",
  },
  {
    Icon: Shield,
    title: "Enterprise Security",
    description:
      "AES-256 encryption and zero-trust architecture protect your network and every connected device.",
    colorClass: "bg-red-50 text-red-500 border-red-100 group-hover:bg-red-500",
  },
];

const FeaturesSection = () => {
  return (
    <section id="why-moi" className="py-28 px-6 bg-white">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5">
            Why MOI Technologies
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Built for the Future of{" "}
            <span className="text-gradient-cyan">Smart Living</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Enterprise engineering meets consumer simplicity — the perfect balance
            for any smart space.
          </p>
        </motion.div>

        {/* Stats counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 max-w-4xl mx-auto">
          <StatCounter target={500} suffix="+" label="Installations Completed" icon="🏠" delay={0} />
          <StatCounter target={98} suffix="%" label="Client Satisfaction Rate" icon="⭐" delay={0.12} />
          <StatCounter target={50} suffix="+" label="Cities Served" icon="🌍" delay={0.24} />
          <StatCounter target={24} suffix="/7" label="Expert Support" icon="🛡️" delay={0.36} />
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, title, description, colorClass }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group card-premium rounded-2xl p-8 cursor-default"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border mb-5 transition-all duration-300 [&>svg]:transition-colors [&>svg]:duration-300 group-hover:[&>svg]:text-white ${colorClass}`}
              >
                <Icon size={26} strokeWidth={1.6} />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-foreground mb-2.5">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
