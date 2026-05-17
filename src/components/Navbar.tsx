import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-dark ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="group flex items-center" aria-label="MOI Technologies home">
          <span className="text-lg md:text-xl font-bold tracking-tight text-white transition-all duration-300 group-hover:[text-shadow:0_0_18px_hsl(26_100%_50%/0.55)]">
            MOI <span className="text-primary">Technologies</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative text-white hover:text-primary transition-colors duration-300 text-sm font-medium tracking-tight after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-lg btn-primary-cyan text-sm font-bold tracking-tight transition-transform duration-300 hover:scale-105"
          >
            Book Demo
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden nav-dark animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-white hover:text-primary font-medium transition-colors duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-lg btn-primary-cyan text-sm font-bold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
