import heroBg from "@/assets/hero-bg.jpg";
import { Wifi, Lightbulb, Smartphone, Shield, MonitorSpeaker } from "lucide-react";

const floatingIcons = [
  { icon: Wifi, top: "15%", left: "8%", delay: "0s", size: 22 },
  { icon: Lightbulb, top: "25%", right: "10%", delay: "0.5s", size: 20 },
  { icon: Smartphone, bottom: "30%", left: "12%", delay: "1s", size: 18 },
  { icon: Shield, top: "20%", right: "18%", delay: "1.5s", size: 20 },
  { icon: MonitorSpeaker, bottom: "25%", right: "8%", delay: "2s", size: 22 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Smart home automation environment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      {/* Neon ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

      {/* Floating smart-device icons */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-primary animate-glow-pulse pointer-events-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            animationDelay: item.delay,
          }}
        >
          <item.icon size={item.size} />
        </div>
      ))}

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
            className="px-8 py-3.5 rounded-lg btn-outline-blue text-primary font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
