"use client";

import { useState, useEffect, useRef } from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function SimplePricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [employeeCount, setEmployeeCount] = useState(100);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animations
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

  // Calculate monthly and annual costs
  const monthlyCost = employeeCount * 1;
  const annualCost = monthlyCost * 12;
  const lawsuitCost = "$75K-$300K";

  const features = [
    "All features included",
    "Unlimited posts & discussions",
    "Anonymous & named posting",
    "Military-grade encryption",
    "Real-time analytics dashboard",
    "7-state workflow system",
    "Priority escalation",
    "File attachments (images, videos, PDFs)",
    "Department management",
    "Audit trail & compliance",
    "QR code onboarding",
    "Mobile & desktop access",
    "Email notifications",
    "24/7 platform access",
  ];

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

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Simple. Transparent. Affordable.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            One price. Everything included. No hidden fees.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div
          className={`max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-teal-500/20 p-8 sm:p-10 md:p-12 lg:p-14">
            {/* Price Display */}
            <div className="text-center mb-10">
              <div className="mb-4">
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900">
                  $1
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl text-slate-600 ml-2">
                  / employee
                </span>
              </div>
              <p className="text-xl sm:text-2xl text-slate-600 font-medium">
                per month
              </p>
              <p className="text-base sm:text-lg text-teal-600 font-semibold mt-2">
                vs. {lawsuitCost} per lawsuit
              </p>
            </div>

            {/* Interactive Calculator */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 sm:p-8 mb-10">
              <label className="block text-center mb-4">
                <span className="text-lg sm:text-xl font-bold text-slate-900 mb-3 block">
                  Calculate Your Cost
                </span>
                <div className="flex items-center justify-center gap-4">
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="flex-1 max-w-xs h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <input
                    type="number"
                    value={employeeCount}
                    onChange={(e) =>
                      setEmployeeCount(
                        Math.max(10, Math.min(1000, Number(e.target.value)))
                      )
                    }
                    className="w-20 sm:w-24 px-3 py-2 text-center text-lg font-bold text-slate-900 bg-white border-2 border-teal-300 rounded-lg focus:outline-none focus:border-teal-500"
                  />
                </div>
                <span className="text-sm text-slate-600 mt-2 block">
                  employees
                </span>
              </label>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
                <div className="text-center p-4 bg-white rounded-xl border-2 border-teal-200">
                  <div className="text-2xl sm:text-3xl font-bold text-teal-600">
                    ${monthlyCost}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">per month</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border-2 border-blue-200">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    ${annualCost}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">per year</div>
                </div>
              </div>

              <p className="text-center text-sm sm:text-base text-slate-600 mt-4 font-medium">
                ONE prevented lawsuit pays for{" "}
                <span className="text-teal-600 font-bold">
                  {Math.floor(75000 / annualCost)}+ years
                </span>{" "}
                of VoxWel
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <FiCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="w-full py-5 px-8 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
            >
              Start Free Trial
              <FiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Fine Print */}
            <div className="mt-6 text-center space-y-1">
              <p className="text-sm sm:text-base text-slate-600">
                ✓ 14-day free trial • ✓ No credit card required
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                ✓ Setup in 24 hours • ✓ Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise Note */}
        <div
          className={`text-center max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 border-2 border-slate-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Enterprise Plans Available
            </h3>
            <p className="text-base sm:text-lg text-gray-400 mb-4">
              Need custom integrations, dedicated support, or white-labeling?
            </p>
            <button
              onClick={scrollToContact}
              className="text-teal-400 hover:text-teal-300 font-semibold text-lg flex items-center gap-2 mx-auto group"
            >
              Contact Sales
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
