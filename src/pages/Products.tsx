import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import FooterSection from "@/components/FooterSection";
const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <ProductShowcase />
      </main>
      <FooterSection />
    </div>
  );
};

export default Products;