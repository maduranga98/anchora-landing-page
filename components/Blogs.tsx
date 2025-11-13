"use client";

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

export default function Blogs() {
  const blogPosts = [
    {
      icon: <FiAlertTriangle className="w-6 h-6" />,
      category: "Case Study",
      title: "How One Anonymous Tip Saved a Company $250K",
      excerpt:
        "Discover how a manufacturing company caught an expense fraud scheme early through Anchora's anonymous reporting—before it escalated to a police investigation.",
      date: "Nov 10, 2024",
      readTime: "5 min read",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      category: "Best Practices",
      title: "The Real Cost of Workplace Harassment (And How to Prevent It)",
      excerpt:
        "Breaking down the financial and reputational impact of harassment lawsuits, plus proven strategies to create a safer workplace culture.",
      date: "Nov 8, 2024",
      readTime: "7 min read",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      category: "Industry Insights",
      title: "Why Traditional HR Hotlines Fail (And What Works Instead)",
      excerpt:
        "A deep dive into why employees don't trust traditional reporting channels—and how modern anonymous platforms solve the problem.",
      date: "Nov 5, 2024",
      readTime: "6 min read",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <FiFileText className="w-6 h-6" />,
      category: "Compliance",
      title: "Whistleblower Protection Laws: What Every Company Must Know",
      excerpt:
        "Navigate federal and state whistleblower protection requirements with this comprehensive guide for HR and legal teams.",
      date: "Nov 1, 2024",
      readTime: "8 min read",
      color: "from-green-500 to-green-700",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      category: "Security",
      title: "Military-Grade Anonymity: How Anchora Protects User Identity",
      excerpt:
        "An inside look at the encryption, security protocols, and technical architecture that makes true anonymity possible.",
      date: "Oct 28, 2024",
      readTime: "6 min read",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      category: "Culture",
      title: "Building a Speak-Up Culture: Lessons from Top Companies",
      excerpt:
        "How industry leaders create environments where employees feel safe reporting issues—before they become crises.",
      date: "Oct 25, 2024",
      readTime: "5 min read",
      color: "from-orange-500 to-orange-700",
    },
  ];

  return (
    <section
      id="blogs"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary-teal uppercase tracking-wide mb-4">
            📚 Insights & Resources
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
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border-light group cursor-pointer"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${post.color} p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
                    {post.icon}
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
                    <span>{post.date}</span>
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
          ))}
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
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-teal text-white rounded-lg font-bold text-base md:text-lg hover:bg-primary-teal/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FiShield />
            Get Started with Anchora
          </a>
        </div>
      </div>
    </section>
  );
}
