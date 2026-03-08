import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-primary/10 bg-card py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">
            MOI <span className="text-gradient-blue">Technologies</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Smart solutions for modern spaces — intelligent lighting and connected automation.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> contact@moitech.com</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Mumbai, India</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
            <li><a href="#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#resources" className="hover:text-primary transition-colors">Resources</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Partner with Us</h4>
          <p className="text-sm text-muted-foreground mb-4">Build Smart Spaces</p>
          <a
            href="#partner-form"
            className="inline-block px-5 py-2 rounded-lg btn-outline-blue text-primary text-sm font-semibold"
          >
            Become a Partner
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
        <span>© 2026 MOI Technologies. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
