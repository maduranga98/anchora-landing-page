"use client";

import { useState } from "react";

const faqData = [
  {
    question: "How can VoxWel guarantee 100% anonymity for employees?",
    answer:
      "VoxWel guarantees 100% anonymity through military-grade, end-to-end encryption and a strict, zero-knowledge protocol. Even system administrators cannot decrypt the identity of the user.",
  },
  {
    question: "Can our company's IT department track who submitted a report?",
    answer:
      "No. VoxWel's platform is architected so that even your own company's administrators cannot access the underlying data to identify a user.",
  },
  {
    question:
      "Is VoxWel compliant with GDPR and the EU Whistleblowing Directive?",
    answer:
      "Yes. VoxWel is fully compliant with GDPR standards and the EU Whistleblowing Directive. Our complete audit trail provides documented proof.",
  },
  {
    question:
      "What is the difference between VoxWel and a traditional hotline?",
    answer:
      "Traditional hotlines lack anonymity and structure. VoxWel offers military-grade encryption, a 7-state workflow system, and an Early Warning System that prevents issues from escalating.",
  },
  {
    question: "How long does it take to set up VoxWel?",
    answer:
      "VoxWel can be set up and operational in under 24 hours. Our QR Onboarding system allows employees to access the platform instantly.",
  },
  {
    question: "Why is VoxWel priced at only $1/employee/month?",
    answer:
      "VoxWel is priced affordably to ensure every company can afford crisis prevention. Preventing a single lawsuit ($75K-$300K) justifies decades of VoxWel service.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about VoxWel's anonymous workplace
            reporting platform
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-teal flex-shrink-0 transform transition-transform ${
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
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-teal hover:bg-primary-teal/90 transition-colors"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
