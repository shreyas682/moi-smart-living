import { Navigate, useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductByHref } from "@/data/products";
import { Plug, Smartphone, Wifi, Mic } from "lucide-react";

const realLifeSteps = [
  { label: "Connect device", Icon: Plug },
  { label: "Install mobile app", Icon: Smartphone },
  { label: "Pair with WiFi", Icon: Wifi },
  { label: "Control via app or voice", Icon: Mic },
];

const ProductDetail = () => {
  const { pathname } = useLocation();
  const product = getProductByHref(pathname);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="px-6 py-16">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed font-medium">
                {product.shortDescription}
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 rounded-lg btn-primary-cyan text-base font-bold tracking-tight transition-transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>

            <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                loading="eager"
                decoding="async"
                className="w-full h-[400px] md:h-[520px] object-contain transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-4 ring-primary/30 transition-all duration-300" />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-secondary">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-premium rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground mb-6">
                Key Features
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-premium rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground mb-6">
                Why It’s Better
              </h2>
              <p className="text-muted-foreground leading-relaxed">{product.whyBetter}</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground mb-8 text-center">
              Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.reviews.map((review) => (
                <div key={review.name} className="card-premium rounded-2xl p-6">
                  <div className="text-primary mb-3">{review.rating}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">“{review.quote}”</p>
                  <p className="text-sm font-bold text-foreground">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-soft-orange">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-4 text-center">
              How It Works in <span className="text-primary">Real Life</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
              Experience seamless smart home control with MOI devices. From installation to daily use,
              everything is designed for simplicity, speed, and convenience.
            </p>
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white p-8 md:p-12 flex items-center justify-center">
              <img
                src={product.image}
                alt={`${product.name} in use`}
                loading="lazy"
                decoding="async"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {realLifeSteps.map((step, idx) => (
                <div
                  key={step.label}
                  className="bg-white border border-border rounded-xl p-5 text-center shadow-sm hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white mb-3">
                    <step.Icon size={18} />
                  </div>
                  <div className="text-xs font-bold text-primary mb-1">Step {idx + 1}</div>
                  <p className="text-sm font-semibold text-foreground">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;