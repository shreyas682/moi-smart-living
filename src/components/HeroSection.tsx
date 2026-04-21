import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 pb-16 lg:pt-0 lg:pb-0">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground mb-6 leading-[0.95]">
              Smart Living.
              <br />
              <span className="text-gradient-cyan">Simplified.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-medium">
              Advanced smart home solutions by MOI Technologies.
            </p>
            <a
              href="#products"
              className="inline-block px-10 py-4 rounded-lg btn-primary-cyan text-base font-bold tracking-tight transition-transform hover:scale-105"
            >
              Explore Products
            </a>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
              <img
                src={heroBg}
                alt="Modern smart home with ambient lighting controlled via mobile app"
                className="w-full h-[400px] md:h-[520px] object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 backdrop-blur-[1px] transition-opacity duration-300" />
              {/* Orange overlay on hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              {/* Orange glow ring on hover */}
              <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-4 ring-primary/40 transition-all duration-300" />
            </div>
            {/* Soft glow behind image */}
            <div className="absolute -inset-4 -z-10 bg-primary/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
