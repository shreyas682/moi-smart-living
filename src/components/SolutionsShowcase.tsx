import { motion } from "framer-motion";
import {
  Home,
  UtensilsCrossed,
  Store,
  Lightbulb,
  Sparkles,
  Calendar,
  Palette,
  Music2,
  Sun,
  Layers,
  Zap,
  Eye,
  ToggleRight,
  Cable,
  Smartphone,
  Grid3x3,
  Clock,
  CircuitBoard,
  Target,
  Wand2,
  Minus,
} from "lucide-react";
import homesImg from "@/assets/homes-warm.jpg.asset.json";
import hospitalityImg from "@/assets/hospitality-cove.jpg.asset.json";
import retailImg from "@/assets/retail-linear.jpg.asset.json";

const solutions = [
  {
    id: "home",
    eyebrow: "HOMES",
    image: homesImg.url,
    imageAlt: "Warmly lit modern living room with cove lighting",
    title: "Lighting scenes that match your mood",
    description:
      "Warm dinners, focused work, lazy Sundays — one tap reshapes every room.",
    features: [
      { icon: Lightbulb, label: "Room-by-room scenes" },
      { icon: Sun, label: "Tunable white & RGB" },
      { icon: Calendar, label: "Sunrise & schedule automations" },
      { icon: Sparkles, label: "Designer-friendly presets" },
    ],
    how: [
      {
        icon: ToggleRight,
        title: "Relay Switch",
        desc: "Replace any existing switch with a Moi relay. No rewiring. Works with existing bulbs instantly.",
      },
      {
        icon: Cable,
        title: "LED Strip Controller",
        desc: "Add warm cove lighting behind false ceilings or under cabinets. CCT tunable from warm white to daylight.",
      },
      {
        icon: Smartphone,
        title: "Moi Space App",
        desc: "Set scenes for morning, dinner, movie night. One tap changes every light simultaneously.",
      },
    ],
  },
  {
    id: "hospitality",
    eyebrow: "HOSPITALITY",
    image: hospitalityImg.url,
    imageAlt: "Restaurant interior with linear cove lighting",
    title: "Ambience that works around your hours",
    description:
      "From morning coffee to late-night dining — lighting that shifts with your service automatically.",
    features: [
      { icon: Sun, label: "Day-to-night transitions" },
      { icon: Zap, label: "Auto on/off by schedule" },
      { icon: Music2, label: "Lighting tuned to playlists" },
      { icon: Layers, label: "Zone-based control" },
    ],
    how: [
      {
        icon: Grid3x3,
        title: "Zone Controller",
        desc: "Divide your space into zones — bar, seating, entrance. Control each independently or together.",
      },
      {
        icon: Clock,
        title: "Schedule Automation",
        desc: "Program lighting to shift across breakfast, lunch, dinner and closing automatically. No staff input needed.",
      },
      {
        icon: CircuitBoard,
        title: "COB Driver",
        desc: "Power high-output ceiling downlights with accurate high CRI output for food and interiors.",
      },
    ],
  },
  {
    id: "retail",
    eyebrow: "RETAIL",
    image: retailImg.url,
    imageAlt: "Retail boutique with linear LED lighting and accent spotlights",
    title: "Lighting that sells",
    description:
      "Accent fixtures, product spotlights and showroom scenes — controlled like a campaign.",
    features: [
      { icon: Eye, label: "Product accent lighting" },
      { icon: Palette, label: "Brand color scenes" },
      { icon: Calendar, label: "Window scene scheduling" },
      { icon: Layers, label: "Multi-zone control" },
    ],
    how: [
      {
        icon: Target,
        title: "Product Accent Lighting",
        desc: "Highlight hero products, mannequins and window displays on a scene schedule.",
      },
      {
        icon: Wand2,
        title: "Brand Scene Control",
        desc: "Save brand-specific lighting scenes and switch instantly from the app.",
      },
      {
        icon: Minus,
        title: "Linear LED Strips",
        desc: "Frame shelves, ceiling perimeters and display niches with clean dimmable linear light.",
      },
    ],
  },
];

const LifestyleImage = ({ src, alt, eyebrow }: { src: string; alt: string; eyebrow: string }) => (
  <div className="relative w-full aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden bg-[#1A1A1A] shadow-[0_30px_80px_-30px_hsl(0_0%_0%/0.5)]">
    <img src={src} alt={alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
      <p className="text-[10px] md:text-xs tracking-[0.25em] text-primary uppercase font-semibold mb-1">
        {eyebrow}
      </p>
      <p className="text-white text-base md:text-lg font-semibold">Real spaces. Real lighting.</p>
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
            Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Lighting for every kind of space
          </h2>
          <p className="text-muted-foreground">
            Premium smart lighting for homes, hospitality and retail — retrofitted in hours.
          </p>
        </motion.div>

        <div className="space-y-28">
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
                className="scroll-mt-28"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
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
                  <LifestyleImage src={s.image} alt={s.imageAlt} eyebrow={s.eyebrow} />
                </div>

                {/* How Moi makes it happen */}
                <div className="mt-12">
                  <h4 className="text-lg md:text-xl font-semibold tracking-tight text-foreground mb-6">
                    How Moi makes it happen
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {s.how.map((h) => (
                      <div
                        key={h.title}
                        className="bg-secondary/40 rounded-2xl p-6"
                      >
                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-4">
                          <h.icon size={20} strokeWidth={1.8} />
                        </div>
                        <h5 className="text-base font-bold tracking-tight text-foreground mb-2">
                          {h.title}
                        </h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {h.desc}
                        </p>
                      </div>
                    ))}
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
