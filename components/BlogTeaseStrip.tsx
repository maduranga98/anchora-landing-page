"use client";

import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import { blogPosts } from "@/data/blogPosts";

export default function BlogTeaseStrip() {
  // Get the 3 most recent blog posts
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-900">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-500/50 rounded-full text-teal-400 text-sm font-bold mb-6 backdrop-blur-sm">
            📚 Workplace Crisis Resources
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Want to dig deeper?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Learn more about the hidden costs of workplace problems
          </p>
        </div>

        {/* Blog Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group"
            >
              <div className="h-full bg-slate-800 rounded-2xl p-6 md:p-7 border-2 border-slate-700 hover:border-teal-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                      blog.category === "Compliance"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : blog.category === "Best Practices"
                        ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        : blog.category === "Case Study"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <FiClock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors leading-tight line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-base text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  {/* Author & Date */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {blog.author.name.charAt(0)}
                      </div>
                      <div className="text-sm text-gray-400">
                        {blog.author.name}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs ml-10">
                      <FiCalendar className="w-3 h-3" />
                      <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <span className="text-teal-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500/10 hover:bg-teal-500/20 border-2 border-teal-500/30 hover:border-teal-500/50 rounded-xl text-teal-400 hover:text-teal-300 font-bold text-lg transition-all group"
          >
            See All Articles
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
