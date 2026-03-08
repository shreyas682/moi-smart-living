import { useState } from "react";
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
    <section id="contact" className="py-24 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Get In <span className="text-gradient-blue">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Have a question or want to partner with us? Send us a message.
        </p>

        {submitted ? (
          <div className="text-center py-16 card-neon rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
            <p className="text-muted-foreground">We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-neon rounded-xl p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Company name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your requirements..." rows={4} required />
            </div>
            <Button type="submit" className="w-full btn-gradient-blue border-0" size="lg">
              Submit
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
