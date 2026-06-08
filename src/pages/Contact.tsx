import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Mail, Clock, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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
                Tell us about your space and we'll get back within 24 hours to set up your demo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Mail, label: "Email", value: "contact@moitech.com" },
                  { icon: Clock, label: "Hours", value: "Mon–Sat · 9–7" },
                  { icon: MapPin, label: "Based In", value: "Delhi NCR" },
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
                    <div className="text-sm font-semibold text-foreground break-all">{c.value}</div>
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
                <div className="relative bg-white/90 backdrop-blur-xl border border-border rounded-3xl shadow-xl p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
                      <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-5"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="c-name" className="text-sm font-medium">Name</Label>
                        <Input id="c-name" placeholder="Your name" required className="bg-secondary border-0" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-email" className="text-sm font-medium">Email</Label>
                        <Input id="c-email" type="email" placeholder="you@example.com" required className="bg-secondary border-0" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-phone" className="text-sm font-medium">Phone</Label>
                        <Input id="c-phone" type="tel" placeholder="+91 98765 43210" required className="bg-secondary border-0" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-message" className="text-sm font-medium">Message</Label>
                        <Textarea id="c-message" placeholder="Tell us about your space..." rows={5} required className="bg-secondary border-0" />
                      </div>
                      <Button type="submit" className="w-full btn-primary-cyan border-0 h-12 text-base font-bold" size="lg">
                        Book a Demo
                      </Button>
                    </form>
                  )}
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