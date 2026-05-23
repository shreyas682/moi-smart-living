import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { isProductHeroImage, products } from "@/data/products";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const ProductShowcase = () => {
  return (
    <section id="products" className="py-28 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-28" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Lighting <span className="text-gradient-cyan">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Purpose-built hardware for design-grade smart lighting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => {
            const isHeroGraphic = isProductHeroImage(p.href);
            return (
              <motion.div
                key={p.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group card-premium rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col"
              >
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
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "relative w-full h-full transition-transform duration-500 ease-out",
                      isHeroGraphic
                        ? "object-contain object-center max-h-full group-hover:scale-[1.03]"
                        : "object-cover group-hover:scale-110",
                    )}
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 break-words">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {p.description}
                  </p>
                  {"specs" in p && Array.isArray((p as { specs?: string[] }).specs) && (
                    <ul className="space-y-2 mb-6">
                      {(p as { specs: string[] }).specs.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-xs text-foreground/80">
                          <Check size={14} className="mt-0.5 text-primary shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto">
                    <Link
                      to={p.href}
                      className="inline-block px-5 py-2 rounded-lg btn-ghost text-sm font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
