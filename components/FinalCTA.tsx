"use client";

import { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiShield, FiClock, FiCheckCircle } from "react-icons/fi";

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);
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

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - navbarHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const guarantees = [
    {
      icon: <FiCheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      text: "14-day free trial",
    },
    {
      icon: <FiShield className="w-6 h-6 md:w-8 md:h-8" />,
      text: "No credit card required",
    },
    {
      icon: <FiClock className="w-6 h-6 md:w-8 md:h-8" />,
      text: "Setup in 24 hours",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      text: "Cancel anytime",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Animated gradient orbs */}
        <div
          className="absolute w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "8s" }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1abc9c 1px, transparent 1px),
              linear-gradient(to bottom, #1abc9c 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 section-container py-20 sm:py-24 md:py-32 text-center">
        {/* Main Message */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Stop Waiting for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
              the Lawsuit
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
            Your employees see the problems.
            <br />
            <span className="text-teal-400 font-bold">
              Give them a safe way to tell you.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 md:mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button
            onClick={scrollToContact}
            className="group w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white text-xl md:text-2xl font-bold rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <FiShield className="w-6 h-6 md:w-7 md:h-7" />
            Start Free Trial
            <FiArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToContact}
            className="group w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xl md:text-2xl font-bold rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            Schedule Demo
            <FiArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Guarantees */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-4 md:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="text-teal-400 flex-shrink-0">
                {guarantee.icon}
              </div>
              <span className="text-sm md:text-base text-white font-medium text-center sm:text-left">
                {guarantee.text}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="pt-6 sm:pt-0 first:pt-0">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400 mb-2">
                  $1
                </div>
                <div className="text-base md:text-lg text-gray-300">
                  per employee/month
                </div>
                <div className="text-sm md:text-base text-gray-500 mt-1">
                  vs. $75K-$300K lawsuit
                </div>
              </div>

              {/* Stat 2 */}
              <div className="pt-6 sm:pt-0 sm:pl-6 md:pl-8">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400 mb-2">
                  24hrs
                </div>
                <div className="text-base md:text-lg text-gray-300">
                  Setup time
                </div>
                <div className="text-sm md:text-base text-gray-500 mt-1">
                  Start protecting immediately
                </div>
              </div>

              {/* Stat 3 */}
              <div className="pt-6 sm:pt-0 sm:pl-6 md:pl-8">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400 mb-2">
                  100%
                </div>
                <div className="text-base md:text-lg text-gray-300">
                  Anonymous protection
                </div>
                <div className="text-sm md:text-base text-gray-500 mt-1">
                  Military-grade encryption
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div
          className={`mt-12 md:mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto">
            Join companies protecting their workplace with VoxWel's
            <br className="hidden sm:block" />
            <span className="text-white font-bold">
              {" "}
              comprehensive three-wall system
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
