import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-28" />
      <div className="container mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Have a question or want to partner with us? Send us a message.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {submitted ? (
            <div className="text-center py-16 card-premium rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
              <p className="text-muted-foreground">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-premium rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                <Input id="name" placeholder="Your name" required className="bg-secondary border-0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required className="bg-secondary border-0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                <Input id="company" placeholder="Company name" className="bg-secondary border-0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                <Textarea id="message" placeholder="Tell us about your requirements..." rows={4} required className="bg-secondary border-0" />
              </div>
              <Button type="submit" className="w-full btn-primary-cyan border-0 h-12 text-base font-bold" size="lg">
                Book Demo
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
