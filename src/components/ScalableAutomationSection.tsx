import { motion } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react";

const tiers = [
  {
    step: "01",
    emoji: "🏠",
    title: "Single Room",
    subtitle: "Start Smart",
    description:
      "Begin your automation journey with one room. Smart switches and LED controllers transform any space instantly.",
    features: ["1-tap lighting control", "Mobile app management", "Voice assistant ready"],
    devices: "2 – 5 devices",
    accentClass: "from-orange-50 to-white border-orange-100",
    stepColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    step: "02",
    emoji: "🏡",
    title: "Whole Home",
    subtitle: "Full Control",
    description:
      "Expand across your entire home with multi-room synchronisation, scene automation, and energy tracking.",
    features: ["Multi-room sync", "Scene automation", "Energy monitoring"],
    devices: "10 – 30 devices",
    accentClass: "from-sky-50 to-white border-sky-100",
    stepColor: "bg-sky-100 text-sky-600 border-sky-200",
  },
  {
    step: "03",
    emoji: "🏢",
    title: "Office Floor",
    subtitle: "Enterprise Grade",
    description:
      "Deploy across an entire office floor with centralised management, access control, and real-time analytics.",
    features: ["Central dashboard", "Access control", "Meeting room booking"],
    devices: "50 – 100 devices",
    accentClass: "from-purple-50 to-white border-purple-100",
    stepColor: "bg-purple-100 text-purple-600 border-purple-200",
  },
  {
    step: "04",
    emoji: "🏗️",
    title: "Full Building",
    subtitle: "Scale Unlimited",
    description:
      "Manage entire buildings or campuses with cloud-based infrastructure, real-time analytics, and remote control.",
    features: ["Cloud platform", "Multi-building control", "Real-time analytics"],
    devices: "100+ devices",
    accentClass: "from-emerald-50 to-white border-emerald-100",
    stepColor: "bg-emerald-100 text-emerald-600 border-emerald-200",
  },
];

const ScalableAutomationSection = () => {
  return (
    <section className="py-28 px-6 bg-[#fafafa]">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-5">
            Modular & Scalable
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Grows With{" "}
            <span className="text-gradient-cyan">Your Ambition</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Start with a single room and scale seamlessly to an entire building — no rip-and-replace, ever.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`group relative bg-gradient-to-br ${tier.accentClass} border rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              {/* Step badge */}
              <div
                className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[11px] font-bold tracking-widest mb-4 ${tier.stepColor}`}
              >
                STEP {tier.step}
              </div>

              {/* Emoji */}
              <div className="text-4xl mb-3">{tier.emoji}</div>

              {/* Title */}
              <div className="mb-1">
                <h3 className="text-lg font-extrabold tracking-tight text-foreground">
                  {tier.title}
                </h3>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  {tier.subtitle}
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-5">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle size={13} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Device count */}
              <div className="mt-auto pt-4 border-t border-black/[0.06]">
                <span className="text-xs font-semibold text-muted-foreground">
                  Scale: {tier.devices}
                </span>
              </div>

              {/* Arrow connector (hidden on last) */}
              {i < tiers.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center rounded-full bg-white border border-border shadow-sm">
                  <ChevronRight size={12} className="text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-5 text-base">
            Not sure where to start? Our experts will help you design the right solution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl btn-primary-cyan text-sm font-bold tracking-tight hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(255,102,0,0.38)] transition-all"
          >
            Talk to an Expert <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ScalableAutomationSection;
