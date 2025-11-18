import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiBookOpen,
  FiAlertTriangle,
  FiShield,
  FiTrendingUp,
  FiFileText,
} from "react-icons/fi";
import { blogPosts } from "@/data/blogPosts";

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  FiAlertTriangle: FiAlertTriangle,
  FiShield: FiShield,
  FiTrendingUp: FiTrendingUp,
  FiFileText: FiFileText,
};

// SEO Metadata for the blogs listing page
export const metadata: Metadata = {
  title: "Blog - Workplace Safety & Compliance Insights | Anchora",
  description:
    "Expert insights on workplace harassment prevention, fraud detection, whistleblower protection, and anonymous reporting. Learn how to protect your company with proven strategies.",
  keywords: [
    "workplace safety blog",
    "harassment prevention",
    "fraud detection",
    "whistleblower protection",
    "compliance guide",
    "anonymous reporting",
    "HR best practices",
    "workplace culture",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anchora.com/blogs",
    title: "Blog - Workplace Safety & Compliance Insights | Anchora",
    description:
      "Expert insights on workplace harassment prevention, fraud detection, and anonymous reporting.",
    siteName: "Anchora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Workplace Safety & Compliance Insights | Anchora",
    description:
      "Expert insights on workplace harassment prevention, fraud detection, and anonymous reporting.",
  },
  alternates: {
    canonical: "https://anchora.com/blogs",
  },
};

export default function BlogsPage() {
  // Create JSON-LD structured data for the blog listing page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Anchora Blog",
    description:
      "Expert insights on workplace safety, harassment prevention, fraud detection, and compliance.",
    url: "https://anchora.com/blogs",
    publisher: {
      "@type": "Organization",
      name: "Anchora",
      logo: {
        "@type": "ImageObject",
        url: "https://anchora.com/icon.png",
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: new Date(post.date).toISOString(),
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
      },
      url: `https://anchora.com/blogs/${post.slug}`,
      keywords: post.tags.join(", "),
      articleSection: post.category,
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen w-full overflow-x-hidden bg-background-white">
        <Navigation />

      <div className="pt-24 pb-16">
        <div className="section-container">
          {/* Header with back link */}
          <div className="mb-12">
            <Link
              href="/"
              className="text-primary-teal hover:underline text-sm mb-4 inline-block"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary-teal uppercase tracking-wide mb-4">
              Insights & Resources
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Learn How to <span className="text-primary-teal">Protect</span> Your Company
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-4xl mx-auto">
              Expert insights, case studies, and best practices for creating safer,
              more transparent workplaces.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => {
              const IconComponent = iconMap[post.icon] || FiFileText;
              return (
                <Link key={index} href={`/blogs/${post.slug}`}>
                  <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border-light group cursor-pointer h-full">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${post.color} p-6`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-white uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-lg md:text-xl font-bold text-text-primary mb-3 group-hover:text-primary-teal transition-colors leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-sm md:text-base text-text-secondary mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-text-tertiary mb-4">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-3 h-3" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiClock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-primary-teal font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Read Article</span>
                        <FiArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-br from-primary-navy to-primary-teal rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiBookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Informed About Workplace Safety
              </h3>
              <p className="text-base md:text-lg text-white/90 mb-8">
                Get the latest insights, case studies, and best practices delivered
                to your inbox. No spam, just valuable content.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-coral"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-accent-coral text-white rounded-lg font-bold hover:bg-accent-coral/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>

              <p className="text-xs text-white/70 mt-4">
                Join 5,000+ HR professionals and business leaders
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-base md:text-lg text-text-secondary mb-6">
              Ready to protect your company from hidden workplace issues?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-teal text-white rounded-lg font-bold text-base md:text-lg hover:bg-primary-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FiShield />
              Get Started with Anchora
            </a>
          </div>
        </div>
      </div>

        <Footer />
      </main>
    </>
  );
}
