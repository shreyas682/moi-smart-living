import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

const FooterSection = () => {
  return (
    <footer className="footer-dark py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-lg font-bold tracking-tighter text-white mb-3 glow-text-orange">
            MOI <span className="text-primary animate-pulse-glow inline-block px-2 rounded">Technologies</span>
          </h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Smart solutions for modern spaces and intelligent automation.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Quick Links</h4>
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
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Connect</h4>
          <div className="flex items-center gap-2 text-sm text-white/80 mb-5">
            <Mail size={16} className="text-primary" /> contact@moitech.com
          </div>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-primary hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_20px_hsl(22_100%_55%/0.5)] transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/60">
        © 2026 MOI Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
