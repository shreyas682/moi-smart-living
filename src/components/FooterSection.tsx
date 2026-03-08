import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-card py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-bold tracking-tighter text-foreground mb-3">
            MOI <span className="text-gradient-cyan">Technologies</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Smart solutions for modern spaces and intelligent automation.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-foreground transition-colors">Products</a></li>
            <li><a href="#solutions" className="hover:text-foreground transition-colors">Solutions</a></li>
            <li><a href="#partners" className="hover:text-foreground transition-colors">Partners</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">Connect</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
            <Mail size={16} className="text-primary" /> contact@moitech.com
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 MOI Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
