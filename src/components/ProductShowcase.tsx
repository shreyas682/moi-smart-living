import productSwitch from "@/assets/product-smart-switch.jpg";
import productWhite from "@/assets/product-led-white.jpg";
import productRgb from "@/assets/product-led-rgb.jpg";

const products = [
  {
    name: "Two-Node Smart Switch",
    description:
      "A wireless smart switch designed for seamless control of lights and appliances. Compatible with smart assistants and modern home automation systems.",
    image: productSwitch,
  },
  {
    name: "LED Controller – White Light",
    description:
      "Smart LED controller designed to control brightness and schedules for white LED lighting systems.",
    image: productWhite,
  },
  {
    name: "LED Controller – RGB",
    description:
      "Advanced RGB lighting controller that allows users to customize colors, scenes, and ambience through a mobile app or voice assistant.",
    image: productRgb,
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-24 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Our Smart Home <span className="text-gradient-blue">Products</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Premium smart-home devices built for the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="group card-neon rounded-xl overflow-hidden animate-fade-in-up hover:-translate-y-2 transition-transform duration-300"
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
