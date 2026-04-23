import { Navigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductByHref } from "@/data/products";

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
              <a
                href="/#contact"
                className="inline-block px-10 py-4 rounded-lg btn-primary-cyan text-base font-bold tracking-tight transition-transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>

            <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-secondary">
              <img
                src={product.image}
                alt={product.name}
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
              <p className="text-muted-foreground leading-relaxed mb-8">{product.whyBetter}</p>
              <h3 className="text-xl font-bold tracking-tight text-foreground mb-3">Demo</h3>
              <p className="text-muted-foreground leading-relaxed">{product.demoText}</p>
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
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;