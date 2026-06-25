import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0f0f0f] py-[120px] px-6"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, hsl(25 100% 40% / 0.12), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 container mx-auto flex flex-col items-center text-center"
      >
        <span className="inline-block text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-4">
          About Us
        </span>
        <h2 className="text-[40px] md:text-[56px] font-extrabold tracking-tight leading-[1.1] max-w-[700px] mx-auto mb-8">
          <span className="text-white">Lighting-first technology</span>{" "}
          <span className="text-[#E8632A]">company.</span>
        </h2>
        <p className="text-base md:text-lg text-[#cccccc] leading-[1.8] max-w-[720px] mx-auto">
          MOI Technologies is an Indian lighting technology company building premium
          wireless smart lighting for design-conscious homes and commercial spaces.
          Our products retrofit into any existing space — no rewiring, no control
          panels — and are controlled entirely through the Moi Space app. We exist
          for the designers, architects and renovators who believe great lighting
          is non-negotiable.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
