import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiTag,
  FiArrowLeft,
  FiArrowRight,
  FiAlertTriangle,
  FiShield,
  FiTrendingUp,
  FiFileText,
} from "react-icons/fi";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getRelatedPosts,
} from "@/data/blogPosts";
import { notFound } from "next/navigation";

// Icon mapping for blog posts
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  FiAlertTriangle: FiAlertTriangle,
  FiShield: FiShield,
  FiTrendingUp: FiTrendingUp,
  FiFileText: FiFileText,
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found - Anchora",
      description: "The requested blog post could not be found.",
    };
  }

  const publishedTime = new Date(post.date).toISOString();
  const url = `https://anchora.com/blogs/${post.slug}`;

  return {
    title: `${post.title} | Anchora Blog`,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      "workplace safety",
      "anonymous reporting",
      "employee whistleblower",
      "HR compliance",
      "Anchora",
    ],
    authors: [{ name: post.author.name }],
    creator: post.author.name,
    publisher: "Anchora",
    openGraph: {
      type: "article",
      locale: "en_US",
      url: url,
      title: post.title,
      description: post.excerpt,
      siteName: "Anchora",
      publishedTime: publishedTime,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@anchora",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const IconComponent = iconMap[post.icon] || FiFileText;

  // Create JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://anchora.com/og-image.jpg`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Anchora",
      logo: {
        "@type": "ImageObject",
        url: "https://anchora.com/icon.png",
      },
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    timeRequired: post.readTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://anchora.com/blogs/${post.slug}`,
    },
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

        <article className="pt-24 pb-16">
          <div className="section-container max-w-4xl">
            {/* Back Link */}
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary-teal hover:underline text-sm mb-8"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              {/* Category Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${post.color} text-white rounded-lg mb-6`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-text-tertiary pb-8 border-b border-border-light">
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  <div>
                    <span className="font-semibold text-text-primary">
                      {post.author.name}
                    </span>
                    <span className="text-text-tertiary ml-1">
                      • {post.author.role}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <FiTag className="w-4 h-4 text-text-tertiary" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-background-light text-text-secondary rounded-full text-sm hover:bg-primary-teal/10 hover:text-primary-teal transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:text-text-primary prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary-teal prose-a:no-underline hover:prose-a:underline
                prose-strong:text-text-primary prose-strong:font-bold
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-text-secondary prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-primary-teal prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-text-secondary
                prose-code:text-primary-teal prose-code:bg-background-light prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-background-light prose-pre:p-4 prose-pre:rounded-lg
                prose-hr:border-border-light prose-hr:my-12"
              dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
            />

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary-navy to-primary-teal rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Protect Your Company?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Deploy military-grade anonymous reporting in under 15 minutes.
                Prevent lawsuits, fraud, and workplace disasters before they happen.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-coral text-white rounded-lg font-bold hover:bg-accent-coral/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FiShield />
                Get Started with Anchora
              </a>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="section-container mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => {
                  const RelatedIconComponent =
                    iconMap[relatedPost.icon] || FiFileText;
                  return (
                    <Link
                      key={relatedPost.slug}
                      href={`/blogs/${relatedPost.slug}`}
                      className="group"
                    >
                      <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border-light h-full">
                        {/* Header */}
                        <div
                          className={`bg-gradient-to-r ${relatedPost.color} p-4`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white">
                              <RelatedIconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold text-white uppercase tracking-wide">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-primary-teal transition-colors leading-tight">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-text-secondary mb-4 line-clamp-3">
                            {relatedPost.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center gap-3 text-xs text-text-tertiary">
                            <div className="flex items-center gap-1">
                              <FiClock className="w-3 h-3" />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>

                          {/* Read More */}
                          <div className="flex items-center gap-2 text-primary-teal font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                            <span>Read Article</span>
                            <FiArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </article>

        <Footer />
      </main>
    </>
  );
}

// Simple markdown to HTML converter
function formatMarkdown(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");

  // Unordered lists
  html = html.replace(/^\- (.*$)/gim, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");

  // Horizontal rules
  html = html.replace(/^---$/gim, "<hr>");

  // Paragraphs
  html = html.replace(/\n\n/g, "</p><p>");
  html = `<p>${html}</p>`;

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, "");
  html = html.replace(/<p>(<h[1-6]>)/g, "$1");
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, "$1");
  html = html.replace(/<p>(<ul>)/g, "$1");
  html = html.replace(/(<\/ul>)<\/p>/g, "$1");
  html = html.replace(/<p>(<blockquote>)/g, "$1");
  html = html.replace(/(<\/blockquote>)<\/p>/g, "$1");
  html = html.replace(/<p>(<hr>)<\/p>/g, "$1");

  return html;
}
