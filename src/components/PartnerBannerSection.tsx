import partnerBg from "@/assets/partner-handshake.jpg";

const PartnerBannerSection = () => {
  return (
    <section id="partner" className="relative">
      <div className="relative h-[450px] overflow-hidden">
        <img
          src={partnerBg}
          alt="Business partnership handshake"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="relative z-10 flex flex-col justify-center h-full px-6 container mx-auto">
          <p className="text-2xl md:text-4xl text-muted-foreground mb-2">
            Let's grow together.
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Partner with us.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PartnerBannerSection;
