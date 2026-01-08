"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiAlertTriangle,
  FiDollarSign,
  FiClock,
  FiTrendingDown,
} from "react-icons/fi";

export default function SilentCrisis() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  // Animated counter component
  const AnimatedCounter = ({
    end,
    suffix = "",
    prefix = "",
    duration = 2000,
  }: {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [isVisible, end, duration]);

    return (
      <span>
        {prefix}
        {count}
        {suffix}
      </span>
    );
  };

  const stats = [
    {
      icon: <FiAlertTriangle className="w-8 h-8 md:w-10 md:h-10" />,
      number: 91,
      suffix: "%",
      label: "of employees witness serious issues",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
    },
    {
      icon: <FiTrendingDown className="w-8 h-8 md:w-10 md:h-10" />,
      number: 9,
      suffix: "%",
      label: "ever report them",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
    },
    {
      icon: <FiDollarSign className="w-8 h-8 md:w-10 md:h-10" />,
      number: 300,
      prefix: "$",
      suffix: "K",
      label: "average lawsuit cost",
      color: "text-teal-400",
      bgColor: "bg-teal-400/10",
      borderColor: "border-teal-400/30",
    },
    {
      icon: <FiClock className="w-8 h-8 md:w-10 md:h-10" />,
      number: 18,
      label: "months before discovery",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="silent-crisis"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Animated gradient orbs */}
        <div
          className="absolute w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "8s" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ef4444 1px, transparent 1px),
              linear-gradient(to bottom, #ef4444 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 section-container py-16 sm:py-20 md:py-24 lg:py-32">
        {/* Section Badge */}
        <div
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-sm md:text-base font-bold mb-6 backdrop-blur-sm">
            <FiAlertTriangle className="animate-pulse" />
            The Crisis Hidden in Plain Sight
          </div>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} ${
                stat.borderColor
              } border-2 rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Icon */}
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>

              {/* Number */}
              <div
                className={`${stat.color} text-5xl sm:text-6xl md:text-7xl font-bold mb-3 md:mb-4`}
              >
                <AnimatedCounter
                  end={stat.number}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>

              {/* Label */}
              <div className="text-gray-300 text-sm md:text-base font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Message - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-6xl mx-auto mb-12 md:mb-16">
          {/* Left Side - The Problem */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/30 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Your employees see the problems
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                They witness harassment. Fraud. Safety violations.
                Discrimination. Corruption.
              </p>
            </div>
          </div>

          {/* Right Side - The Reality */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-gray-700/50 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-400 mb-4 md:mb-6 leading-tight">
                But they're not telling you
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
                Fear of retaliation. Fear of being ignored. Fear of losing their
                job.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
              The problems your employees see every day
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-400 font-semibold leading-tight">
              are destroying your company from within.
            </p>
          </div>
        </div>

        {/* Subtle CTA hint - leads to blog tease */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-base md:text-lg text-gray-400 font-medium mb-2">
            Want to understand the full scope?
          </p>
          <div className="animate-bounce mt-4">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 mx-auto text-teal-400"
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
