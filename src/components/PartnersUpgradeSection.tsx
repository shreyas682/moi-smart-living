import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Palette,
  Hammer,
  Store,
  Tag,
  FileText,
  LifeBuoy,
  GraduationCap,
} from "lucide-react";

const partnerTypes = [
  { icon: Palette, title: "Interior Designers", desc: "Elevate every project with design-grade lighting." },
  { icon: Building2, title: "Architects", desc: "Specify wireless smart lighting in your drawings." },
  { icon: Hammer, title: "Renovation Firms", desc: "Add premium lighting to every renovation, without rewiring." },
  { icon: Store, title: "Boutique Retailers", desc: "Differentiate your spaces with scene-driven lighting." },
];

const benefits = [
  { icon: Tag, title: "Dealer Pricing", desc: "Partner-only pricing across the full MOI lighting catalogue." },
  { icon: FileText, title: "Co-Branded Proposals", desc: "Polished proposal templates to win more lighting briefs." },
  { icon: LifeBuoy, title: "Project Support", desc: "Specification, installation and on-site help from our team." },
  { icon: GraduationCap, title: "Training", desc: "Onboarding sessions on Moi Space, hardware and scene design." },
];

const PartnersUpgradeSection = () => {
  return (
    <>
      {/* Premium Hero */}
      <section className="relative overflow-hidden py-28 md:py-36 px-6 footer-dark">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/20 blur-[140px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-5">
              Partner Program
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6 [text-shadow:0_0_40px_hsl(26_100%_50%/0.25)]">
              Grow your practice with <span className="text-primary">smart lighting</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              Partner with MOI Technologies and offer your clients premium wireless lighting — installed without rewiring.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-lg btn-primary-cyan text-sm font-bold tracking-tight transition-transform hover:scale-105"
              >
                Become a Partner
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-lg border border-white/20 text-white text-sm font-semibold tracking-tight hover:bg-white/10 transition-colors"
              >
                Book Partnership Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
              Ecosystem
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              A connected network of premium partners
            </h2>
            <p className="text-muted-foreground">
              Find your place in the MOI partnership ecosystem.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {partnerTypes.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <p.icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="text-base font-bold tracking-tight text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
              Why Partner With MOI
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Built for sustainable growth
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <b.icon size={26} strokeWidth={1.6} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="relative py-28 px-6 footer-dark overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white mb-5 [text-shadow:0_0_30px_hsl(26_100%_50%/0.3)]">
              Ready to grow with <span className="text-primary">MOI Technologies?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Talk to our partnerships team and get a custom plan for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-lg btn-primary-cyan text-base font-bold tracking-tight transition-transform hover:scale-105"
              >
                Become a Partner
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 rounded-lg border border-white/20 text-white text-base font-semibold tracking-tight hover:bg-white/10 transition-colors"
              >
                Book Partnership Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PartnersUpgradeSection;