import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Zap,
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    Icon: Mail,
    label: "Email us",
    value: "contact@moitech.com",
    href: "mailto:contact@moitech.com",
  },
  {
    Icon: Phone,
    label: "Call us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    Icon: MapPin,
    label: "Visit us",
    value: "Bangalore, Karnataka, India",
    href: "#",
  },
];

const responseBadges = [
  { Icon: Zap, label: "Email Response", value: "< 2 hours", color: "bg-primary/10 text-primary border-primary/20" },
  { Icon: Phone, label: "Phone Support", value: "Immediate", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { Icon: MessageCircle, label: "Live Chat", value: "Business hours", color: "bg-sky-50 text-sky-600 border-sky-100" },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              Get in Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 leading-[0.95]">
              Let's Build Something{" "}
              <span className="text-gradient-cyan">Intelligent</span> Together
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
              Tell us about your space and goals. Our automation experts will
              craft a personalised solution and reach out within 2 hours.
            </p>

            {/* Response time badges */}
            <div className="space-y-3 mb-10">
              {responseBadges.map(({ Icon, label, value, color }) => (
                <div
                  key={label}
                  className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border ${color} mr-2 mb-2`}
                >
                  <Icon size={14} />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold">{label}:</span>
                    <span className="text-xs font-bold">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">{label}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Decorative animated orb */}
            <div className="relative mt-14 h-32 hidden lg:block">
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 w-32 h-32 rounded-full bg-primary/15 blur-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.5, 0.25] }}
                transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-8 top-4 w-20 h-20 rounded-full bg-primary/20 blur-xl"
              />
              <div className="absolute left-4 top-6 flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-lg border border-border">
                <Clock size={14} className="text-primary" />
                <span className="text-sm font-semibold text-foreground">Average response: 47 min</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <div className="glass-form rounded-3xl p-12 text-center">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-foreground mb-3">
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground">
                    Our team will reach out within 2 hours with a personalised automation plan.
                  </p>
                </motion.div>
              </div>
            ) : (
              <div className="glass-form rounded-3xl p-8 md:p-10">
                <h3 className="text-xl font-extrabold tracking-tight text-foreground mb-1">
                  Request a Free Demo
                </h3>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill in your details and we'll tailor a solution for you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        required
                        className="bg-white border-border rounded-xl h-11 focus:border-primary focus:ring-primary/20 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                        Work Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="bg-white border-border rounded-xl h-11 focus:border-primary focus:ring-primary/20 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-sm font-semibold text-foreground">
                        Company / Project
                      </Label>
                      <Input
                        id="company"
                        placeholder="Company name"
                        className="bg-white border-border rounded-xl h-11 focus:border-primary focus:ring-primary/20 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="bg-white border-border rounded-xl h-11 focus:border-primary focus:ring-primary/20 text-sm"
                      />
                    </div>
                  </div>

                  {/* Space type selector */}
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-foreground">Space Type</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Home", "Cafe", "Office", "Hotel"].map((type) => (
                        <label key={type} className="cursor-pointer">
                          <input type="radio" name="space" value={type} className="sr-only peer" />
                          <div className="text-center py-2 rounded-xl border border-border text-sm font-semibold text-muted-foreground peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/5 hover:border-primary/40 transition-all duration-200">
                            {type}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Tell us about your project *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your space, requirements, or any questions you have..."
                      rows={4}
                      required
                      className="bg-white border-border rounded-xl focus:border-primary focus:ring-primary/20 text-sm resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary-cyan border-0 h-12 text-base font-bold rounded-xl hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(255,102,0,0.42)] transition-all duration-300"
                    size="lg"
                  >
                    Send My Request <ArrowRight size={18} className="ml-1" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    🔒 Your information is private and never shared.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
