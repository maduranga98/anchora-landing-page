import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
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
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// Icon mapping for blog posts
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
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

  return {
    title: `${post.title} - Anchora Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);
  const IconComponent = iconMap[post.icon] || FiFileText;

  // Create JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
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
                className={`inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r ${post.color} text-white rounded-xl mb-8 shadow-lg`}
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
              <div className="bg-linear-to-r from-primary-teal/5 to-transparent border-l-4 border-primary-teal pl-6 pr-6 py-6 mb-10 rounded-r-lg">
                <p className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed">
                  {post.excerpt}
                </p>
                bg-linear-to-r
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-8 text-base text-text-tertiary pb-8 border-b-2 border-border-light">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-primary-teal to-primary-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-base">
                      {post.author.name}
                    </p>
                    <p className="text-sm text-text-tertiary">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-5 h-5" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-background-light text-text-primary rounded-full text-sm font-medium border-2 border-border-light hover:border-primary-teal hover:bg-primary-teal/5 transition-all"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 mb-16">
              {/* Main Content - USING REACTMARKDOWN */}
              <div className="min-w-0">
                <div
                  className="prose prose-xl max-w-none
                    prose-headings:text-text-primary prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-24
                    prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8 prose-h1:leading-[1.2] prose-h1:font-extrabold
                    prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-primary-teal/20 prose-h2:font-extrabold prose-h2:leading-snug
                    prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-5 prose-h3:text-primary-navy prose-h3:font-bold prose-h3:leading-snug
                    prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-text-primary prose-h4:font-bold
                    prose-p:text-text-secondary prose-p:leading-[1.9] prose-p:mb-6 prose-p:text-lg prose-p:font-normal
                    prose-a:text-primary-teal prose-a:no-underline prose-a:font-semibold prose-a:border-b-2 prose-a:border-primary-teal/30 hover:prose-a:border-primary-teal hover:prose-a:bg-primary-teal/5 prose-a:transition-all prose-a:duration-200 prose-a:px-1
                    prose-strong:text-text-primary prose-strong:font-bold
                    prose-em:text-text-primary prose-em:italic prose-em:font-medium
                    prose-ul:my-8 prose-ul:space-y-4 prose-ul:pl-6
                    prose-ol:my-8 prose-ol:space-y-4 prose-ol:pl-6
                    prose-li:text-text-secondary prose-li:leading-[1.8] prose-li:text-lg prose-li:pl-3 prose-li:mb-3
                    prose-li::marker:text-primary-teal prose-li::marker:font-bold prose-li::marker:text-xl
                    prose-blockquote:border-l-4 prose-blockquote:border-primary-teal prose-blockquote:bg-linear-to-r prose-blockquote:from-primary-teal/10 prose-blockquote:to-primary-teal/5 prose-blockquote:pl-8 prose-blockquote:pr-6 prose-blockquote:py-8 prose-blockquote:my-10 prose-blockquote:italic prose-blockquote:text-text-primary prose-blockquote:rounded-r-xl prose-blockquote:shadow-lg prose-blockquote:text-xl prose-blockquote:font-medium
                    prose-code:text-primary-teal prose-code:bg-primary-teal/5 prose-code:border prose-code:border-primary-teal/20 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-base prose-code:font-semibold prose-code:before:content-[''] prose-code:after:content-['']
                    prose-pre:bg-linear-to-br prose-pre:from-gray-900 prose-pre:to-gray-800 prose-pre:text-gray-100 prose-pre:p-8 prose-pre:rounded-2xl prose-pre:shadow-2xl prose-pre:my-10 prose-pre:overflow-x-auto prose-pre:border prose-pre:border-gray-700
                    prose-hr:border-border-light prose-hr:my-16 prose-hr:border-2
                    prose-table:w-full prose-table:border-collapse prose-table:my-8
                    prose-th:bg-primary-teal/10 prose-th:border prose-th:border-border-light prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:text-text-primary
                    prose-td:border prose-td:border-border-light prose-td:p-4 prose-td:text-text-secondary
                    prose-img:rounded-xl prose-img:shadow-xl prose-img:my-10"
                >
                  bg-linear-to-r
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Table of Contents - Sticky Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <div className="bg-linear-to-br from-background-light to-white border-2 border-border-light rounded-2xl p-6 shadow-lg">
                    <h3 className="text-sm font-bold text-primary-teal uppercase tracking-wide mb-4 flex items-center gap-2">
                      <FiFileText className="w-4 h-4" />
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {extractHeadings(post.content).map((heading, index) => (
                        <a
                          key={index}
                          href={`#${heading.id}`}
                          className={`block text-sm hover:text-primary-teal hover:bg-primary-teal/5 transition-all px-3 py-2 rounded-lg ${
                            heading.level === 2
                              ? "font-bold text-text-primary"
                              : heading.level === 3
                              ? "text-text-secondary pl-6"
                              : "text-text-tertiary pl-9"
                          }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>
            </div>

            {/* Share Section */}
            {/* <div className="border-t-2 border-b-2 border-border-light py-8 mb-16">
              <div className="flex items-center justify-between">
                <p className="text-text-primary font-bold text-lg">
                  Found this helpful? Share it with your network.
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-primary-teal text-white rounded-lg hover:bg-primary-teal/90 transition-colors font-semibold flex items-center gap-2">
                    <FiShare2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="px-6 py-3 bg-background-light text-text-primary rounded-lg hover:bg-border-light transition-colors font-semibold flex items-center gap-2 border-2 border-border-light">
                    <FiBookmark className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </div>
            </div> */}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-linear-to-b from-background-light to-white py-16">
              <div className="section-container max-w-4xl">
                <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center gap-3">
                  <FiArrowRight className="w-8 h-8 text-primary-teal" />
                  Continue Reading
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => {
                    const RelatedIconComponent =
                      iconMap[relatedPost.icon] || FiFileText;
                    return (
                      <Link
                        key={relatedPost.slug}
                        href={`/blogs/${relatedPost.slug}`}
                      >
                        <article className="bg-white border-2 border-border-light rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary-teal transition-all duration-300 h-full group">
                          {/* Category Header */}
                          <div
                            className={`bg-linear-to-r ${relatedPost.color} p-4`}
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
            </div>
          )}
        </article>

        <Footer />
      </main>
    </>
  );
}

// Extract headings from markdown for table of contents
function extractHeadings(
  markdown: string
): Array<{ text: string; id: string; level: number }> {
  const headings: Array<{ text: string; id: string; level: number }> = [];
  const lines = markdown.split("\n");

  for (const line of lines) {
    // Match markdown headings (## Heading or ### Heading, but skip # which is the main title)
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      headings.push({ text, id, level });
    }
  }

  return headings;
}
