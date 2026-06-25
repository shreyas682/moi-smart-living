import { Mail, Twitter, Linkedin, Instagram, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "About Us", href: "/#about" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/#contact" },
  { name: "Contact", href: "/#contact" },
];

const FooterSection = () => {
  return (
    <footer className="footer-dark py-16 px-6 border-t border-white/5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white mb-3 [text-shadow:0_0_18px_hsl(26_100%_50%/0.4)]">
            MOI <span className="text-primary">Technologies</span>
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Smart lighting, thoughtfully built.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/80">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="hover:text-primary transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-5">Connect</h4>
          <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
            <Mail size={16} className="text-primary shrink-0" /> contact@moitech.com
          </div>
          <div className="flex items-center gap-2 text-sm text-white/80 mb-5">
            <MapPin size={16} className="text-primary shrink-0" /> Rohini Sector 13, New Delhi
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-white/70 hover:text-primary transition-colors duration-300"><Twitter size={20} /></a>
            <a href="#" className="text-white/70 hover:text-primary transition-colors duration-300"><Linkedin size={20} /></a>
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-primary transition-colors duration-300"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-[hsl(0_0%_16%)] text-center text-xs text-[hsl(0_0%_53%)]">
        © 2026 MOI Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
