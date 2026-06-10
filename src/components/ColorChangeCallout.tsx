import { motion } from "framer-motion";
import { Palette } from "lucide-react";

const ColorChangeCallout = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 px-6 bg-[#0b0b0d] text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 container mx-auto max-w-3xl text-center"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/15 text-primary mb-6 ring-1 ring-primary/30">
          <Palette size={26} strokeWidth={1.8} />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-5">
          Change the mood, <span className="text-primary">not the wiring.</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          Adjust color temperature from warm 1800K to crisp 6500K, or go full RGB —
          all from the <span className="text-primary font-semibold">Moi Space App</span>.
        </p>
        {/* Spectrum strip */}
        <div className="mt-10 h-3 rounded-full overflow-hidden ring-1 ring-white/10"
          style={{
            background:
              "linear-gradient(90deg, #ff7a18 0%, #ffb469 22%, #fff1d6 45%, #ffffff 55%, #d3e6ff 72%, #79b8ff 88%, #ff3df3 100%)",
          }}
        />
        <div className="mt-2 flex justify-between text-[10px] tracking-[0.2em] uppercase text-white/40">
          <span>1800K</span>
          <span>2700K</span>
          <span>4000K</span>
          <span>6500K</span>
          <span>RGB</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ColorChangeCallout;