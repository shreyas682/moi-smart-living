import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";

const ProductCard = ({ product }: { product: (typeof products)[number] }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(product.href)}
      className="group cursor-pointer flex flex-col bg-zinc-900 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
    >
      {/* Image */}
      <div className="bg-zinc-950 flex items-center justify-center p-6 min-h-[220px]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full max-h-[190px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <h3 className="text-lg font-extrabold tracking-tight text-white mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-zinc-400 leading-snug">{product.tagline}</p>
        </div>

        <ul className="flex-1 space-y-2">
          {product.cardFeatures.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
              <span className="text-primary font-bold leading-none">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-white/[0.06]">
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
