import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home as HomeIcon, Coffee, Briefcase, Hotel, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseSection from "@/components/WhyChooseSection";
import ScalableAutomationSection from "@/components/ScalableAutomationSection";
import solutionHomes from "@/assets/solution-homes.png";
import solutionCafes from "@/assets/solution-cafes.png";
import solutionOffices from "@/assets/solution-offices.png";
import solutionHotels from "@/assets/solution-hotels.png";

const sections = [
  {
    id: "homes",
    icon: HomeIcon,
    title: "Smart Homes",
    tagline: "Effortless living, on autopilot",
    description:
      "Lighting, climate, security and entertainment — unified into one elegant experience controlled by app, voice, or routine.",
    features: [
      "Adaptive scenes & circadian lighting",
      "Voice + app + wall control",
      "Energy monitoring built-in",
    ],
    image: solutionHomes,
  },
  {
    id: "cafes",
    icon: Coffee,
    title: "Smart Cafés",
    tagline: "Atmosphere that runs itself",
    description:
      "Schedule lighting, music, and signage by the hour. Open and close your space with a single tap from anywhere.",
    features: [
      "Time-of-day automation",
      "Energy savings up to 35%",
      "Centralized multi-outlet control",
    ],
    image: solutionCafes,
  },
  {
    id: "offices",
    icon: Briefcase,
    title: "Smart Offices",
    tagline: "Workspaces that adapt to you",
    description:
      "Occupancy-driven lighting, meeting-room automation, and IoT dashboards built for modern hybrid teams.",
    features: [
      "Occupancy & presence sensing",
      "Room booking integrations",
      "Real-time energy dashboards",
    ],
    image: solutionOffices,
  },
  {
    id: "hotels",
    icon: Hotel,
    title: "Smart Hotels",
    tagline: "Five-star stays, on demand",
    description:
      "Personalized in-room experiences, automated curtains, mood lighting, and centralized property management.",
    features: [
      "Per-room scenes & welcome modes",
      "PMS & check-in integrations",
      "Guest-facing tablet control",
    ],
    image: solutionHotels,
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 md:py-32 px-6">
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 blur-[180px] rounded-full pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative container mx-auto text-center max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-semibold text-primary mb-6">
              <Sparkles size={14} /> Solutions
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter text-foreground mb-6 leading-[0.95]">
              Automation for every <span className="text-gradient-cyan">space</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Premium, scalable smart systems for homes, cafés, offices, and hotels.
            </p>
          </motion.div>
        </section>

        {/* Alternating sections */}
        <div className="relative">
          {sections.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <section
                key={s.id}
                id={s.id}
                className="relative px-6 py-20 md:py-28 overflow-hidden"
              >
                <div
                  className={`absolute top-1/2 ${reverse ? "right-0" : "left-0"} -translate-y-1/2 w-[420px] h-[420px] bg-primary/10 blur-[160px] rounded-full pointer-events-none`}
                />
                <div className="container mx-auto relative">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className="relative group"
                    >
                      <div className="absolute inset-8 bg-primary/25 blur-3xl rounded-full pointer-events-none" />
                      <motion.div
                        whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 200, damping: 18 }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative"
                      >
                        <img
                          src={s.image}
                          alt={`${s.title} isometric automation mockup`}
                          loading="lazy"
                          decoding="async"
                          width={1024}
                          height={1024}
                          className="relative w-full max-w-lg mx-auto float-anim drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 glow-orange">
                        <s.icon size={22} strokeWidth={1.8} />
                      </div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                        {s.tagline}
                      </p>
                      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-5">
                        {s.title}
                      </h2>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7 max-w-lg">
                        {s.description}
                      </p>
                      <ul className="space-y-3 mb-9">
                        {s.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-3 text-foreground/85 text-sm"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(22_100%_55%/0.7)]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg btn-primary-cyan text-sm font-bold tracking-tight"
                      >
                        Get Demo
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <WhyChooseSection />
        <ScalableAutomationSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Solutions;
