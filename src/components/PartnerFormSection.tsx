import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const profileOptions = [
  "Electrician",
  "Interior Designer",
  "Architect",
  "Builder / Developer",
  "Distributor",
  "Other",
];

const hearAboutOptions = [
  "Google Search",
  "Social Media",
  "Referral",
  "Trade Show",
  "Other",
];

const PartnerFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="partner-form" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Become a MOI Technologies <span className="text-gradient-blue">Channel Partner</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Fill in your details and our team will reach out to you.
        </p>

        {submitted ? (
          <div className="text-center py-16 bg-card border border-border rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
            <p className="text-muted-foreground">We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Company name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="State" required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="profile">Choose your profile</Label>
                <select
                  id="profile"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select profile</option>
                  {profileOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="source">How did you hear about us?</Label>
                <select
                  id="source"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select option</option>
                  {hearAboutOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Type your message here</Label>
              <Textarea id="message" placeholder="Tell us about your requirements..." rows={4} />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default PartnerFormSection;
