import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import moiLogo from "@/assets/moi-logo.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Partners", href: "/partners" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0f0f0f] border-b border-white/[0.07] ${
        scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.6)]" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={moiLogo}
            alt="MOI Technologies"
            width={140}
            height={36}
            decoding="async"
            fetchPriority="high"
            loading="eager"
            className="h-9 w-auto transition-all duration-500 group-hover:drop-shadow-[0_0_14px_rgba(255,102,0,0.7)]"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium tracking-tight group"
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(255,102,0,0.45)]"
          >
            <Zap size={14} strokeWidth={2.5} />
            Get Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-white/[0.07]">
          <div className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-white/70 hover:text-white font-medium transition-colors duration-300 py-1"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold text-center hover:bg-primary/90 transition-all duration-300 mt-1"
            >
              <Zap size={14} strokeWidth={2.5} />
              Get Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
