import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BecomePartnerForm = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 scroll-mt-28 relative overflow-hidden"
      style={{ background: "hsl(240 8% 5%)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "hsl(25 100% 40% / 0.12)", filter: "blur(100px)" }}
        aria-hidden="true"
      />
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
            Ready to grow with{" "}
            <span className="text-primary">MOI Technologies?</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
            Talk to our partnerships team and get a custom plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3.5 rounded-lg btn-primary-cyan text-sm font-bold tracking-tight transition-transform hover:scale-105"
          >
            Become a Partner
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomePartnerForm;
