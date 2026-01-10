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

  // Position classes for animated text - fully responsive across all screen sizes
  const getPositionClasses = (position: string) => {
    const positions: { [key: string]: string } = {
      // Responsive positioning:
      // Mobile (320-640px): Close to edges, higher vertical positions
      // Tablet (640-1024px): Moderate spacing
      // Laptop (1024-1440px): Optimal spacing for readability - PRIORITY
      // Desktop/Monitor (1440px+): Maximum spacing
      "top-left":
        "top-16 sm:top-20 md:top-24 lg:top-28 xl:top-32 2xl:top-36 left-3 sm:left-4 md:left-8 lg:left-16 xl:left-24 2xl:left-32",
      "top-right":
        "top-16 sm:top-20 md:top-24 lg:top-28 xl:top-32 2xl:top-36 right-3 sm:right-4 md:right-8 lg:right-16 xl:right-24 2xl:right-32",
      left: "top-[32%] sm:top-[35%] md:top-[36%] lg:top-[38%] xl:top-[40%] left-3 sm:left-4 md:left-8 lg:left-16 xl:left-24 2xl:left-32",
      right:
        "top-[32%] sm:top-[35%] md:top-[36%] lg:top-[38%] xl:top-[40%] right-3 sm:right-4 md:right-8 lg:right-16 xl:right-24 2xl:right-32",
      "bottom-left":
        "bottom-36 sm:bottom-40 md:bottom-44 lg:bottom-52 xl:bottom-60 2xl:bottom-72 left-3 sm:left-4 md:left-8 lg:left-16 xl:left-24 2xl:left-32",
      "bottom-right":
        "bottom-36 sm:bottom-40 md:bottom-44 lg:bottom-52 xl:bottom-60 2xl:bottom-72 right-3 sm:right-4 md:right-8 lg:right-16 xl:right-24 2xl:right-32",
    };
    return positions[position] || "";
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* CEO Image as Background - Fully Responsive Positioning */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.avif"
          alt="Concerned CEO facing workplace problems"
          fill
          priority
          className="object-cover object-center sm:object-[center_20%] md:object-center lg:object-[center_15%] xl:object-center"
          quality={95}
          sizes="100vw"
        />
        {/* Dark overlay for text readability - optimized across all screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/65 to-slate-900/90 sm:from-slate-900/80 sm:via-slate-900/55 sm:to-slate-900/85 md:from-slate-900/75 md:via-slate-900/50 md:to-slate-900/80 lg:from-slate-900/70 lg:via-slate-900/45 lg:to-slate-900/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-transparent to-slate-900/75 sm:from-slate-900/70 sm:via-transparent sm:to-slate-900/70 md:from-slate-900/65 md:via-transparent md:to-slate-900/65 lg:from-slate-900/60 lg:via-transparent lg:to-slate-900/60" />
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
              className={`${problem.color} font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl drop-shadow-2xl bg-slate-900/95 backdrop-blur-sm px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 xl:px-6 xl:py-3.5 rounded-md sm:rounded-lg md:rounded-xl border-2 border-current shadow-2xl max-w-[calc(100vw-1.5rem)] sm:max-w-[280px] md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg`}
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

      {/* Bottom Content - Tagline and Scroll - Fully Responsive */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-32">
        <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center">
          <div className="max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
            {/* Main Heading - Optimized for all screens, especially laptops */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl px-1 sm:px-2">
              These problems are happening{" "}
              <span className="text-teal-400 block sm:inline mt-1 sm:mt-0">
                right now.
              </span>
            </h1>

            {/* Subheading - Optimized for all screens, especially laptops */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-200 font-medium drop-shadow-2xl px-1 sm:px-2">
              You just don't know it yet.
            </p>
          </div>

          {/* Scroll Indicator - Responsive sizing and spacing */}
          <button
            onClick={scrollToNext}
            className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 animate-bounce cursor-pointer group inline-flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2"
            aria-label="Scroll to next section"
          >
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 group-hover:text-teal-400 transition-colors drop-shadow-lg font-medium">
              Discover the crisis
            </span>
            <FiChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-teal-400 drop-shadow-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
