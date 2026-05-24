import { motion } from "framer-motion";
import { Palette, Calendar, Layers, Smartphone, Sun, Moon, Coffee, Lightbulb, Clock, Globe, Users } from "lucide-react";

const features = [
  { icon: Lightbulb, label: "Design lighting scenes room by room" },
  { icon: Clock, label: "Set schedules that run automatically" },
  { icon: Globe, label: "Control from anywhere" },
  { icon: Users, label: "Multi-user access for staff or family" },
];

const PhoneMockup = ({ tone = "warm", label = "Scene Control" }: { tone?: "warm" | "cool"; label?: string }) => (
  <div className="relative w-[180px] md:w-[210px] aspect-[9/19] rounded-[2.2rem] bg-[hsl(0_0%_10%)] border border-white/10 shadow-[0_30px_60px_-20px_hsl(28_100%_50%/0.4)] p-2">
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black z-10" />
    <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-gradient-to-br from-[hsl(0_0%_8%)] to-[hsl(0_0%_4%)]">
      <div
        className={`absolute inset-0 ${
          tone === "warm"
            ? "bg-[radial-gradient(circle_at_30%_20%,hsl(28_100%_55%/0.3),transparent_60%)]"
            : "bg-[radial-gradient(circle_at_70%_20%,hsl(200_80%_55%/0.25),transparent_60%)]"
        }`}
      />
      <div className="relative p-4 pt-10 text-white h-full flex flex-col gap-3">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Moi Space</p>
          <p className="text-sm font-bold text-primary">{label}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {[
            { i: Sun, n: "Bright" },
            { i: Moon, n: "Sleep" },
            { i: Coffee, n: "Morning" },
            { i: Palette, n: "Scene" },
          ].map((s, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white/5 border border-white/10 p-2 flex flex-col items-start gap-1"
            >
              <s.i size={14} className="text-primary" />
              <span className="text-[10px] text-white/80">{s.n}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-xl bg-white/5 border border-white/10 p-2">
          <p className="text-[9px] text-white/40 mb-1">Brightness</p>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-2/3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MoiSpaceSection = () => {
  return (
    <section id="moi-space" className="py-28 px-6 bg-[hsl(0_0%_7%)] text-white relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-5">
            <Smartphone size={14} /> Moi Space
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.02] mb-6">
            One App. <span className="text-gradient-cyan">Total Control.</span>
          </h2>
          <div className="grid grid-cols-1 gap-3 max-w-md mb-6">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <f.icon size={16} />
                </div>
                <span className="text-sm font-medium text-white">{f.label}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/50">Available on iOS &amp; Android — download coming soon</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-center gap-4 md:gap-6 order-first lg:order-last"
        >
          <div className="translate-y-6">
            <PhoneMockup tone="warm" label="Scene Control" />
          </div>
          <div>
            <PhoneMockup tone="cool" label="Schedule View" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoiSpaceSection;