import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import { Mail, Clock, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const bullets = [
  "Avg. response time: within 24 hours",
  "Serving homes, cafes, boutiques & offices",
  "Based in Delhi NCR — Pan-India installations",
];

const projectTypes = [
  "Residential Home",
  "Cafe / Restaurant",
  "Boutique / Retail",
  "Office / Commercial",
  "Hotel / Hospitality",
  "Other",
];

const projectSizes = [
  "Under 500 sq ft",
  "500–1000 sq ft",
  "1000–2000 sq ft",
  "2000–5000 sq ft",
  "5000+ sq ft",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <section className="px-6 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT — Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-primary uppercase mb-5">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-5 leading-tight">
                Let's design your{" "}
                <span className="text-primary">lighting</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Talk to our lighting team. We'll help you plan scenes, zones and a clean install for your home, cafe, boutique or office.
              </p>

              <ul className="space-y-4 mb-10">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground text-sm font-medium group cursor-default">
                    <span className="text-primary mt-0.5 text-base leading-none transition-transform duration-300 group-hover:scale-125">◆</span>
                    <span className="transition-colors duration-300 group-hover:text-primary">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail size={15} />
                  </div>
                  contact@moitech.com
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock size={15} />
                  </div>
                  Mon–Sat · 9–7
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={15} />
                  </div>
                  Rohini Sector 13, New Delhi
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >

              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-2 leading-tight">
                Tell us about your{" "}
                <span className="text-primary">space</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Have a question or want to partner with us? Send us a message.
              </p>

              {submitted ? (
                <div className="py-16 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message received!</h3>
                  <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <div className="space-y-1.5">
                    <Label htmlFor="c-name" className="text-sm font-semibold text-foreground">Name</Label>
                    <Input
                      id="c-name"
                      placeholder="Your name"
                      required
                      className="bg-secondary border-0 h-11 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="c-email" className="text-sm font-semibold text-foreground">Email</Label>
                    <Input
                      id="c-email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="bg-secondary border-0 h-11 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="c-company" className="text-sm font-semibold text-foreground">Company</Label>
                    <Input
                      id="c-company"
                      placeholder="Company name"
                      className="bg-secondary border-0 h-11 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="c-type" className="text-sm font-semibold text-foreground">Type of Project</Label>
                    <select
                      id="c-type"
                      required
                      defaultValue=""
                      className="w-full h-11 rounded-md px-3 text-sm bg-secondary text-foreground border-0 outline-none focus:ring-2 focus:ring-primary/40 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a project type</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="c-size" className="text-sm font-semibold text-foreground">Approximate project size</Label>
                    <select
                      id="c-size"
                      required
                      defaultValue=""
                      className="w-full h-11 rounded-md px-3 text-sm bg-secondary text-foreground border-0 outline-none focus:ring-2 focus:ring-primary/40 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a project size</option>
                      {projectSizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="c-message" className="text-sm font-semibold text-foreground">Message</Label>
                    <Textarea
                      id="c-message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      required
                      className="bg-secondary border-0 text-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary-cyan border-0 h-12 text-base font-bold transition-all duration-300 hover:bg-[hsl(25,100%,33%)] hover:shadow-[0_8px_30px_hsl(25,100%,40%,0.4)]"
                    size="lg"
                  >
                    Book Demo
                  </Button>
                </form>
              )}
            </motion.div>

          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Contact;
