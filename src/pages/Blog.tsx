import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog3.jpeg";

const posts = [
  {
    image: blog2,
    imageAlt: "Smart lighting in a retail store",
    category: "Retail",
    readTime: "4 min read",
    title: "How Smart Lighting Transforms Retail Spaces",
    excerpt:
      "The right lighting doesn't just illuminate a store — it directs attention, builds mood, and drives purchase decisions.",
  },
  {
    image: blog1,
    imageAlt: "Warmly lit modern home interior",
    category: "Homes",
    readTime: "5 min read",
    title: "Lighting Scenes for Every Moment at Home",
    excerpt:
      "From morning routines to late-night wind-downs — how tunable smart lighting adapts to every hour of your day.",
  },
  {
    image: blog3,
    imageAlt: "Cafe interior with ambient lighting",
    category: "Hospitality",
    readTime: "4 min read",
    title: "Why Cafes Are Switching to Smart Lighting",
    excerpt:
      "Ambience is your most underrated asset. How MOI helps cafes automate the perfect mood, morning to night.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[#0f0f0f] py-[100px] px-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8632A]/10 via-transparent to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.3em] text-[#E8632A] uppercase mb-4">
              MOI Insights
            </span>
            <h1 className="text-4xl md:text-[52px] font-bold tracking-tight text-white max-w-[900px] mx-auto">
              Lighting ideas, design tips &amp; smart living
            </h1>
            <div className="relative mx-auto mt-8 h-px w-32">
              <div className="absolute inset-0 bg-primary/30 blur-md" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E8632A] to-transparent" />
            </div>
          </motion.div>
        </section>

        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {posts.map((post, i) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold tracking-wide text-[#E8632A] uppercase">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs font-medium text-[#E8632A]">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default Blog;
