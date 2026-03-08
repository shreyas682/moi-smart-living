const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          About <span className="text-gradient-blue">MOI Technologies</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          MOI Technologies develops innovative smart-home automation solutions designed to make
          modern living intelligent, convenient, and energy efficient. Our products seamlessly
          integrate with connected environments to bring automation, security, and comfort into
          every home.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
