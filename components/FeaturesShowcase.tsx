"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FiHeart,
  FiShield,
  FiMessageSquare,
  FiLock,
  FiBarChart,
  FiZap,
  FiCheckCircle,
  FiAlertCircle,
  FiUsers,
} from "react-icons/fi";

export default function FeaturesShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const walls = [
    {
      id: 0,
      icon: <FiHeart className="w-8 h-8 md:w-10 md:h-10" />,
      name: "Creative Wall",
      tagline: "Celebrate Success",
      description:
        "Team achievements, recognition, and positive workplace highlights. Build culture through public appreciation.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-500",
      textColor: "text-pink-600",
      image: "/screenshots/creative-wall.avif",
      features: [
        "Public team recognition",
        "Anniversary celebrations",
        "Achievement milestones",
        "Positive culture building",
      ],
    },
    {
      id: 1,
      icon: <FiShield className="w-8 h-8 md:w-10 md:h-10" />,
      name: "Problems & Solutions",
      tagline: "Anonymous Reporting",
      description:
        "100% anonymous, military-grade encrypted reporting. Employees safely report harassment, fraud, safety violations.",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
      borderColor: "border-red-500",
      textColor: "text-red-600",
      image: "/screenshots/problems-wall.avif",
      features: [
        "Complete anonymity guaranteed",
        "Military-grade encryption",
        "7-state workflow tracking",
        "Priority-based escalation",
      ],
    },
    {
      id: 2,
      icon: <FiMessageSquare className="w-8 h-8 md:w-10 md:h-10" />,
      name: "Team Discussions",
      tagline: "Open Communication",
      description:
        "General workplace communication, team collaboration, and everyday questions. Like Slack, but integrated.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-500",
      textColor: "text-blue-600",
      image: "/screenshots/discussions-wall.avif",
      features: [
        "Real-time team chat",
        "Department channels",
        "File sharing support",
        "Question & answer threads",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: <FiLock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Military Encryption",
      description: "Bank-grade security",
    },
    {
      icon: <FiBarChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Real-Time Analytics",
      description: "Track engagement",
    },
    {
      icon: <FiZap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "24hr Setup",
      description: "Start immediately",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Audit Trail",
      description: "Complete records",
    },
    {
      icon: <FiAlertCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Smart Alerts",
      description: "Instant notifications",
    },
    {
      icon: <FiUsers className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Role-Based Access",
      description: "Secure permissions",
    },
  ];

  // Intersection Observer
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

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % walls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, walls.length]);

  const activeWall = walls[activeTab];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl top-0 left-0 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse"
          style={{ animationDelay: "4s", animationDuration: "10s" }}
        />
      </div>

      <div className="relative z-10 section-container py-16 sm:py-20 md:py-24 lg:py-32">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-500/50 rounded-full text-teal-400 text-sm font-bold mb-6 backdrop-blur-sm">
            🎯 Complete Platform
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Three Walls. One Platform.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            Complete crisis prevention system for your workplace
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {walls.map((wall, index) => (
            <button
              key={wall.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-left transition-all ${
                activeTab === index
                  ? `bg-gradient-to-r ${wall.color} text-white shadow-2xl scale-105`
                  : "bg-slate-800 text-gray-400 hover:bg-slate-700 border-2 border-slate-700"
              }`}
            >
              <div
                className={activeTab === index ? "text-white" : "text-gray-500"}
              >
                {wall.icon}
              </div>
              <div>
                <div className="text-base md:text-lg">{wall.name}</div>
                <div
                  className={`text-xs md:text-sm ${
                    activeTab === index ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {wall.tagline}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content - Screenshot + Details */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto mb-16">
            {/* Left: Screenshot */}
            <div className="order-2 lg:order-1">
              <div
                className={`relative rounded-2xl overflow-hidden border-4 ${activeWall.borderColor} shadow-2xl bg-white`}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={activeWall.image}
                    alt={`${activeWall.name} interface`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={activeTab === 0}
                  />
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="order-1 lg:order-2">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${activeWall.bgColor} ${activeWall.textColor} font-bold text-sm mb-4`}
              >
                {activeWall.icon}
                Wall {activeTab + 1} of 3
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {activeWall.name}
              </h3>

              <p className="text-xl sm:text-2xl text-gray-300 mb-6">
                {activeWall.tagline}
              </p>

              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
                {activeWall.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {activeWall.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${activeWall.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <FiCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Plus Everything Else You Need
            </h3>
            <p className="text-base sm:text-lg text-gray-400">
              Complete workplace platform with military-grade security
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4 md:p-6 border-2 border-slate-700 hover:border-teal-500 transition-all hover:-translate-y-1 text-center"
              >
                <div className="text-teal-400 mb-3 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Hint */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-base md:text-lg text-gray-400 font-medium">
            Ready to protect your company?
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
