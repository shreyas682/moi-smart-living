import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0f0f0f] py-[160px] px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(232,99,42,0.10),transparent_45%),radial-gradient(circle_at_100%_100%,rgba(232,99,42,0.10),transparent_45%)] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#E8632A] mb-6">
          About Us
        </span>
        <h2 className="max-w-[800px] text-4xl md:text-[52px] font-extrabold leading-[1.2] text-white mb-8">
          We build lighting that thinks.
        </h2>
        <p className="max-w-[750px] text-base leading-[1.9] text-[#d4d4d8]">
          MOI Technologies is an Indian lighting technology company building premium
          wireless smart lighting for design-conscious homes and commercial spaces. Our
          products retrofit into any existing space — no rewiring, no control panels —
          and are controlled entirely through the Moi Space app. We exist for the
          designers, architects and renovators who believe great lighting is
          non-negotiable.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
