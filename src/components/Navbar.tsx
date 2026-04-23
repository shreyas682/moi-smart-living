import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import moiLogo from "@/assets/moi-logo.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/#products" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Partners", href: "/#partners" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <a href="/" className="flex items-center gap-3">
          <img src={moiLogo} alt="MOI Technologies" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-foreground hover:text-primary transition-colors text-sm font-medium tracking-tight after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            className="px-6 py-2.5 rounded-lg btn-primary-cyan text-sm font-bold tracking-tight transition-transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-nav animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground hover:text-primary font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              className="px-6 py-2.5 rounded-lg btn-primary-cyan text-sm font-bold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
