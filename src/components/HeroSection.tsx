import { motion } from "framer-motion";
import heroImage from "@/assets/image 1.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex overflow-hidden pt-24 bg-[#0b0b0d] text-white">
      {/* Full-bleed background image across all viewports */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      {/* Readability overlay: darker on the left on desktop, full dim on mobile */}
      <div
        className="absolute inset-0 bg-black/60 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/50 lg:to-transparent"
        aria-hidden="true"
      />

      {/* Headline + CTAs */}
      <div className="relative z-10 container mx-auto px-6 flex-1 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl py-12 lg:py-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05] whitespace-normal">
            Lighting That{" "}
            <span className="text-gradient-cyan inline-block pb-2">Thinks.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed font-medium">
            Retrofit smart lighting for homes, cafes, boutiques and offices — no rewiring, one app.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
