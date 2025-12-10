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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* SOLUTION 1: Remove the background image entirely or use abstract geometric patterns */}
      {/* Instead of a mismatched stock image, use CSS gradients and shapes */}

      {/* Primary gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-navy via-primary-navy/95 to-primary-teal/90"></div>

      {/* Animated geometric shapes - better than stock photo */}
      <div className="absolute inset-0 overflow-hidden -z-5" aria-hidden="true">
        {/* Large teal circle - top left */}
        <div
          className="absolute w-[500px] h-[500px] bg-primary-teal/20 rounded-full blur-3xl -top-40 -left-40 animate-pulse"
          style={{ willChange: "opacity", animationDuration: "4s" }}
        ></div>

        {/* Coral accent - bottom right */}
        <div
          className="absolute w-[600px] h-[600px] bg-accent-coral/15 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse"
          style={{
            animationDelay: "2s",
            willChange: "opacity",
            animationDuration: "6s",
          }}
        ></div>

        {/* Additional accent - middle */}
        <div
          className="absolute w-[400px] h-[400px] bg-primary-teal/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{
            animationDelay: "1s",
            willChange: "opacity",
            animationDuration: "5s",
          }}
        ></div>

        {/* Subtle grid overlay for tech feel */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1abc9c 1px, transparent 1px),
              linear-gradient(to bottom, #1abc9c 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative section-container py-20 md:py-24 lg:py-32 text-center z-10">
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-coral/20 border border-accent-coral/50 rounded-full text-accent-coral text-sm font-bold mb-8 animate-fadeIn backdrop-blur-sm">
          <FiAlertTriangle className="animate-pulse" />
          Early Warning System for Companies
        </div>

        {/* Main Headline */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 animate-fadeIn leading-tight"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal via-white to-primary-teal">
            Where Every Voice Matters
          </span>
        </h1>

        {/* Powerful Subheadline */}
        <div
          className="max-w-4xl mx-auto mb-10 md:mb-12 lg:mb-14 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold mb-4">
            The problems your employees see every day—
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-accent-coral font-bold mb-6">
            but never tell you—are destroying your company from within.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 lg:p-8 border border-white/20 max-w-3xl mx-auto shadow-2xl">
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
            className="group px-6 md:px-8 py-3 md:py-4 bg-accent-coral text-white rounded-lg font-bold text-sm md:text-base hover:bg-accent-coral/90 transition-all duration-300 shadow-2xl flex items-center gap-2 hover:scale-105 hover:shadow-accent-coral/50"
          >
            <FiShield />
            Protect Your Company Now
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToProblem}
            className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary-navy rounded-lg font-bold text-sm md:text-base hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
          >
            See What You're Missing
          </button>
        </div>

        {/* Stats with Impact */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 hover:border-primary-teal/50 transition-all hover:bg-white/15 shadow-xl">
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
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 hover:border-primary-teal/50 transition-all hover:bg-white/15 shadow-xl">
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
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 hover:border-primary-teal/50 transition-all hover:bg-white/15 shadow-xl">
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
    </section>
  );
}
