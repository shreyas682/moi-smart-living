import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Modern smart home with ambient blue lighting and automation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up">
          Smart Living. <span className="text-gradient-blue">Simplified.</span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Advanced Smart Home Solutions by MOI Technologies.
        </p>
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#products"
            className="px-8 py-3.5 rounded-lg btn-gradient-blue text-primary-foreground font-semibold"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
