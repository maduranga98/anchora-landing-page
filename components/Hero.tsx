"use client";

import { FiArrowRight, FiAlertTriangle, FiShield } from "react-icons/fi";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProblem = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-primary-navy via-primary-navy to-primary-teal overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-teal/20 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-accent-coral/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative section-container py-20 md:py-24 lg:py-32 text-center">
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-coral/20 border border-accent-coral/50 rounded-full text-accent-coral text-sm font-bold mb-8 animate-fadeIn">
          <FiAlertTriangle className="animate-pulse" />
          🚨 Early Warning System for Companies
        </div>

        {/* Main Headline */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 animate-fadeIn leading-tight"
          style={{ animationDelay: "0.1s" }}
        >
          Your Anchor in <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-teal to-accent-coral">
            Every Storm
          </span>
        </h1>

        {/* Powerful Subheadline */}
        <div
          className="max-w-4xl mx-auto mb-10 md:mb-12 lg:mb-14 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold mb-4">
            The problems your employees see every day-
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-accent-coral font-bold mb-6">
            but never tell you-are destroying your company from within.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 lg:p-8 border border-white/20 max-w-3xl mx-auto">
            <p className="text-sm md:text-base lg:text-lg text-white/90 mb-3">
              <span className="font-bold">
                Harassment. Fraud. Safety violations. Corruption.
              </span>
              <br />
              Your employees know.{" "}
              <span className="text-accent-coral font-bold">
                But they're not telling you.
              </span>
            </p>
            <p className="text-sm md:text-base text-white/80">
              By the time YOU find out, it's already a lawsuit, media scandal,
              or criminal investigation.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fadeIn mb-12 md:mb-16 lg:mb-20"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={scrollToContact}
            className="group px-6 md:px-8 py-3 md:py-4 bg-accent-coral text-white rounded-lg font-bold text-sm md:text-base hover:bg-accent-coral/90 transition-all duration-300 shadow-large flex items-center gap-2 hover:scale-105"
          >
            <FiShield />
            Protect Your Company Now
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToProblem}
            className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary-navy rounded-lg font-bold text-sm md:text-base hover:bg-gray-100 transition-all duration-300 shadow-large hover:scale-105"
          >
            See What You're Missing
          </button>
        </div>

        {/* Stats with Impact */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:border-primary-teal/50 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-accent-coral mb-2">
              $1
            </div>
            <div className="text-gray-300 font-medium text-sm md:text-base">
              per employee/month
            </div>
            <div className="text-xs md:text-sm text-white/70 mt-2">
              vs. $75K-$300K per lawsuit
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:border-primary-teal/50 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-primary-teal mb-2">
              100%
            </div>
            <div className="text-gray-300 font-medium text-sm md:text-base">
              Anonymous Protection
            </div>
            <div className="text-xs md:text-sm text-white/70 mt-2">
              Even admins can't identify users
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:border-primary-teal/50 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-primary-teal mb-2">
              24hrs
            </div>
            <div className="text-gray-300 font-medium text-sm md:text-base">
              Setup Time
            </div>
            <div className="text-xs md:text-sm text-white/70 mt-2">
              Start protecting immediately
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
