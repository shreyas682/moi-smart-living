import { Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">
            MOI <span className="text-gradient-blue">Technologies</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pioneering smart-home innovation for connected, intelligent living.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#products" className="hover:text-foreground transition-colors">Two-Node Smart Switch</a></li>
            <li><a href="#products" className="hover:text-foreground transition-colors">LED Controller White Light</a></li>
            <li><a href="#products" className="hover:text-foreground transition-colors">LED Controller RGB</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#about" className="hover:text-foreground transition-colors">Partners</a></li>
            <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> info@moitechnologies.com</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +91 9876543210</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 MOI Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
