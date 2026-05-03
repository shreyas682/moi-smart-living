import { Calendar } from "lucide-react";
import blogSmartHome from "@/assets/blog-smart-home.jpg";
import blogLedAutomation from "@/assets/blog-led-automation.jpg";
import blogSmartSwitch from "@/assets/blog-smart-switch.jpg";

const posts = [
  {
    title: "The Future of Smart Home Automation in 2026",
    excerpt: "Discover how wireless automation is transforming modern living spaces with intelligent IoT devices.",
    image: blogSmartHome,
    date: "March 5, 2026",
  },
  {
    title: "How Smart LED Controllers Save Energy",
    excerpt: "Learn how intelligent lighting systems reduce electricity costs while enhancing ambiance.",
    image: blogLedAutomation,
    date: "February 20, 2026",
  },
  {
    title: "Why Smart Switches Are the First Step to Home Automation",
    excerpt: "A beginner's guide to upgrading your home with smart switches and connected devices.",
    image: blogSmartSwitch,
    date: "January 15, 2026",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="section-divider max-w-4xl mx-auto mb-24" />
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          MOI Smart Home <span className="text-gradient-blue">Blog</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Insights, guides, and trends in smart home automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <a
              key={post.title}
              href="#"
              className="group card-neon rounded-xl overflow-hidden animate-fade-in-up block"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={14} className="text-primary" />
                  {post.date}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
