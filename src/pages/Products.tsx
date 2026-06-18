import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { isProductHeroImage, productMedia, products } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductBlock = ({ product }: { product: (typeof products)[number] }) => {
  const media = productMedia[product.href];
  const heroGraphic = isProductHeroImage(product.href);
  const slug = product.href.split("#")[1] ?? product.href;

  return (
    <article id={slug} className="scroll-mt-28">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-6 leading-tight">
              {product.name}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-medium">
              {product.shortDescription}
            </p>
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
              loading="lazy"
              decoding="async"
              className={cn(
                "w-full object-contain transition-transform duration-300 ease-out",
                heroGraphic
                  ? "h-[min(72vw,520px)] sm:h-[440px] md:h-[560px] py-6 md:py-10 px-3 sm:px-6 group-hover:scale-[1.02]"
                  : "h-[400px] md:h-[520px] group-hover:scale-105",
              )}
            />
          </div>
        </div>
      </section>

      {/* Key Features + Why */}
      <section className="px-6 py-16 bg-secondary">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-premium rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground mb-6">
              Key Features
            </h3>
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
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground mb-6">
              Why It’s Better
            </h3>
            <p className="text-muted-foreground leading-relaxed">{product.whyBetter}</p>
          </div>
        </div>
      </section>

      {media && (
        <section className="px-6 py-20 bg-soft-orange">
          <div className="container mx-auto max-w-6xl space-y-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-8 text-center">
                How It <span className="text-primary">Works</span>
              </h3>
              <div className="rounded-3xl overflow-hidden shadow-xl bg-white p-6 md:p-10 flex items-center justify-center">
                <img
                  src={media.stepsImage}
                  alt={`${product.name} step-by-step guide`}
                  loading="lazy"
                  className="w-full max-w-2xl h-auto object-contain"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-8 text-center">
                See It <span className="text-primary">In Action</span>
              </h3>
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
    </article>
  );
};

const Products = () => {
  // Order: smart switch, white, rgb (already in this order in data)
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <div className="px-6 pt-8 pb-2 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-3">
            Lighting <span className="text-gradient-cyan">Products</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Purpose-built hardware for design-grade smart lighting.
          </p>
        </div>
        {products.map((product, idx) => (
          <div key={product.href}>
            <ProductBlock product={product} />
            {idx < products.length - 1 && (
              <div className="w-full h-24 bg-[#0b0b0d]" aria-hidden="true" />
            )}
          </div>
        ))}
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Products;