import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="py-28 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(210 80% 8%) 0%, hsl(0 0% 1%) 100%)",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6">
            Partner With <span className="text-gradient-cyan">MOI Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            We collaborate with developers, architects, and system integrators to build the next generation of smart homes.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-lg btn-primary-cyan text-base font-bold tracking-tight"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
