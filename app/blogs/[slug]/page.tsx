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
  FiBookmark,
  FiShare2,
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
            <header className="mb-16">
              {/* Category Badge */}
              <div
                className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${post.color} text-white rounded-xl mb-8 shadow-lg`}
              >
                <IconComponent className="w-6 h-6" />
                <span className="text-base font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-8 leading-[1.15] tracking-tight">
                {post.title}
              </h1>

              {/* Excerpt with enhanced styling */}
              <div className="bg-gradient-to-r from-primary-teal/5 to-transparent border-l-4 border-primary-teal pl-6 pr-6 py-6 mb-10 rounded-r-lg">
                <p className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-8 text-base text-text-tertiary pb-8 border-b-2 border-border-light">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-teal to-primary-navy rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-lg">
                      {post.author.name}
                    </div>
                    <div className="text-text-tertiary text-sm">
                      {post.author.role}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-background-light px-4 py-2 rounded-lg">
                  <FiCalendar className="w-5 h-5 text-primary-teal" />
                  <time dateTime={post.date} className="font-medium text-text-primary">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2 bg-background-light px-4 py-2 rounded-lg">
                  <FiClock className="w-5 h-5 text-primary-teal" />
                  <span className="font-medium text-text-primary">{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <div className="flex items-center gap-2 text-text-tertiary font-semibold text-sm uppercase tracking-wide">
                  <FiTag className="w-4 h-4" />
                  <span>Topics:</span>
                </div>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-background-light to-white border border-border-light text-text-primary rounded-lg text-sm font-semibold hover:bg-primary-teal/10 hover:text-primary-teal hover:border-primary-teal transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div className="relative">
              {/* Floating Actions */}
              <div className="hidden lg:block absolute -left-20 top-0">
                <div className="sticky top-32 flex flex-col gap-4">
                  <button
                    className="w-12 h-12 bg-white border-2 border-border-light rounded-full flex items-center justify-center hover:border-primary-teal hover:text-primary-teal transition-all shadow-sm hover:shadow-md"
                    title="Share article"
                  >
                    <FiShare2 className="w-5 h-5" />
                  </button>
                  <button
                    className="w-12 h-12 bg-white border-2 border-border-light rounded-full flex items-center justify-center hover:border-primary-teal hover:text-primary-teal transition-all shadow-sm hover:shadow-md"
                    title="Bookmark"
                  >
                    <FiBookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div
                className="prose prose-xl max-w-none
                  prose-headings:text-text-primary prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8 prose-h1:leading-tight
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border-light
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-5 prose-h3:text-primary-navy
                  prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-text-primary
                  prose-p:text-text-secondary prose-p:leading-loose prose-p:mb-8 prose-p:text-lg
                  prose-a:text-primary-teal prose-a:no-underline prose-a:font-semibold prose-a:border-b prose-a:border-primary-teal/30 hover:prose-a:border-primary-teal hover:prose-a:bg-primary-teal/5 prose-a:transition-all
                  prose-strong:text-text-primary prose-strong:font-bold prose-strong:bg-accent-coral/10 prose-strong:px-1 prose-strong:rounded
                  prose-em:text-text-primary prose-em:italic prose-em:font-medium
                  prose-ul:my-8 prose-ul:space-y-3
                  prose-ol:my-8 prose-ol:space-y-3
                  prose-li:text-text-secondary prose-li:leading-relaxed prose-li:text-lg prose-li:pl-2
                  prose-li::marker:text-primary-teal prose-li::marker:font-bold
                  prose-blockquote:border-l-4 prose-blockquote:border-primary-teal prose-blockquote:bg-primary-teal/5 prose-blockquote:pl-8 prose-blockquote:pr-6 prose-blockquote:py-6 prose-blockquote:my-10 prose-blockquote:italic prose-blockquote:text-text-primary prose-blockquote:rounded-r-lg prose-blockquote:shadow-sm
                  prose-code:text-primary-teal prose-code:bg-background-light prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-base prose-code:font-semibold
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:shadow-lg prose-pre:my-8 prose-pre:overflow-x-auto
                  prose-hr:border-border-light prose-hr:my-16 prose-hr:border-2"
                dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
              />
            </div>

            {/* Author Bio Section */}
            <div className="mt-20 pt-12 border-t-2 border-border-light">
              <h3 className="text-sm font-bold text-primary-teal uppercase tracking-wide mb-6">
                About the Author
              </h3>
              <div className="flex items-start gap-6 p-8 bg-gradient-to-br from-background-light to-white rounded-2xl border border-border-light shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-teal to-primary-navy rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {post.author.name.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-text-primary mb-2">
                    {post.author.name}
                  </h4>
                  <p className="text-primary-teal font-semibold mb-4">
                    {post.author.role}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {post.author.name} is a leading expert in workplace safety and compliance,
                    with over a decade of experience helping organizations build safer,
                    more transparent cultures. They specialize in anonymous reporting systems,
                    whistleblower protection, and fraud prevention strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 p-10 bg-gradient-to-br from-primary-navy via-primary-teal to-primary-navy rounded-3xl text-white shadow-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiShield className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Protect Your Company?
                </h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Deploy military-grade anonymous reporting in under 15 minutes.
                  Prevent lawsuits, fraud, and workplace disasters before they happen.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-white rounded-xl font-bold text-lg hover:bg-accent-coral/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FiShield className="w-5 h-5" />
                  Get Started with Anchora
                </a>
              </div>
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

// Enhanced markdown to HTML converter with better visual formatting
function formatMarkdown(markdown: string): string {
  let html = markdown;

  // Headers with anchor links for navigation
  html = html.replace(/^### (.*$)/gim, (match, title) => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return `<h3 id="${id}">${title}</h3>`;
  });
  html = html.replace(/^## (.*$)/gim, (match, title) => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return `<h2 id="${id}">${title}</h2>`;
  });
  html = html.replace(/^# (.*$)/gim, (match, title) => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return `<h1 id="${id}">${title}</h1>`;
  });

  // Bold text with highlight
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Italic text
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Links with security attributes
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Enhanced blockquotes with better styling
  html = html.replace(/^> (.*$)/gim, (match, quote) => {
    return `<blockquote><p>${quote}</p></blockquote>`;
  });

  // Unordered lists with proper spacing
  html = html.replace(/^\- (.*$)/gim, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");

  // Numbered lists
  html = html.replace(/^\d+\.\s+(.*$)/gim, "<oli>$1</oli>");
  html = html.replace(/(<oli>[\s\S]*?<\/oli>)/g, (match) => {
    return "<ol>" + match.replace(/<\/?oli>/g, (tag) => tag.replace("oli", "li")) + "</ol>";
  });

  // Horizontal rules as visual breaks
  html = html.replace(/^---$/gim, '<hr class="my-16" />');

  // Convert double line breaks to paragraph breaks
  html = html.replace(/\n\n/g, "</p><p>");
  html = `<p>${html}</p>`;

  // Clean up empty paragraphs and fix nesting
  html = html.replace(/<p><\/p>/g, "");
  html = html.replace(/<p>(<h[1-6])/g, "$1");
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, "$1");
  html = html.replace(/<p>(<ul>)/g, "$1");
  html = html.replace(/(<\/ul>)<\/p>/g, "$1");
  html = html.replace(/<p>(<ol>)/g, "$1");
  html = html.replace(/(<\/ol>)<\/p>/g, "$1");
  html = html.replace(/<p>(<blockquote>)/g, "$1");
  html = html.replace(/(<\/blockquote>)<\/p>/g, "$1");
  html = html.replace(/<p>(<hr)/g, "$1");
  html = html.replace(/\/><\/p>/g, "/>");

  // Fix blockquote paragraphs
  html = html.replace(/<blockquote>([^<])/g, "<blockquote><p>$1");
  html = html.replace(/([^>])<\/blockquote>/g, "$1</p></blockquote>");

  return html;
}
