import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
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
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

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
      title: "Blog Post Not Found - VoxWel",
      description: "The requested blog post could not be found.",
    };
  }

  const seoTitle = post.metaTitle || post.title;
  const seoDescription = post.metaDescription || post.excerpt;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `https://voxwel.com/blogs/${post.slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: "article",
      url: `https://voxwel.com/blogs/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: "https://voxwel.com/og-image.png",
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
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
    "@type": "Article",
    headline: post.metaTitle || post.title,
    description: post.excerpt,
    url: `https://voxwel.com/blogs/${post.slug}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Organization",
      name: "VoxWel Team",
      url: "https://voxwel.com",
    },
    publisher: {
      "@type": "Organization",
      name: "VoxWel",
      logo: {
        "@type": "ImageObject",
        url: "https://voxwel.com/voxwel1.avif",
      },
    },
    image: "https://voxwel.com/og-image.png",
    keywords: post.tags.join(", "),
    articleSection: post.category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://voxwel.com/blogs/${post.slug}`,
    },
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://voxwel.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://voxwel.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://voxwel.com/blogs/${post.slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen w-full overflow-x-hidden bg-background-white">
        <Navigation />

        <article className="pt-20 sm:pt-24 pb-12 sm:pb-16">
          <div className="section-container max-w-4xl">
            {/* Back Link */}
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-primary-teal hover:underline text-sm mb-6 sm:mb-8"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>

            {/* Article Header */}
            <header className="mb-8 sm:mb-12 md:mb-16">
              {/* Category Badge */}
              <div
                className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r ${post.color} text-white rounded-xl mb-5 sm:mb-8 shadow-lg`}
              >
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5 sm:mb-8 leading-[1.2] tracking-tight">
                {post.title}
              </h1>

              {/* Excerpt with enhanced styling */}
              <div className="bg-linear-to-r from-primary-teal/5 to-transparent border-l-4 border-primary-teal pl-4 sm:pl-6 pr-4 sm:pr-6 py-4 sm:py-6 mb-6 sm:mb-10 rounded-r-lg">
                <p className="text-base sm:text-lg md:text-xl text-text-primary font-medium leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-text-tertiary pb-6 sm:pb-8 border-b-2 border-border-light">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 bg-linear-to-br from-primary-teal to-primary-navy rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm sm:text-base">
                      {post.author.name}
                    </p>
                    <p className="text-xs sm:text-sm text-text-tertiary">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <FiCalendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <FiClock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-light text-text-primary rounded-full text-xs sm:text-sm font-medium border-2 border-border-light hover:border-primary-teal hover:bg-primary-teal/5 transition-all"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12 mb-12 sm:mb-16">
              {/* Main Content - USING REACTMARKDOWN */}
              <div className="min-w-0">
                <div
                  className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none
                    prose-headings:text-text-primary prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-24
                    prose-h1:text-2xl sm:prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mt-8 md:prose-h1:mt-16 prose-h1:mb-5 md:prose-h1:mb-8 prose-h1:leading-[1.2] prose-h1:font-extrabold
                    prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-8 md:prose-h2:mt-16 prose-h2:mb-4 md:prose-h2:mb-6 prose-h2:pb-3 md:prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-primary-teal/20 prose-h2:font-extrabold prose-h2:leading-snug
                    prose-h3:text-lg sm:prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-6 md:prose-h3:mt-12 prose-h3:mb-3 md:prose-h3:mb-5 prose-h3:text-primary-navy prose-h3:font-bold prose-h3:leading-snug
                    prose-h4:text-base sm:prose-h4:text-lg md:prose-h4:text-xl prose-h4:mt-5 md:prose-h4:mt-8 prose-h4:mb-3 md:prose-h4:mb-4 prose-h4:text-text-primary prose-h4:font-bold
                    prose-p:text-text-secondary prose-p:leading-[1.8] prose-p:mb-4 md:prose-p:mb-6 prose-p:font-normal
                    prose-a:text-primary-teal prose-a:no-underline prose-a:font-semibold prose-a:border-b-2 prose-a:border-primary-teal/30 hover:prose-a:border-primary-teal hover:prose-a:bg-primary-teal/5 prose-a:transition-all prose-a:duration-200 prose-a:px-1
                    prose-strong:text-text-primary prose-strong:font-bold
                    prose-em:text-text-primary prose-em:italic prose-em:font-medium
                    prose-ul:my-5 md:prose-ul:my-8 prose-ul:space-y-2 md:prose-ul:space-y-4 prose-ul:pl-5 md:prose-ul:pl-6
                    prose-ol:my-5 md:prose-ol:my-8 prose-ol:space-y-2 md:prose-ol:space-y-4 prose-ol:pl-5 md:prose-ol:pl-6
                    prose-li:text-text-secondary prose-li:leading-[1.7] prose-li:pl-2 md:prose-li:pl-3 prose-li:mb-2 md:prose-li:mb-3
                    prose-li::marker:text-primary-teal prose-li::marker:font-bold
                    prose-blockquote:border-l-4 prose-blockquote:border-primary-teal prose-blockquote:bg-linear-to-r prose-blockquote:from-primary-teal/10 prose-blockquote:to-primary-teal/5 prose-blockquote:pl-4 md:prose-blockquote:pl-8 prose-blockquote:pr-4 md:prose-blockquote:pr-6 prose-blockquote:py-4 md:prose-blockquote:py-8 prose-blockquote:my-6 md:prose-blockquote:my-10 prose-blockquote:italic prose-blockquote:text-text-primary prose-blockquote:rounded-r-xl prose-blockquote:shadow-lg prose-blockquote:font-medium
                    prose-code:text-primary-teal prose-code:bg-primary-teal/5 prose-code:border prose-code:border-primary-teal/20 prose-code:px-1.5 md:prose-code:px-2 prose-code:py-0.5 md:prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:font-semibold prose-code:before:content-[''] prose-code:after:content-['']
                    prose-pre:bg-linear-to-br prose-pre:from-gray-900 prose-pre:to-gray-800 prose-pre:text-gray-100 prose-pre:p-4 md:prose-pre:p-8 prose-pre:rounded-xl md:prose-pre:rounded-2xl prose-pre:shadow-2xl prose-pre:my-6 md:prose-pre:my-10 prose-pre:overflow-x-auto prose-pre:border prose-pre:border-gray-700
                    prose-hr:border-border-light prose-hr:my-8 md:prose-hr:my-16 prose-hr:border-2
                    prose-table:w-full prose-table:border-collapse prose-table:my-5 md:prose-table:my-8
                    prose-th:bg-primary-teal/10 prose-th:border prose-th:border-border-light prose-th:p-2 md:prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:text-text-primary
                    prose-td:border prose-td:border-border-light prose-td:p-2 md:prose-td:p-4 prose-td:text-text-secondary
                    prose-img:rounded-xl prose-img:shadow-xl prose-img:my-6 md:prose-img:my-10"
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]}>
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Table of Contents - Sticky Sidebar */}
              <TableOfContents headings={extractHeadings(post.content)} />
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
            <div className="bg-linear-to-b from-background-light to-white py-10 sm:py-16">
              <div className="section-container max-w-4xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-5 sm:mb-8 flex items-center gap-2 sm:gap-3">
                  <FiArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary-teal shrink-0" />
                  Continue Reading
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                          <div className="p-4 sm:p-6">
                            <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2 sm:mb-3 group-hover:text-primary-teal transition-colors leading-tight">
                              {relatedPost.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-text-secondary mb-3 sm:mb-4 line-clamp-3">
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
                            <div className="flex items-center gap-2 text-primary-teal font-semibold text-xs sm:text-sm mt-3 sm:mt-4 group-hover:gap-3 transition-all">
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
  markdown: string,
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
