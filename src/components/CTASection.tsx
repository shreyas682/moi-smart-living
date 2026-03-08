const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          Partner with <span className="text-gradient-blue">MOI Technologies</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Ready to build smart spaces? Contact our team for enterprise smart automation solutions.
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 rounded-lg bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all glow-gold"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default CTASection;
