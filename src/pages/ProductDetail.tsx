import { Navigate, useLocation, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductByHref, isProductHeroImage, productMedia } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { pathname } = useLocation();
  const product = getProductByHref(pathname);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const media = productMedia[product.href];
  const heroGraphic = isProductHeroImage(product.href);

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

            <div
              className={cn(
                "group relative rounded-3xl overflow-hidden shadow-2xl",
                heroGraphic
                  ? "bg-zinc-950 ring-1 ring-white/[0.08] shadow-black/40"
                  : "bg-secondary",
              )}
            >
              <img
                src={product.image}
                alt={product.name}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                style={{ objectPosition: "center" }}
                className={cn(
                  "w-full object-contain transition-transform duration-300 ease-out",
                  heroGraphic
                    ? "h-[min(72vw,520px)] sm:h-[440px] md:h-[560px] py-6 md:py-10 px-3 sm:px-6 group-hover:scale-[1.02]"
                    : "h-[400px] md:h-[520px] group-hover:scale-105",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none",
                  heroGraphic ? "bg-primary/[0.06]" : "bg-primary/10",
                )}
              />
              <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-4 ring-primary/30 transition-all duration-300 pointer-events-none" />
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

        {media && (
          <section className="px-6 py-20 bg-soft-orange">
            <div className="container mx-auto max-w-6xl space-y-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-8 text-center">
                  How It <span className="text-primary">Works</span>
                </h2>
                <div className="rounded-3xl overflow-hidden shadow-xl bg-white p-6 md:p-10 flex items-center justify-center">
                  <img
                    src={media.stepsImage}
                    alt={`${product.name} step-by-step guide`}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    style={{ objectPosition: "center" }}
                    className="w-full max-w-2xl h-auto object-contain"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-8 text-center">
                  See It <span className="text-primary">In Action</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {media.gallery.map((item) => (
                    <figure
                      key={item.src}
                      className="rounded-2xl overflow-hidden shadow-lg bg-white border border-border hover:-translate-y-1 hover:border-primary transition-all duration-300"
                    >
                      <div className="h-72 md:h-80 overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.caption}
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          style={{ objectPosition: "center" }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <figcaption className="px-4 py-3 text-sm font-semibold text-foreground text-center">
                        {item.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;