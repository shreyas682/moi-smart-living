import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, isProductHeroImage } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductCard = ({ product }: { product: (typeof products)[number] }) => {
  const navigate = useNavigate();
  const isHeroGraphic = isProductHeroImage(product.href);

  return (
    <div
      onClick={() => navigate(product.href)}
      className="group card-premium cursor-pointer rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col"
    >
      {/* Image */}
      <div
        className={cn(
          "overflow-hidden h-64",
          isHeroGraphic
            ? "bg-[hsl(0_0%_7%)] flex items-center justify-center p-6 relative"
            : "bg-secondary",
        )}
      >
        {isHeroGraphic && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(28_100%_55%/0.18),transparent_60%)] pointer-events-none" />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={cn(
            "relative w-full h-full transition-transform duration-500 ease-out",
            isHeroGraphic
              ? "object-contain object-center max-h-full group-hover:scale-[1.03]"
              : "object-cover group-hover:scale-110",
          )}
        />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 break-words">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {product.tagline}
        </p>

        <ul className="flex-1 space-y-2 mb-6">
          {product.cardFeatures.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
              <span className="text-primary font-bold leading-none">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-border">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Explore Product
            <span className="transition-transform duration-300 group-hover:translate-x-1.5 inline-block">
              →
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

const Products = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24">
      <div className="px-6 pt-10 pb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-3">
          Lighting <span className="text-gradient-cyan">Products</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Purpose-built hardware for design-grade smart lighting.
        </p>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.href} product={product} />
          ))}
        </div>
      </div>
    </main>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default Products;
