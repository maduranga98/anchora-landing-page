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
      // Responsive positioning optimized for all screen sizes:
      // Mobile (320-640px): Compact positioning close to edges
      // Tablet (640-1024px): Moderate spacing
      // Laptop (1024-1440px): Optimal spacing - PRIORITY for readability without cutoff
      // Desktop/Monitor (1440px+): Maximum spacing
      "top-left":
        "top-12 sm:top-16 md:top-20 lg:top-24 xl:top-28 2xl:top-32 left-2 sm:left-3 md:left-6 lg:left-12 xl:left-16 2xl:left-24",
      "top-right":
        "top-12 sm:top-16 md:top-20 lg:top-24 xl:top-28 2xl:top-32 right-2 sm:right-3 md:right-6 lg:right-12 xl:right-16 2xl:right-24",
      left: "top-[30%] sm:top-[32%] md:top-[34%] lg:top-[35%] xl:top-[36%] 2xl:top-[38%] left-2 sm:left-3 md:left-6 lg:left-12 xl:left-16 2xl:left-24",
      right:
        "top-[30%] sm:top-[32%] md:top-[34%] lg:top-[35%] xl:top-[36%] 2xl:top-[38%] right-2 sm:right-3 md:right-6 lg:right-12 xl:right-16 2xl:right-24",
      "bottom-left":
        "bottom-32 sm:bottom-36 md:bottom-40 lg:bottom-44 xl:bottom-52 2xl:bottom-60 left-2 sm:left-3 md:left-6 lg:left-12 xl:left-16 2xl:left-24",
      "bottom-right":
        "bottom-32 sm:bottom-36 md:bottom-40 lg:bottom-44 xl:bottom-52 2xl:bottom-60 right-2 sm:right-3 md:right-6 lg:right-12 xl:right-16 2xl:right-24",
    };
    return positions[position] || "";
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-end">
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
              className={`${problem.color} font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl drop-shadow-2xl bg-slate-900/95 backdrop-blur-sm px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 2xl:px-6 2xl:py-3 rounded-md sm:rounded-lg border-2 border-current shadow-2xl max-w-[calc(100vw-1.5rem)] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] 2xl:max-w-lg`}
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
      <div className="relative z-20 w-full pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-center">
          <div className="max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            {/* Main Heading - Optimized for all screens, especially laptops */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-snug xl:leading-snug 2xl:leading-snug drop-shadow-2xl px-2 sm:px-3">
              These problems are happening{" "}
              <span className="text-teal-400 block sm:inline mt-1 sm:mt-0">
                right now.
              </span>
            </h1>

            {/* Subheading - Optimized for all screens, especially laptops */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-200 font-medium leading-relaxed drop-shadow-2xl px-2 sm:px-3">
              You just don't know it yet.
            </p>
          </div>

          {/* Scroll Indicator - Responsive sizing and spacing */}
          <button
            onClick={scrollToNext}
            className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 animate-bounce cursor-pointer group inline-flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2"
            aria-label="Scroll to next section"
          >
            <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl text-gray-300 group-hover:text-teal-400 transition-colors drop-shadow-lg font-medium">
              Discover the crisis
            </span>
            <FiChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 text-teal-400 drop-shadow-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
