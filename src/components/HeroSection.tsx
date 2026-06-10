import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-living-warm.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:block overflow-hidden pt-24 pb-0 bg-[#0b0b0d] text-white">
      {/* Desktop: full-width background image with left-half dark overlay */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage.url})` }}
        aria-hidden="true"
      />
      <div
        className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent"
        aria-hidden="true"
      />

      {/* Headline + CTAs */}
      <div className="relative z-10 container mx-auto px-6 flex-1 flex items-center min-h-[60vh] lg:min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl py-12 lg:py-0"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Lighting That
            <br />
            <span className="text-gradient-cyan inline-block pb-2">Thinks.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-xl leading-relaxed font-medium">
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
      </div>

      {/* Mobile: image below CTAs */}
      <div className="lg:hidden w-full">
        <img
          src={heroImage.url}
          alt="Smart-lit modern living room with warm cove lighting and Moi Space app"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
