const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Partner With <span className="text-gradient-blue">MOI Technologies</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          We collaborate with developers, architects, and system integrators to build the next generation of smart homes.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3.5 rounded-lg btn-gradient-blue text-primary-foreground font-semibold"
        >
          Become a Partner
        </a>
      </div>
    </section>
  );
};

export default PartnersSection;
