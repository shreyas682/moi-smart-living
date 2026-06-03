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
    eyebrow: "Homes",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    imageAlt: "Warmly lit modern living room with pendant and accent lighting",
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
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    imageAlt: "Cozy cafe interior with warm Edison bulb string lights",
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
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800",
    imageAlt: "Boutique store with focused accent spotlights on clothing displays",
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
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    imageAlt: "Bright modern office with clean overhead lighting and warm workstation lamps",
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

const LifestyleImage = ({ src, alt, eyebrow }: { src: string; alt: string; eyebrow: string }) => (
  <div className="relative w-full aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden bg-[#1A1A1A] shadow-[0_30px_80px_-30px_hsl(0_0%_0%/0.5)]">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
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
                <LifestyleImage src={s.image} alt={s.imageAlt} eyebrow={s.eyebrow} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;