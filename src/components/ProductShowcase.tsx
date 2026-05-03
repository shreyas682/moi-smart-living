import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
            Our Smart Home <span className="text-gradient-cyan">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Premium smart-home devices built for the future.
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
              className="group card-premium rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div
                className={cn(
                  "overflow-hidden h-64",
                  isHeroGraphic
                    ? "bg-zinc-950 flex items-center justify-center p-3 sm:p-4"
                    : "bg-secondary",
                )}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full h-full transition-transform duration-500 ease-out",
                    isHeroGraphic
                      ? "object-contain object-center max-h-full group-hover:scale-[1.03]"
                      : "object-cover group-hover:scale-110",
                  )}
                />
              </div>
              <div className="p-7">
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
                <Link
                  to={p.href}
                  className="inline-block px-5 py-2 rounded-lg btn-ghost text-sm font-semibold"
                >
                  Learn More
                </Link>
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
