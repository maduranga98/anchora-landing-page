"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BrandStory() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Sequential animation steps
  useEffect(() => {
    if (!isVisible) return;

    const timers = [
      setTimeout(() => setCurrentStep(1), 500), // Show logo
      setTimeout(() => setCurrentStep(2), 1500), // Split to VOX + WEL
      setTimeout(() => setCurrentStep(3), 2500), // Show meanings
      setTimeout(() => setCurrentStep(4), 3500), // Show statements
      setTimeout(() => setCurrentStep(5), 4500), // Show final message
    ];

    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="brand-story"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Subtle gradient orbs */}
        <div
          className="absolute w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl -top-40 -right-40 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl -bottom-40 -left-40 animate-pulse"
          style={{ animationDelay: "4s", animationDuration: "10s" }}
        />

        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1abc9c 1px, transparent 1px),
              linear-gradient(to bottom, #1abc9c 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 section-container py-16 sm:py-20 md:py-24 lg:py-32 text-center">
        {/* Logo Container */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          {/* Step 1: Full VoxWel Logo appears */}
          <div
            className={`transition-all duration-1000 ${
              currentStep >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            {/* VoxWel Logo - Centered initially, then moves up when text disappears */}
            <div
              className={`flex flex-col items-center justify-center mb-8 md:mb-12 transition-all duration-700 ${
                currentStep >= 2 ? "mb-12 md:mb-16" : ""
              }`}
            >
              {/* Logo Icon - Always centered */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-4">
                <Image
                  src="/voxwel1.avif"
                  alt="VoxWel Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Logo Text - Fades out in step 2 */}
              <div
                className={`transition-all duration-700 ${
                  currentStep >= 2
                    ? "opacity-0 scale-0 h-0"
                    : "opacity-100 scale-100"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900">
                  VoxWel
                </h1>
              </div>
            </div>

            {/* Step 2: Split into VOX + WEL */}
            <div
              className={`transition-all duration-1000 ${
                currentStep >= 2 ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 mb-8 md:mb-12">
                {/* VOX */}
                <div
                  className={`transition-all duration-700 ${
                    currentStep >= 2 ? "translate-x-0" : "-translate-x-20"
                  }`}
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary-teal">
                    VOX
                  </div>
                  {/* Step 3: Show meaning */}
                  <div
                    className={`mt-3 md:mt-4 transition-all duration-700 ${
                      currentStep >= 3
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700">
                      Voice
                    </div>
                    <div className="text-sm sm:text-base md:text-lg text-slate-500 italic">
                      (Latin)
                    </div>
                  </div>
                </div>

                {/* Plus Symbol */}
                <div
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-400 transition-all duration-700 ${
                    currentStep >= 2
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-50"
                  }`}
                >
                  +
                </div>

                {/* WEL */}
                <div
                  className={`transition-all duration-700 ${
                    currentStep >= 2 ? "translate-x-0" : "translate-x-20"
                  }`}
                >
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary-navy">
                    WEL
                  </div>
                  {/* Step 3: Show meaning */}
                  <div
                    className={`mt-3 md:mt-4 transition-all duration-700 ${
                      currentStep >= 3
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700">
                      Well-being
                    </div>
                    <div className="text-sm sm:text-base md:text-lg text-slate-500 italic">
                      (English)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Mission Statements */}
        <div
          className={`max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-10 mb-12 md:mb-16 transition-all duration-1000 ${
            currentStep >= 4
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          {/* Statement 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border-2 border-teal-200 shadow-xl hover:shadow-2xl transition-shadow">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 leading-relaxed">
              Every voice <span className="text-primary-teal">matters.</span>
            </p>
          </div>

          {/* Statement 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-shadow">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 leading-relaxed">
              Every employee deserves{" "}
              <span className="text-primary-navy">protection.</span>
            </p>
          </div>

          {/* Statement 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border-2 border-teal-200 shadow-xl hover:shadow-2xl transition-shadow">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 leading-relaxed">
              Every company deserves{" "}
              <span className="text-primary-teal">prevention.</span>
            </p>
          </div>
        </div>

        {/* Step 5: Final Message */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            currentStep >= 5
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-gradient-to-br from-primary-teal to-primary-navy rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              That's why VoxWel exists.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed">
              Anonymous reporting. Military encryption.{" "}
              <br className="hidden sm:block" />
              Complete protection. Crisis prevention.
            </p>
          </div>

          {/* Tagline */}
          <div className="mt-8 md:mt-12">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 italic">
              Where Every Voice Matters
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className={`mt-12 md:mt-16 lg:mt-20 transition-all duration-1000 ${
            currentStep >= 5 ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm md:text-base text-slate-500 font-medium mb-3">
            See how it works
          </p>
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 mx-auto text-primary-teal"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
