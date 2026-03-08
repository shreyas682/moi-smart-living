import productSwitch from "@/assets/product-smart-switch.jpg";
import productWhite from "@/assets/product-led-white.jpg";
import productRgb from "@/assets/product-led-rgb.jpg";

const products = [
  {
    name: "Two-Node Smart Switch",
    description: "A smart switch that allows control of two electrical nodes from mobile or automation system. Perfect for smart homes.",
    image: productSwitch,
  },
  {
    name: "LED Controller White Light",
    description: "Smart LED controller designed for white lighting systems with brightness control and automation compatibility.",
    image: productWhite,
  },
  {
    name: "LED Controller RGB",
    description: "Smart RGB LED controller enabling color control, scenes, and automation through mobile apps.",
    image: productRgb,
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Our <span className="text-gradient-blue">Products</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Premium smart-home devices built for the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="group card-neon rounded-xl overflow-hidden gold-border-top animate-fade-in-up hover:-translate-y-2 transition-transform duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="overflow-hidden h-56">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
