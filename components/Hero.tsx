"use client";

import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  // Problem statements that rotate around the CEO
  const problems = [
    {
      text: "Harassment lawsuits brewing...",
      shortText: "Harassment lawsuits...",
      color: "text-red-500",
      position: "top-right",
    },
    {
      text: "$250K fraud scheme...",
      shortText: "$250K fraud...",
      color: "text-orange-500",
      position: "left",
    },
    {
      text: "OSHA violations ignored...",
      shortText: "OSHA violations...",
      color: "text-red-600",
      position: "top-left",
    },
    {
      text: "Toxic culture spreading...",
      shortText: "Toxic culture...",
      color: "text-orange-600",
      position: "right",
    },
    {
      text: "Safety complaints silenced...",
      shortText: "Safety ignored...",
      color: "text-red-500",
      position: "bottom-left",
    },
    {
      text: "Employees planning to quit...",
      shortText: "Employee exodus...",
      color: "text-orange-500",
      position: "bottom-right",
    },
  ];

  // Rotate through problems every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProblemIndex((prev) => (prev + 1) % problems.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [problems.length]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Position classes for animated text - responsive
  const getPositionClasses = (position: string) => {
    const positions: { [key: string]: string } = {
      // Mobile: stack vertically at top
      // Tablet: spread to sides
      // Desktop: full positioning
      "top-left":
        "top-20 sm:top-24 md:top-28 lg:top-32 left-4 sm:left-6 md:left-12 lg:left-24 xl:left-32",
      "top-right":
        "top-20 sm:top-24 md:top-28 lg:top-32 right-4 sm:right-6 md:right-12 lg:right-24 xl:right-32",
      left: "top-[35%] sm:top-[38%] md:top-1/3 left-4 sm:left-6 md:left-12 lg:left-24 xl:left-32",
      right:
        "top-[35%] sm:top-[38%] md:top-1/3 right-4 sm:right-6 md:right-12 lg:right-24 xl:right-32",
      "bottom-left":
        "bottom-40 sm:bottom-44 md:bottom-48 lg:bottom-56 xl:bottom-64 left-4 sm:left-6 md:left-12 lg:left-24 xl:left-32",
      "bottom-right":
        "bottom-40 sm:bottom-44 md:bottom-48 lg:bottom-56 xl:bottom-64 right-4 sm:right-6 md:right-12 lg:right-24 xl:right-32",
    };
    return positions[position] || "";
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* CEO Image as Background - Full Screen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.avif"
          alt="Concerned CEO facing workplace problems"
          fill
          priority
          className="object-cover object-center sm:object-[center_20%] md:object-center"
          quality={95}
          sizes="100vw"
        />
        {/* Dark overlay for text readability - adjusted for mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 sm:from-slate-900/70 sm:via-slate-900/50 sm:to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-transparent to-slate-900/70 sm:from-slate-900/60 sm:via-transparent sm:to-slate-900/60" />
      </div>

      {/* Animated Problem Texts - Positioned around screen */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {problems.map((problem, index) => (
          <div
            key={index}
            className={`absolute ${getPositionClasses(
              problem.position
            )} transition-all duration-700 ${
              index === currentProblemIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div
              className={`${problem.color} font-bold text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl drop-shadow-2xl bg-slate-900/95 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-lg md:rounded-xl border-2 border-current shadow-2xl max-w-[calc(100vw-2rem)] sm:max-w-xs md:max-w-sm lg:max-w-md`}
              style={{
                textShadow: "0 0 20px rgba(0,0,0,0.9)",
              }}
            >
              {/* Show short text on mobile, full text on tablet+ */}
              <span className="inline sm:hidden">{problem.shortText}</span>
              <span className="hidden sm:inline">{problem.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Content - Tagline and Scroll */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="px-4 sm:px-6 md:px-8 text-center">
          <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
            {/* Main Heading - Responsive sizing */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl px-2">
              These problems are happening{" "}
              <span className="text-teal-400 block sm:inline mt-1 sm:mt-0">
                right now.
              </span>
            </h1>

            {/* Subheading - Responsive sizing */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 font-medium drop-shadow-2xl px-2">
              You just don't know it yet.
            </p>
          </div>

          {/* Scroll Indicator - Adjusted for mobile */}
          <button
            onClick={scrollToNext}
            className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 animate-bounce cursor-pointer group inline-flex flex-col items-center gap-1.5 sm:gap-2"
            aria-label="Scroll to next section"
          >
            <span className="text-xs sm:text-sm md:text-base text-gray-300 group-hover:text-teal-400 transition-colors drop-shadow-lg font-medium">
              Discover the crisis
            </span>
            <FiChevronDown className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-teal-400 drop-shadow-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
