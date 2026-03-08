import { Handshake } from "lucide-react";

const PartnerBannerSection = () => {
  return (
    <section id="partner" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl card-neon p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-8">
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
              className="inline-block px-8 py-3.5 rounded-lg btn-outline-blue text-primary font-semibold"
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
