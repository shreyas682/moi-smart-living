import { Mail, Twitter, Linkedin, Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

const solutionLinks = [
  { name: "Smart Homes", href: "/solutions" },
  { name: "Smart Cafes", href: "/solutions" },
  { name: "Smart Offices", href: "/solutions" },
  { name: "Smart Hotels", href: "/solutions" },
];

const socials = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Facebook, href: "#", label: "Facebook" },
];

const FooterSection = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-extrabold tracking-tighter mb-3 logo-glow">
              <span className="text-primary">MOI</span>
              <span className="text-white"> Technologies</span>
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Enterprise-grade smart automation for homes, offices, hotels, and cafes — beautifully engineered for modern living.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-colors duration-300"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold text-white/35 uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/55 hover:text-primary transition-colors duration-300 hover:translate-x-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[11px] font-bold text-white/35 uppercase tracking-widest mb-5">Solutions</h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/55 hover:text-primary transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold text-white/35 uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@moitech.com"
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-primary transition-colors duration-300"
              >
                <Mail size={14} className="text-primary flex-shrink-0" />
                contact@moitech.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-primary transition-colors duration-300"
              >
                <Phone size={14} className="text-primary flex-shrink-0" />
                +91 98765 43210
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                Bangalore, Karnataka, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-white/30">
            © 2026 MOI Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
