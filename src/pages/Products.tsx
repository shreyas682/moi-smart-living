import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <ProductShowcase />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Products;