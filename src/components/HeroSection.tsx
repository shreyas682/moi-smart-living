import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroScenePanel from "./HeroScenePanel";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0 bg-[#111111] text-white">
      {/* Subtle warm radial glow behind headline */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[hsl(26_100%_50%/0.15)] blur-[180px] pointer-events-none" />
      {/* Extremely subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Lighting That
              <br />
              <span className="text-gradient-cyan inline-block pb-2">Thinks.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed font-medium">
              Retrofit smart lighting for homes, cafes, boutiques and offices — no rewiring, one app.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 rounded-lg btn-primary-cyan text-base font-bold tracking-tight transition-transform hover:scale-105"
              >
                Book a Demo
              </Link>
              <Link
                to="/products"
                className="inline-block px-10 py-4 rounded-lg border border-white/20 text-white text-base font-semibold tracking-tight hover:bg-white/10 transition-colors"
              >
                See Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-[hsl(28_100%_55%/0.18)] blur-3xl rounded-full pointer-events-none" />
            <div className="relative">
              <HeroScenePanel />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
