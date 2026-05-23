import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Lightbulb } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="relative overflow-hidden py-20 md:py-28 px-6 bg-gradient-to-b from-secondary/40 to-white">
          <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-5">
                Get In Touch
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-5">
                Let's design your <span className="text-gradient-cyan">lighting</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Talk to our lighting team. We'll help you plan scenes, zones and a clean install for your home, cafe, boutique or office.
              </p>

              {/* Visual */}
              <div className="relative aspect-[5/4] w-full rounded-2xl border border-border overflow-hidden bg-gradient-to-br from-white to-secondary mb-10">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(0 0% 0% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 0% / 0.05) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                    transform: "perspective(700px) rotateX(50deg) translateY(20%) scale(1.4)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-2xl" />
                    <div className="relative w-24 h-24 rounded-2xl bg-white border border-border shadow-xl flex items-center justify-center text-primary">
                      <Lightbulb size={44} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Support cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Mail, label: "Email", value: "contact@moitech.com" },
                  { icon: Phone, label: "Call", value: "+91 98765 43210" },
                  { icon: Clock, label: "Hours", value: "Mon–Sat · 9–7" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="group p-4 rounded-xl bg-white border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      <c.icon size={16} />
                    </div>
                    <div className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{c.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl pointer-events-none" />
                <div className="relative bg-white/80 backdrop-blur-xl border border-border rounded-3xl shadow-xl p-2">
                  <ContactSection />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Contact;