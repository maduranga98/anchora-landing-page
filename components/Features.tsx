"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Palette,
  MessageCircle,
  AlertTriangle,
  BarChart2,
  Shield,
  GitBranch,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

/**
 * FULL-SCREEN HERO CAROUSEL
 *
 * Ultra-professional design:
 * - MASSIVE full-width screenshots
 * - Text overlay on images
 * - Cinematic presentation
 * - Like Apple/Tesla product pages
 *
 * Maximum visual impact!
 */

export default function FeaturesHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // All 6 features with full details
  const features = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Creative Wall",
      category: "Employee Engagement",
      tagline: "Celebrate Every Win",
      description:
        "Build a positive workplace culture through public recognition. Team achievements, milestone celebrations, and success stories all in one place.",
      image: "/screenshots/creative-wall.png",
      color: "#1ABC9C",
      benefits: [
        "Public Recognition",
        "Milestone Tracking",
        "Culture Building",
        "Boost Morale",
      ],
      stats: [
        { label: "Engagement", value: "↑ 85%" },
        { label: "Morale", value: "↑ 92%" },
      ],
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Problems & Solutions Wall",
      category: "Crisis Prevention",
      tagline: "Anonymous, Secure Reporting",
      description:
        "Military-grade encrypted anonymous reporting. Report harassment, fraud, safety violations without fear. Prevent lawsuits before they happen.",
      image: "/screenshots/problems-wall.png",
      color: "#EF4444",
      benefits: [
        "100% Anonymous",
        "Military Encryption",
        "Auto-Escalation",
        "Legal Protection",
      ],
      stats: [
        { label: "Anonymity", value: "100%" },
        { label: "Response", value: "< 24hrs" },
      ],
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "Team Discussions Wall",
      category: "Collaboration",
      tagline: "Real-Time Communication",
      description:
        "Modern team chat integrated with crisis prevention. Department channels, file sharing, threaded conversations, and real-time notifications.",
      image: "/screenshots/discussions-wall.png",
      color: "#3B82F6",
      benefits: [
        "Real-Time Chat",
        "File Sharing",
        "Department Channels",
        "Thread Discussions",
      ],
      stats: [
        { label: "Response Rate", value: "95%" },
        { label: "Collaboration", value: "↑ 78%" },
      ],
    },
    {
      icon: <BarChart2 className="w-10 h-10" />,
      title: "Dashboard Analytics",
      category: "Insights & Reporting",
      tagline: "Real-Time Intelligence",
      description:
        "Track employee happiness scores, engagement metrics, and sentiment analysis across departments. Make data-driven decisions.",
      image: "/screenshots/dashboard-analytics.png",
      color: "#A855F7",
      benefits: [
        "Happiness Tracking",
        "Engagement Metrics",
        "Sentiment Analysis",
        "Department View",
      ],
      stats: [
        { label: "Data Points", value: "Real-time" },
        { label: "Accuracy", value: "98%" },
      ],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Admin Dashboard",
      category: "Crisis Management",
      tagline: "Command Center",
      description:
        "Centralized crisis prevention headquarters. Monitor all issues, track priorities, route problems instantly. Complete workplace oversight.",
      image: "/screenshots/admin-dashboard.png",
      color: "#6366F1",
      benefits: [
        "Centralized View",
        "Priority Tracking",
        "Smart Routing",
        "Complete Audit",
      ],
      stats: [
        { label: "Visibility", value: "360°" },
        { label: "Control", value: "Total" },
      ],
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: "Workflow Management",
      category: "Process Control",
      tagline: "From Open to Resolved",
      description:
        "7-state workflow system ensures accountability. Track status, assign priorities, route to departments from report to resolution.",
      image: "/screenshots/workflow-management.png",
      color: "#10B981",
      benefits: [
        "7-State Workflow",
        "4 Priority Levels",
        "Status Tracking",
        "Full Accountability",
      ],
      stats: [
        { label: "Resolution", value: "99%" },
        { label: "Avg. Time", value: "3.2 days" },
      ],
    },
  ];

  const totalSlides = features.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  }, [totalSlides]);

  const currentFeature = features[currentSlide];

  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-xs font-semibold text-[#1ABC9C] uppercase tracking-wide mb-3">
            🛡️ Complete Protection System
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See VoxWel in Action
          </h3>
          <p className="text-lg text-gray-600">
            Explore all features with full-screen previews
          </p>
        </div>

        {/* Main Hero Carousel */}
        <div className="relative max-w-[1600px] mx-auto">
          {/* Full-Screen Carousel Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 min-h-[500px] md:min-h-[600px]">
            {/* Background Image (Full Size) */}
            <div className="absolute inset-0">
              <Image
                src={currentFeature.image}
                alt={currentFeature.title}
                fill
                className="object-cover object-top"
                priority={currentSlide === 0}
                quality={100}
              />
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full min-h-[500px] md:min-h-[600px] flex items-center">
              <div className="w-full px-6 md:px-12 lg:px-16 py-12">
                <div className="max-w-2xl">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className="inline-block p-3 rounded-xl backdrop-blur-md"
                      style={{ backgroundColor: `${currentFeature.color}30` }}
                    >
                      <div style={{ color: currentFeature.color }}>
                        {currentFeature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div
                    className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-3 backdrop-blur-md"
                    style={{
                      backgroundColor: `${currentFeature.color}40`,
                      color: currentFeature.color,
                    }}
                  >
                    {currentFeature.category}
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                    {currentFeature.title}
                  </h4>

                  {/* Tagline */}
                  <p className="text-lg md:text-xl font-semibold text-white/90 mb-4">
                    {currentFeature.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed">
                    {currentFeature.description}
                  </p>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {currentFeature.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: currentFeature.color }}
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-white font-medium text-xs">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4">
                    {currentFeature.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3"
                      >
                        <div className="text-2xl font-bold text-white mb-0.5">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/70">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slide Counter Badge */}
              <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md rounded-full px-6 py-3">
                <span className="text-white font-bold text-lg">
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls Below */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
            {/* Progress Dots */}
            <div className="flex items-center gap-3">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                  aria-label={`Go to ${feature.title}`}
                >
                  <div
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide ? "w-16 h-4" : "w-4 h-4 hover:w-6"
                    }`}
                    style={{
                      backgroundColor:
                        index === currentSlide ? feature.color : "#D1D5DB",
                    }}
                  />
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {feature.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Control Buttons */}
            <div className="flex items-center gap-3">
              {/* Play/Pause */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-4 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-lg"
                aria-label={isAutoPlaying ? "Pause" : "Play"}
              >
                {isAutoPlaying ? (
                  <Pause className="w-6 h-6 text-gray-700" />
                ) : (
                  <Play className="w-6 h-6 text-gray-700" />
                )}
              </button>

              {/* Previous */}
              <button
                onClick={prevSlide}
                className="p-4 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="Previous feature"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              {/* Next */}
              <button
                onClick={nextSlide}
                className="p-4 rounded-full bg-[#1ABC9C] hover:bg-[#16A085] transition-colors shadow-lg"
                aria-label="Next feature"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Features Grid Below */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Plus Everything Else You Need
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { emoji: "🔒", label: "Military-Grade Encryption" },
              { emoji: "📱", label: "QR Code Onboarding" },
              { emoji: "📎", label: "File Attachments" },
              { emoji: "👥", label: "Department Management" },
              { emoji: "❤️", label: "Reactions & Feedback" },
              { emoji: "🔐", label: "Role-Based Access" },
              { emoji: "📧", label: "Email Notifications" },
              { emoji: "📱", label: "Mobile Responsive" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div className="text-sm font-medium text-gray-700">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#1ABC9C] to-[#16A085] rounded-3xl p-8 md:p-12 shadow-2xl text-white max-w-5xl mx-auto">
          <h4 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Company?
          </h4>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Start preventing workplace crises today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-[#1ABC9C] rounded-full font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              See Pricing
            </a>
            <a
              href="#contact"
              className="inline-block px-8 md:px-10 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-colors"
            >
              Request Demo
            </a>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-6">
            14-day free trial • No credit card required • Setup in 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
