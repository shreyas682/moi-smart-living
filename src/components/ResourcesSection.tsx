import { BookOpen } from "lucide-react";

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <BookOpen size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resources & <span className="text-gradient-blue">Support</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              Access technical documentation, installation guides, and expert support for your smart automation projects.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all glow-blue"
            >
              View All Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
