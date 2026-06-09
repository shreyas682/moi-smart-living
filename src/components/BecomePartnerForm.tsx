import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const WorkWithMoi = () => {
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <section id="work-with-moi" className="py-24 px-6 bg-white scroll-mt-28">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Work with <span className="text-primary">MOI Technologies</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Whether you're a design partner or exploring lighting for your space — we're here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Become a Partner */}
          <div className="card-premium rounded-2xl p-8">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
              Become a Partner
            </h3>
            {partnerSubmitted ? (
              <div className="text-center py-12">
                <h4 className="text-lg font-bold text-foreground mb-2">Application received</h4>
                <p className="text-muted-foreground text-sm">Our partnerships team will be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setPartnerSubmitted(true); }}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="p-name" className="text-sm font-medium">Name</Label>
                  <Input id="p-name" placeholder="Your full name" required className="bg-secondary border-0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p-email" className="text-sm font-medium">Email</Label>
                  <Input id="p-email" type="email" placeholder="you@studio.com" required className="bg-secondary border-0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p-firm" className="text-sm font-medium">Firm / Company</Label>
                  <Input id="p-firm" placeholder="Studio or company name" required className="bg-secondary border-0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p-city" className="text-sm font-medium">City</Label>
                  <Input id="p-city" placeholder="City of practice" required className="bg-secondary border-0" />
                </div>
                <Button type="submit" className="w-full btn-primary-cyan border-0 h-12 text-base font-bold" size="lg">
                  Submit Application
                </Button>
              </form>
            )}
          </div>

          {/* Get in Touch */}
          <div className="card-premium rounded-2xl p-8">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
              Get in Touch
            </h3>
            {contactSubmitted ? (
              <div className="text-center py-12">
                <h4 className="text-lg font-bold text-foreground mb-2">Thank you!</h4>
                <p className="text-muted-foreground text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="g-name" className="text-sm font-medium">Name</Label>
                  <Input id="g-name" placeholder="Your name" required className="bg-secondary border-0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="g-email" className="text-sm font-medium">Email</Label>
                  <Input id="g-email" type="email" placeholder="you@example.com" required className="bg-secondary border-0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="g-phone" className="text-sm font-medium">Phone</Label>
                  <Input id="g-phone" type="tel" placeholder="+91 98765 43210" required className="bg-secondary border-0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="g-message" className="text-sm font-medium">Message</Label>
                  <Textarea id="g-message" placeholder="Tell us about your space..." rows={4} required className="bg-secondary border-0" />
                </div>
                <Button type="submit" className="w-full btn-primary-cyan border-0 h-12 text-base font-bold" size="lg">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMoi;
