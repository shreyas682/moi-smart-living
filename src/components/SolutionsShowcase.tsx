import { motion } from "framer-motion";
import {
  Home,
  Coffee,
  Hotel,
  Building2,
  Lightbulb,
  Mic,
  Thermometer,
  ShieldCheck,
  Music2,
  Zap,
  Sparkles,
  Wind,
  BedDouble,
  Activity,
  Users,
  Cpu,
} from "lucide-react";

const solutions = [
  {
    id: "home",
    eyebrow: "Smart Homes",
    icon: Home,
    title: "A home that responds to you",
    description:
      "Centralized lighting, climate, security and voice — orchestrated from one premium mobile app.",
    features: [
      { icon: Lightbulb, label: "Smart lighting & scenes" },
      { icon: Mic, label: "Voice & app control" },
      { icon: Thermometer, label: "Climate automation" },
      { icon: ShieldCheck, label: "Security automation" },
    ],
    accent: "from-primary/15 via-primary/5 to-transparent",
  },
  {
    id: "cafe",
    eyebrow: "Smart Cafes",
    icon: Coffee,
    title: "Ambience tuned for every hour",
    description:
      "Mood lighting, music sync and energy-saving zones — controlled from a single cafe dashboard.",
    features: [
      { icon: Sparkles, label: "Mood lighting zones" },
      { icon: Music2, label: "Music synchronization" },
      { icon: Zap, label: "Energy-saving automation" },
      { icon: Cpu, label: "Centralized controls" },
    ],
    accent: "from-amber-400/15 via-primary/5 to-transparent",
  },
  {
    id: "hotel",
    eyebrow: "Smart Hotels",
    icon: Hotel,
    title: "Guest experiences, automated",
    description:
      "Occupancy-aware rooms, scene presets and floor-wide dashboards for premium hospitality brands.",
    features: [
      { icon: BedDouble, label: "Guest room scenes" },
      { icon: Wind, label: "Curtains & AC control" },
      { icon: Activity, label: "Occupancy automation" },
      { icon: Cpu, label: "Centralized management" },
    ],
    accent: "from-sky-400/15 via-primary/5 to-transparent",
  },
  {
    id: "office",
    eyebrow: "Smart Offices",
    icon: Building2,
    title: "Workspaces that work smarter",
    description:
      "Meeting-room automation, floor-wise controls and enterprise IoT management at scale.",
    features: [
      { icon: Users, label: "Meeting room automation" },
      { icon: Activity, label: "Occupancy sensing" },
      { icon: Lightbulb, label: "Lighting & AC zones" },
      { icon: Cpu, label: "Enterprise IoT management" },
    ],
    accent: "from-emerald-400/15 via-primary/5 to-transparent",
  },
];

const IsoVisual = ({ Icon }: { Icon: typeof Home }) => (
  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-secondary to-white">
    {/* Grid floor */}
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 0% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 0% / 0.05) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        transform: "perspective(700px) rotateX(55deg) translateY(20%) scale(1.4)",
        transformOrigin: "center",
      }}
    />
    {/* Glow nodes */}
    <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-primary/30 blur-2xl animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-primary/20 blur-3xl" />
    {/* Floating UI card */}
    <div className="absolute top-5 right-5 px-3 py-2 rounded-lg bg-white/90 backdrop-blur border border-border shadow-md flex items-center gap-2 text-xs font-medium text-foreground">
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      Live • 4 devices
    </div>
    {/* Center icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl" />
        <div className="relative w-24 h-24 rounded-2xl bg-white border border-border shadow-xl flex items-center justify-center text-primary">
          <Icon size={44} strokeWidth={1.6} />
        </div>
      </div>
    </div>
    {/* Connection lines */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
      <path
        d="M 80 80 Q 200 30 320 80"
        stroke="hsl(26 100% 50% / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M 80 220 Q 200 270 320 220"
        stroke="hsl(26 100% 50% / 0.4)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
    </svg>
  </div>
);

const SolutionsShowcase = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            IoT Automation Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Built for every kind of space
          </h2>
          <p className="text-muted-foreground">
            One platform powering homes, cafes, hotels and offices — with the same premium experience.
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-5">
                    <s.icon size={14} />
                    {s.eyebrow}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                    {s.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.features.map((f) => (
                      <div
                        key={f.label}
                        className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <f.icon size={18} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div
                    className={`absolute -inset-6 rounded-3xl bg-gradient-to-br ${s.accent} blur-2xl pointer-events-none`}
                  />
                  <div className="relative">
                    <IsoVisual Icon={s.icon} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;