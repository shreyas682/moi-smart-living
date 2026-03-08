import { useState, useEffect } from "react";
import { Menu, X, ToggleRight, Lightbulb, Palette } from "lucide-react";

const products = [
  { name: "Two-Node Smart Switch", icon: ToggleRight },
  { name: "LED Controller White Light", icon: Lightbulb },
  { name: "LED Controller RGB", icon: Palette },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          MOI <span className="text-gradient-blue">Technologies</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Products
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl animate-fade-in overflow-hidden">
                {products.map((p) => (
                  <a
                    key={p.name}
                    href="#products"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    <p.icon size={18} className="text-primary" />
                    {p.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Blog</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Partners</a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Products</p>
            {products.map((p) => (
              <a key={p.name} href="#products" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>
                <p.icon size={16} className="text-primary" /> {p.name}
              </a>
            ))}
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Blog</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Partners</a>
            <a href="#contact" className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center" onClick={() => setMobileOpen(false)}>Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
