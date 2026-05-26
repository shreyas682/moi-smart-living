import { motion } from "framer-motion";
import {
  Home,
  Coffee,
  Store,
  Building2,
  Lightbulb,
  Sparkles,
  Calendar,
  Palette,
  Music2,
  Sun,
  Layers,
  Users,
  Zap,
  Eye,
} from "lucide-react";

const solutions = [
  {
    id: "home",
    eyebrow: "Smart Homes",
    icon: Home,
    scene: "Evening Scene",
    brightness: 55,
    temp: "warm" as const,
    scenePresets: ["Morning", "Evening", "Movie"],
    activeScene: "Evening",
    title: "Lighting scenes that match your mood",
    description:
      "Warm dinners, focused work, lazy Sundays — one tap reshapes every room.",
    features: [
      { icon: Lightbulb, label: "Room-by-room scenes" },
      { icon: Sun, label: "Tunable white & RGB" },
      { icon: Calendar, label: "Sunrise & schedule automations" },
      { icon: Sparkles, label: "Designer-friendly presets" },
    ],
  },
  {
    id: "cafe",
    eyebrow: "Cafes & Restaurants",
    icon: Coffee,
    scene: "Golden Hour",
    brightness: 70,
    temp: "warm" as const,
    scenePresets: ["Morning", "Golden Hour", "Late Night"],
    activeScene: "Golden Hour",
    title: "Ambience that changes with your hours",
    description:
      "Bright mornings, golden evenings, late-night low — automated to your service hours.",
    features: [
      { icon: Sun, label: "Day-to-night transitions" },
      { icon: Music2, label: "Lighting tuned to playlists" },
      { icon: Zap, label: "Auto on/off by schedule" },
      { icon: Layers, label: "Zone-based control" },
    ],
  },
  {
    id: "retail",
    eyebrow: "Boutiques & Retail",
    icon: Store,
    scene: "Window Display",
    brightness: 85,
    temp: "neutral" as const,
    scenePresets: ["Open", "Window", "Closing"],
    activeScene: "Window",
    title: "Lighting that sells",
    description:
      "Accent fixtures, product spotlights and window scenes — controlled like a campaign.",
    features: [
      { icon: Eye, label: "Product accent lighting" },
      { icon: Palette, label: "Brand color scenes" },
      { icon: Calendar, label: "Window scene scheduling" },
      { icon: Layers, label: "Multi-zone control" },
    ],
  },
  {
    id: "office",
    eyebrow: "Offices",
    icon: Building2,
    scene: "Focus Mode",
    brightness: 90,
    temp: "cool" as const,
    scenePresets: ["Focus", "Meeting", "After Hours"],
    activeScene: "Focus",
    title: "Productive spaces, zero wiring chaos",
    description:
      "Retrofit lighting into any office floor without rewiring or shutdown.",
    features: [
      { icon: Users, label: "Meeting room presets" },
      { icon: Sun, label: "Daylight-aware dimming" },
      { icon: Layers, label: "Floor & zone control" },
      { icon: Zap, label: "Energy-efficient schedules" },
    ],
  },
];

type TempKey = "warm" | "neutral" | "cool";

const tempColors: Record<TempKey, string> = {
  warm: "hsl(32 100% 65%)",
  neutral: "hsl(45 35% 88%)",
  cool: "hsl(210 80% 85%)",
};

const AppMockup = ({
  eyebrow,
  scene,
  brightness,
  temp,
  scenePresets,
  activeScene,
}: {
  eyebrow: string;
  scene: string;
  brightness: number;
  temp: TempKey;
  scenePresets: string[];
  activeScene: string;
}) => (
  <div className="relative w-full rounded-3xl bg-[#1A1A1A] p-8 md:p-12 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(26_100%_50%/0.18),transparent_60%)] pointer-events-none" />
    <div className="relative w-[260px] md:w-[290px] aspect-[9/19] rounded-[2.4rem] bg-black border border-white/10 shadow-[0_30px_80px_-20px_hsl(0_0%_0%/0.8)] p-2">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black z-10 border border-white/10" />
      <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#161616] to-[#0a0a0a] px-5 pt-9 pb-5 flex flex-col">
        {/* Status row */}
        <div className="flex items-center justify-between text-[9px] text-white/40 mb-4">
          <span>9:41</span>
          <span className="tracking-[0.2em]">MOI SPACE</span>
          <span>100%</span>
        </div>

        {/* Header */}
        <p className="text-[10px] tracking-[0.25em] text-primary uppercase font-semibold mb-1">
          {eyebrow}
        </p>
        <p className="text-white text-lg font-bold leading-tight mb-5">{scene}</p>

        {/* Brightness slider */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] uppercase tracking-[0.18em] text-white/40">Brightness</span>
            <span className="text-[10px] text-white font-semibold">{brightness}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-primary shadow-[0_0_10px_hsl(26_100%_50%/0.8)]"
              style={{ width: `${brightness}%` }}
            />
          </div>
        </div>

        {/* Color temperature */}
        <div className="mb-5">
          <p className="text-[9px] uppercase tracking-[0.18em] text-white/40 mb-2">Temperature</p>
          <div className="flex items-center gap-3">
            {(["warm", "neutral", "cool"] as TempKey[]).map((t) => {
              const isActive = t === temp;
              return (
                <div
                  key={t}
                  className={`relative w-7 h-7 rounded-full transition-all ${
                    isActive ? "ring-2 ring-primary ring-offset-2 ring-offset-[#0a0a0a]" : ""
                  }`}
                  style={{ backgroundColor: tempColors[t] }}
                />
              );
            })}
          </div>
        </div>

        {/* Scene presets */}
        <p className="text-[9px] uppercase tracking-[0.18em] text-white/40 mb-2">Scenes</p>
        <div className="grid grid-cols-3 gap-1.5 mt-auto">
          {scenePresets.map((sp) => {
            const isActive = sp === activeScene;
            return (
              <div
                key={sp}
                className={`rounded-lg px-1.5 py-2 text-center border ${
                  isActive
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-white/10 bg-white/[0.03] text-white/60"
                }`}
              >
                <span className="text-[8.5px] font-semibold tracking-tight leading-tight">
                  {sp}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const SolutionsShowcase = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Lighting for every kind of space
          </h2>
          <p className="text-muted-foreground">
            Premium smart lighting for homes, cafes, boutiques and offices — retrofitted in hours.
          </p>
        </motion.div>

        <div className="space-y-24">
          {solutions.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-5">
                    {s.eyebrow}
                  </p>
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
                <AppMockup
                  eyebrow={s.eyebrow}
                  scene={s.scene}
                  brightness={s.brightness}
                  temp={s.temp}
                  scenePresets={s.scenePresets}
                  activeScene={s.activeScene}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;