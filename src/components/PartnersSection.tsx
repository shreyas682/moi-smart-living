import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake } from "lucide-react";

const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="py-24 md:py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,102,0,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Orange ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/[0.06] blur-[140px] pointer-events-none" />

      <div className="section-divider max-w-4xl mx-auto mb-20" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <Handshake size={26} className="text-primary" />
          </div>

          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            Partnership Program
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6">
            Build the Future with{" "}
            <span className="text-gradient-cyan">MOI Technologies</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            We collaborate with developers, architects, and system integrators
            to build the next generation of smart homes, offices, hotels, and
            cafes across India and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl btn-primary-cyan text-base font-bold tracking-tight hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,102,0,0.42)] transition-all"
            >
              Become a Partner <ArrowRight size={18} />
            </Link>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground text-base font-semibold hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              View Partner Programme
            </Link>
          </div>

          {/* Partner stats */}
          <div className="flex flex-col sm:flex-row gap-8 mt-14 pt-10 border-t border-border w-full justify-center">
            {[
              { value: "120+", label: "Active Partners" },
              { value: "18", label: "States Covered" },
              { value: "₹2Cr+", label: "Partner Revenue Generated" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-extrabold text-foreground tracking-tight">{value}</div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
