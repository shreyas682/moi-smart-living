import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Smart home automation environment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      {/* Neon ambient glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up">
          Connected <span className="text-gradient-blue">Smart Living</span>
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Wireless. Intelligent. Seamless Automation.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#products"
            className="px-8 py-3.5 rounded-lg btn-gradient-blue text-primary-foreground font-semibold"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
