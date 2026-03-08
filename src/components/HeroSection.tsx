import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Modern smart home with ambient blue lighting"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground mb-6 leading-[0.95]">
              Smart Living.
              <br />
              <span className="text-gradient-cyan">Simplified.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Advanced Smart Home Solutions by MOI Technologies.
            </p>
            <a
              href="#products"
              className="inline-block px-10 py-4 rounded-lg btn-primary-cyan text-base font-bold tracking-tight animate-pulse-glow"
            >
              Explore Products
            </a>
          </motion.div>

          {/* Right: Hero image visible through overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
