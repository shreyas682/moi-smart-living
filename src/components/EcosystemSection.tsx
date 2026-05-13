import { motion } from "framer-motion";
import smartHome from "@/assets/blog-smart-home.jpg";
import lighting from "@/assets/hero-bg.jpg";
import architecture from "@/assets/partner-handshake.jpg";

const EcosystemSection = () => {
  return (
    <section className="py-28 px-6 bg-secondary/40">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-28"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-foreground mb-8">
            One Ecosystem.
            <br />
            <span className="text-gradient-cyan">Endless Possibilities.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            MOI brings together luminaires, switches, sensors, and smart devices
            into one seamless platform — built for true interoperability across
            modern homes, hotels, and commercial spaces.
          </p>
        </motion.div>

        {/* Right grid */}
        <div className="grid grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 row-span-2 rounded-2xl overflow-hidden bg-white border border-border shadow-sm"
          >
            <img
              src={smartHome}
              alt="Smart home"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover min-h-[280px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white border border-border p-7 flex flex-col justify-center shadow-sm"
          >
            <p className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">
              250K+
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Devices Connected
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-border shadow-sm"
          >
            <img
              src={lighting}
              alt="Smart lighting"
              loading="lazy"
              decoding="async"
              className="w-full h-40 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border shadow-sm"
          >
            <img
              src={architecture}
              alt="Architecture"
              loading="lazy"
              decoding="async"
              className="w-full h-40 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="rounded-2xl bg-white border border-border p-7 flex flex-col justify-center shadow-sm"
          >
            <p className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground">
              100+
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Integration Partners
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 rounded-2xl bg-foreground text-background p-7 flex items-center justify-between shadow-sm"
          >
            <div>
              <p className="text-3xl md:text-4xl font-extrabold tracking-tighter">
                6M+
              </p>
              <p className="text-sm text-background/70 mt-2">
                Commands Processed
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Live Network
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;