"use client";

import { useState } from "react";
import { FiShield, FiLock, FiCheckCircle, FiClock, FiDollarSign, FiZap, FiHeart, FiUsers } from "react-icons/fi";

const faqData = [
  {
    question: "How can VoxWel guarantee 100% anonymity for employees?",
    answer:
      "VoxWel guarantees 100% anonymity through military-grade, end-to-end encryption and a strict, zero-knowledge protocol. Even system administrators cannot decrypt the identity of the user.",
    icon: FiShield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    question: "Can our company's IT department track who submitted a report?",
    answer:
      "No. VoxWel's platform is architected so that even your own company's administrators cannot access the underlying data to identify a user.",
    icon: FiLock,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    question:
      "Is VoxWel compliant with GDPR and the EU Whistleblowing Directive?",
    answer:
      "Yes. VoxWel is fully compliant with GDPR standards and the EU Whistleblowing Directive. Our complete audit trail provides documented proof.",
    icon: FiCheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    question:
      "What is the difference between VoxWel and a traditional hotline?",
    answer:
      "Traditional hotlines lack anonymity and structure. VoxWel offers military-grade encryption, a 7-state workflow system, and an Early Warning System that prevents issues from escalating.",
    icon: FiZap,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    question: "How long does it take to set up VoxWel?",
    answer:
      "VoxWel can be set up and operational in under 24 hours. Our QR Onboarding system allows employees to access the platform instantly.",
    icon: FiClock,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    question: "Why is VoxWel priced at only $1/employee/month?",
    answer:
      "VoxWel is priced affordably to ensure every company can afford crisis prevention. Preventing a single lawsuit ($75K-$300K) justifies decades of VoxWel service.",
    icon: FiDollarSign,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    question: "Can VoxWel help prevent workplace mental health crises?",
    answer:
      "Yes. VoxWel provides employees with a confidential, encrypted safe space to report work-related stress, harassment, or toxic conditions before they escalate into mental health crises. Early detection of workplace issues can prevent burnout, depression, and tragic outcomes.",
    icon: FiHeart,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    question: "How does anonymous reporting protect employee wellbeing?",
    answer:
      "Anonymous reporting removes the fear of retaliation, allowing employees to speak up about serious issues like excessive workload, harassment, or toxic management. This early intervention helps companies address problems before they cause severe mental health damage.",
    icon: FiUsers,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-teal/10 border border-primary-teal/30 rounded-full text-primary-teal text-sm font-bold mb-6">
            💬 Got Questions?
          </div>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about VoxWel's anonymous workplace
            reporting platform
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 ${
                  openIndex === index
                    ? "border-primary-teal shadow-2xl"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-start gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  {/* Icon */}
                  <div className={`${faq.bgColor} ${faq.color} p-3 rounded-xl flex-shrink-0 mt-1`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <span className="text-lg font-semibold text-gray-900 pr-8 block">
                      {faq.question}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <svg
                    className={`w-6 h-6 text-primary-teal flex-shrink-0 transform transition-transform mt-1 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 pl-[76px] text-gray-700 leading-relaxed animate-fade-in">
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary-teal">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-teal/10 via-primary-navy/5 to-purple-500/10 rounded-2xl p-8 md:p-10 border-2 border-primary-teal/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
              Our team is here to help. Schedule a personalized demo and get all your questions answered.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-teal text-base font-bold rounded-xl text-white bg-primary-teal hover:bg-primary-teal/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Schedule a Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
