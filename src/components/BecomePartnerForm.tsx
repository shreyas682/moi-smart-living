import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const BecomePartnerForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="become-partner" className="py-24 px-6 bg-white scroll-mt-28">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-4">
            Channel Partner Program
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Become a <span className="text-primary">Partner</span>
          </h2>
          <p className="text-muted-foreground">
            For interior designers, architects and renovation firms — apply to join the MOI partner network.
          </p>
        </motion.div>

        {submitted ? (
          <div className="text-center py-16 card-premium rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">Application received</h3>
            <p className="text-muted-foreground">Our partnerships team will be in touch shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="card-premium rounded-2xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="partner-name" className="text-sm font-medium">Name</Label>
                <Input id="partner-name" placeholder="Your full name" required className="bg-secondary border-0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner-email" className="text-sm font-medium">Email</Label>
                <Input id="partner-email" type="email" placeholder="you@studio.com" required className="bg-secondary border-0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner-firm" className="text-sm font-medium">Firm / Company</Label>
                <Input id="partner-firm" placeholder="Studio or company name" required className="bg-secondary border-0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner-city" className="text-sm font-medium">City</Label>
                <Input id="partner-city" placeholder="City of practice" required className="bg-secondary border-0" />
              </div>
            </div>
            <Button type="submit" className="w-full btn-primary-cyan border-0 h-12 text-base font-bold" size="lg">
              Submit Application
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BecomePartnerForm;