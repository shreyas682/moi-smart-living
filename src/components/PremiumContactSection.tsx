import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, ShieldCheck, Sparkles, Send } from "lucide-react";
import contactIllustration from "@/assets/contact-illustration.png";

const badges = [
  { icon: Clock, label: "< 24h response" },
  { icon: ShieldCheck, label: "Enterprise support" },
  { icon: Sparkles, label: "Free consultation" },
];

const PremiumContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-[90vh] py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-primary/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left: illustration + copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-5 leading-[1]">
            Let's build your <span className="text-gradient-cyan">smart space</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
            Tell us about your project. Our automation specialists respond within a day.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-foreground/90"
              >
                <b.icon size={14} className="text-primary" />
                {b.label}
              </span>
            ))}
          </div>

          <motion.div style={{ y }} className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <motion.img
              src={contactIllustration}
              alt="MOI Technologies smart automation ecosystem"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1024}
              className="relative w-full max-w-md mx-auto float-anim"
            />
          </motion.div>
        </motion.div>

        {/* Right: glass form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          {submitted ? (
            <div className="glass-card rounded-3xl p-12 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 glow-orange">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 md:p-10 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</Label>
                <Input id="name" placeholder="Your full name" required className="bg-background/40 border-white/10 h-12" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" required className="bg-background/40 border-white/10 h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-xs uppercase tracking-widest text-muted-foreground">Company</Label>
                  <Input id="company" placeholder="Company" className="bg-background/40 border-white/10 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Project</Label>
                <Textarea id="message" placeholder="Tell us about your space, scale, and goals..." rows={5} required className="bg-background/40 border-white/10" />
              </div>
              <button
                type="submit"
                className="group w-full h-14 rounded-xl btn-primary-cyan text-base font-bold tracking-tight inline-flex items-center justify-center gap-2 animate-pulse-glow"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumContactSection;
