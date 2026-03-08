import { Handshake } from "lucide-react";

const PartnerBannerSection = () => {
  return (
    <section id="partner" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-8">
              <Handshake size={40} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Let's grow together. <span className="text-gradient-blue">Partner with us.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Become a MOI Technologies channel partner.
            </p>
            <a
              href="#partner-form"
              className="inline-block px-8 py-3.5 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBannerSection;
