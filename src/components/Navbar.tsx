import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Blog", href: "/blog" },
  { name: "Partners", href: "/partners" },
];

const productItems = [
  { name: "Two-Node Smart Switch", hash: "smart-switch" },
  { name: "LED Controller – White Light", hash: "led-white" },
  { name: "LED Controller – RGB", hash: "led-rgb" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToProduct = (hash: string) => {
    setProductsOpen(false);
    setMobileProductsOpen(false);
    setMobileOpen(false);
    if (window.location.pathname === "/products") {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${hash}`);
        return;
      }
    }
    navigate(`/products#${hash}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-dark ${
        scrolled ? "nav-dark-scrolled shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <Link to="/" className="group flex items-center" aria-label="MOI Technologies home">
          <span className="text-lg md:text-xl font-bold tracking-tight text-white transition-all duration-300 group-hover:[text-shadow:0_0_18px_hsl(26_100%_50%/0.55)]">
            MOI <span className="text-primary">Technologies</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="relative text-white hover:text-primary transition-colors duration-300 text-sm font-medium tracking-tight after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                to="/products"
                className="text-white hover:text-primary transition-colors duration-300 text-sm font-medium tracking-tight"
              >
                Products
              </Link>
              <button
                type="button"
                onClick={() => setProductsOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={productsOpen}
                aria-label="Toggle products menu"
                className="text-white hover:text-primary transition-colors duration-300"
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {productsOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full pt-3 min-w-[260px]"
              >
                <div className="nav-dark py-2">
                  {productItems.map((item) => (
                    <button
                      key={item.hash}
                      type="button"
                      role="menuitem"
                      onClick={() => goToProduct(item.hash)}
                      className="block w-full text-left px-5 py-2.5 text-sm font-medium tracking-tight text-[#f4efe8] hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative text-white hover:text-primary transition-colors duration-300 text-sm font-medium tracking-tight after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/partners#contact"
            className="px-6 py-2.5 rounded-lg btn-primary-cyan text-sm font-bold tracking-tight transition-transform duration-300 hover:scale-105"
          >
            Contact Us
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
            <Link
              to="/"
              className="text-sm text-white hover:text-primary font-medium transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <div>
              <div className="flex items-center gap-1">
                <Link
                  to="/products"
                  className="text-sm text-white hover:text-primary font-medium transition-colors duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  Products
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen((v) => !v)}
                  aria-label="Toggle products menu"
                  className="text-white hover:text-primary transition-colors duration-300"
                  aria-expanded={mobileProductsOpen}
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {mobileProductsOpen && (
                <div className="mt-3 flex flex-col gap-3 pl-3">
                  {productItems.map((item) => (
                    <button
                      key={item.hash}
                      type="button"
                      onClick={() => goToProduct(item.hash)}
                      className="text-left text-sm font-medium tracking-tight text-[#f4efe8] hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => (
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
              to="/partners#contact"
              className="px-6 py-2.5 rounded-lg btn-primary-cyan text-sm font-bold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
