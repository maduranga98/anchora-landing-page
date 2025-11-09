"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleMobileMenuClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      // Simulate API call (replace with actual API endpoint when ready)
      console.log("Form submitted:", formData);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setFormStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        companyName: "",
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqData = {
    "About the Platform": [
      {
        question: "How is Anchora different from employee surveys?",
        answer:
          "Surveys are periodic snapshots. Anchora is continuous listening. Employees post when issues arise—not when HR schedules a survey. Plus, we track problems to resolution. Surveys just collect data.",
      },
      {
        question: "Is Anchora really anonymous?",
        answer:
          "Yes. We use AES-256 encryption for anonymous posts. Even database admins can't see who posted. Only designated HR admins with explicit permission can decrypt in serious cases (harassment, threats).",
      },
      {
        question: "What if employees abuse anonymity?",
        answer:
          "Rare, but possible. Admins can flag inappropriate content. Repeated abuse patterns can be detected. Plus, most posts are constructive—employees want real problems solved.",
      },
      {
        question: "How long does setup take?",
        answer:
          "5 minutes. Create account → Add company info → Invite employees → Start posting. No consulting required. No training needed.",
      },
      {
        question: "Do you integrate with Slack/Teams/JIRA?",
        answer:
          "Not yet, but coming soon! Currently focused on perfecting the core experience. Integrations launching Q2 2025.",
      },
    ],
    "About Security & Privacy": [
      {
        question: "Where is my data stored?",
        answer:
          "Google Cloud (US) or EU servers (you choose). Bank-level encryption. SOC 2 Type II certified. GDPR and CCPA compliant.",
      },
      {
        question: "Who can see posts?",
        answer:
          "By default, all company employees see all posts (transparency). Admins can make posts department-only or HR-only for sensitive issues.",
      },
      {
        question: "Can employees delete their posts?",
        answer:
          "Yes, within 24 hours. After that, posts become part of company record (prevents deleting evidence of serious issues).",
      },
      {
        question: "What happens to data if we cancel?",
        answer:
          "You get a full export (JSON/CSV). We delete all data within 30 days per GDPR requirements.",
      },
    ],
    "About Pricing & Billing": [
      {
        question: "What if we grow mid-year?",
        answer:
          "You're only charged for new employees added. Prorated to your billing cycle. No penalties for growth!",
      },
      {
        question: "Do inactive employees count?",
        answer:
          "No. Only active users who can post/comment. Deactivated accounts don't count toward your bill.",
      },
      {
        question: "Can we pause our account?",
        answer:
          "Yes, but you lose access to features. Data is preserved. Unpause anytime. Better to use free tier (10 employees).",
      },
      {
        question: "Do you offer annual prepay discounts?",
        answer:
          "Yes! Pay annually, get 2 months free (16% savings). Plus, lock in your rate for the year.",
      },
    ],
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cloud text-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center">
            <Image
              src="/logo-anchora.svg"
              alt="Anchora Logo"
              width={50}
              height={10}
              priority
            />
            <div>
              <h1 className="text-xl font-bold text-navy group-hover:text-teal transition-colors duration-300">
                ANCHORA
              </h1>
              <p className="text-xs text-teal font-medium">
                Your Anchor in Every Storm
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 text-sm font-semibold lg:flex">
            <a href="#features" className="transition hover:text-teal">
              Features
            </a>
            <a href="#benefits" className="transition hover:text-teal">
              Benefits
            </a>
            <a href="#use-cases" className="transition hover:text-teal">
              Use Cases
            </a>
            <a href="#pricing" className="transition hover:text-teal">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-teal">
              FAQ
            </a>
            <a href="#contact-form" className="transition hover:text-teal">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact-form"
              className="rounded-lg bg-coral px-4 py-2 text-sm font-bold text-white transition hover:bg-opacity-80 hover:shadow-lg"
            >
              Start Free Trial
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-navy focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="container mx-auto flex flex-col space-y-4 p-4 text-sm font-semibold">
              <a
                href="#features"
                onClick={(e) => handleMobileMenuClick(e, "#features")}
                className="transition hover:text-teal"
              >
                Features
              </a>
              <a
                href="#benefits"
                onClick={(e) => handleMobileMenuClick(e, "#benefits")}
                className="transition hover:text-teal"
              >
                Benefits
              </a>
              <a
                href="#use-cases"
                onClick={(e) => handleMobileMenuClick(e, "#use-cases")}
                className="transition hover:text-teal"
              >
                Use Cases
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleMobileMenuClick(e, "#pricing")}
                className="transition hover:text-teal"
              >
                Pricing
              </a>
              <a
                href="#faq"
                onClick={(e) => handleMobileMenuClick(e, "#faq")}
                className="transition hover:text-teal"
              >
                FAQ
              </a>
              <a
                href="#contact-form"
                onClick={(e) => handleMobileMenuClick(e, "#contact-form")}
                className="transition hover:text-teal"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}

      <section className="hero relative w-full overflow-hidden py-20 px-4 sm:py-28 md:py-36 min-h-[600px] sm:min-h-[700px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.png"
            alt="Anchora workplace collaboration"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-teal/70"></div>

          {/* Optional: Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative container mx-auto max-w-6xl text-center z-10">
          {/* Badge - Now with better contrast */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-4 py-2 shadow-2xl border-2 border-white/50 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
            </span>
            <span className="text-sm font-semibold text-navy">
              🚀 <span className="text-coral">23 Spots Left</span> • Early
              Access Open
            </span>
          </div>

          {/* Headline - White text on dark background */}
          <h1 className="font-montserrat text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl animate-fade-in drop-shadow-2xl">
            Stop Losing Your Best People to
            <span className="block mt-2 bg-gradient-to-r from-coral via-teal to-coral bg-clip-text text-transparent">
              Problems You Never Heard About
            </span>
          </h1>

          {/* Value Prop - White with better readability */}
          <p className="mx-auto mt-8 max-w-2xl text-xl sm:text-2xl font-semibold text-white/95 leading-relaxed px-4 drop-shadow-lg">
            Anonymous feedback meets action tracking.
            <br className="hidden sm:block" />
            Turn workplace problems into solved issues in{" "}
            <span className="text-teal">days, not months</span>.
          </p>

          {/* Pricing */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border-2 border-white/50">
            <span className="text-gray-600 text-sm">Starting at</span>
            <span className="text-3xl font-bold text-teal">$3</span>
            <span className="text-gray-600 text-sm">/employee/month</span>
          </div>

          {/* CTAs - Higher contrast */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row px-4">
            <a
              href="#contact-form"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-coral px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:shadow-coral/50 hover:scale-105 border-2 border-white/20"
            >
              Get Early Access
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <a
              href="#how-it-works"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-white/10 backdrop-blur-md px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-navy hover:shadow-2xl hover:scale-105"
            >
              See How It Works
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Trust Signals - White version */}
          <div className="mt-10 text-sm text-white/80 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <svg
                className="h-5 w-5 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free for 10 employees</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <svg
                className="h-5 w-5 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <svg
                className="h-5 w-5 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No credit card</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-teal/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-teal to-transparent"></div>
        </div>
      </div>

      {/* The Problem Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50/50 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-montserrat text-3xl font-extrabold text-navy sm:text-4xl md:text-4xl lg:text-4xl animate-fade-in">
            The Silent Crisis in Your Workplace
          </h2>
          <p className="font-inter mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 sm:mt-8 sm:text-xl animate-fade-in-up">
            <span className="font-bold text-coral">67% of employees</span>{" "}
            experience workplace stress but suffer in silence.
            <br />
            <span className="font-semibold text-navy">
              Problems go unreported. Ideas never surface. Your best people
              quietly quit.
            </span>
          </p>
          <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-3 md:mt-16">
            {/* Card 1: The Cost */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-coral/20 to-coral/10">
                <svg
                  className="h-10 w-10 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy">
                The Cost
              </h3>
              <p className="font-inter mt-4 text-5xl font-extrabold text-coral">
                $359B
              </p>
              <p className="font-inter mb-6 text-base font-semibold text-gray-600">
                Lost Annually to Workplace Issues
              </p>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Unreported safety issues lead to accidents
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Harassment goes unnoticed until lawsuits
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Innovation dies in silence
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Top talent leaves without warning
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: The Barrier */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-coral/20 to-coral/10">
                <svg
                  className="h-10 w-10 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy">
                The Barrier
              </h3>
              <p className="font-inter mt-4 text-3xl font-extrabold text-coral leading-tight">
                Employees Fear
              </p>
              <p className="font-inter mb-6 text-base font-semibold text-gray-600">
                Speaking Up About Issues
              </p>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    <span className="font-bold text-navy">71%</span> worry about
                    retaliation
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    No clear feedback channels
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Belief that nothing will change
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Anonymous options not trusted
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: The Impact */}
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-coral/20 to-coral/10">
                <svg
                  className="h-10 w-10 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy">
                The Impact
              </h3>
              <p className="font-inter mt-4 text-3xl font-extrabold text-coral leading-tight">
                Your Team
              </p>
              <p className="font-inter mb-6 text-base font-semibold text-gray-600">
                Drifts Apart & Disengages
              </p>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Engagement scores drop dramatically
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Turnover rates spike
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Productivity suffers
                  </span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 transition-colors group-hover:bg-coral/5">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      className="h-5 w-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">
                    Company culture deteriorates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-coral/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-coral to-transparent"></div>
        </div>
      </div>

      {/* The Solution Section - How It Works */}
      <section
        id="features"
        className="w-full bg-gradient-to-b from-cloud to-white py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="font-montserrat text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl lg:text-5xl animate-fade-in">
              How Anchora Works
            </h2>
            <p className="font-inter mx-auto mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-gray-600 px-4 animate-fade-in-up">
              A simple, powerful platform that gives every employee a voice and
              turns feedback into action
            </p>
          </div>

          {/* Features Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16">
            {/* Feature 1 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                {/* Image Container - Will show numbered image when available */}
                <div className="w-full aspect-square max-w-[200px] mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-teal/10 to-teal/5 flex items-center justify-center">
                  <Image
                    src="/1.png"
                    alt="Share Safely"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-teal to-teal-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        1
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-navy mb-2">
                  Share Safely
                </h3>
                <p className="font-inter text-sm sm:text-base font-semibold text-teal mb-3">
                  Anonymous or Named Posts
                </p>
                <p className="font-inter text-sm sm:text-base leading-relaxed text-gray-600">
                  Employees control their privacy. Post ideas, report problems,
                  or start discussions without fear.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-square max-w-[200px] mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-coral/10 to-coral/5 flex items-center justify-center">
                  <Image
                    src="/2.png"
                    alt="Track Everything"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-coral to-coral/90 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        2
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-navy mb-2">
                  Track Everything
                </h3>
                <p className="font-inter text-sm sm:text-base font-semibold text-teal mb-3">
                  Nothing Falls Through Cracks
                </p>
                <p className="font-inter text-sm sm:text-base leading-relaxed text-gray-600">
                  Every issue tracked from open to resolved. Transparent
                  workflow keeps everyone informed.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-square max-w-[200px] mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-teal/10 to-teal/5 flex items-center justify-center">
                  <Image
                    src="/3.png"
                    alt="See Real Action"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-teal to-teal-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        3
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-navy mb-2">
                  See Real Action
                </h3>
                <p className="font-inter text-sm sm:text-base font-semibold text-teal mb-3">
                  Voices Create Change
                </p>
                <p className="font-inter text-sm sm:text-base leading-relaxed text-gray-600">
                  Watch feedback turn into real solutions. Track impact and see
                  culture transform.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-square max-w-[200px] mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-coral/10 to-coral/5 flex items-center justify-center">
                  <Image
                    src="/4.png"
                    alt="Secure & Private"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-coral to-coral/90 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        4
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-navy mb-2">
                  Secure & Private
                </h3>
                <p className="font-inter text-sm sm:text-base font-semibold text-teal mb-3">
                  Bank-Level Encryption
                </p>
                <p className="font-inter text-sm sm:text-base leading-relaxed text-gray-600">
                  AES-256 encryption protects anonymous posts. Your data is
                  secure and compliant.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-square max-w-[200px] mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-teal/10 to-teal/5 flex items-center justify-center">
                  <Image
                    src="/5.png"
                    alt="Analytics & Insights"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-teal to-teal-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        5
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-navy mb-2">
                  Analytics & Insights
                </h3>
                <p className="font-inter text-sm sm:text-base font-semibold text-teal mb-3">
                  Data-Driven Decisions
                </p>
                <p className="font-inter text-sm sm:text-base leading-relaxed text-gray-600">
                  Real insights from real people guide your strategy. Identify
                  trends and measure impact.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-square max-w-[200px] mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-coral/10 to-coral/5 flex items-center justify-center">
                  <Image
                    src="/6.png"
                    alt="Mobile Ready"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-coral to-coral/90 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        6
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-navy mb-2">
                  Mobile Ready
                </h3>
                <p className="font-inter text-sm sm:text-base font-semibold text-teal mb-3">
                  Post from Anywhere
                </p>
                <p className="font-inter text-sm sm:text-base leading-relaxed text-gray-600">
                  Mobile-first design means employees can share feedback
                  anytime, anywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action - Contact Us */}
          <div className="bg-gradient-to-r from-teal to-teal-600 rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-2xl">
            <h3 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Workplace?
            </h3>
            <p className="font-inter text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Anchora is currently in early access. Contact us to be among the
              first organizations to give your employees a voice that creates
              real change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact-form"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base sm:text-lg font-bold text-teal shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Contact Us for Early Access
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#contact-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-teal hover:shadow-xl"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-navy/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-navy to-transparent"></div>
        </div>
      </div>

      {/* Key Features Section */}
      <section
        id="key-features"
        className="w-full bg-white py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-3xl font-bold text-navy sm:text-4xl md:text-4xl lg:text-4xl animate-fade-in">
            Everything You Need to Build a Culture That Listens
          </h2>
          <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-2 md:mt-16 md:gap-12">
            {/* Feature 1: Anonymous & Named Posting */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Anonymous & Named Posting
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">
                True Psychological Safety
              </p>
              <p className="font-inter leading-relaxed text-gray-600">
                Employees choose: anonymous for sensitive issues, named for
                visibility. AES encryption protects identities. Only admins with
                permission can decrypt.
              </p>
            </div>

            {/* Feature 2: Smart Problem Tracking */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Smart Problem Tracking
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">
                Open → Acknowledged → Resolved
              </p>
              <p className="font-inter leading-relaxed text-gray-600">
                7-state workflow ensures nothing gets forgotten. Every problem
                has an owner, priority, and due date. Real-time status updates
                keep everyone informed.
              </p>
            </div>

            {/* Feature 3: Three Dedicated Feeds */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Three Dedicated Feeds
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">
                Problems • Creative Ideas • Discussions
              </p>
              <p className="font-inter leading-relaxed text-gray-600">
                Organized channels keep conversations focused. Problem reports
                get urgent attention. Creative ideas spark innovation.
                Discussions build community.
              </p>
            </div>

            {/* Feature 4: Department Assignment */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Department Assignment
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">
                Right Problem, Right Team
              </p>
              <p className="font-inter leading-relaxed text-gray-600">
                Route issues to the teams that can solve them. HR handles
                harassment. IT fixes tech problems. Facilities addresses safety
                concerns.
              </p>
            </div>

            {/* Feature 5: Real-Time Analytics */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Real-Time Analytics
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">
                Data-Driven Culture Insights
              </p>
              <p className="font-inter leading-relaxed text-gray-600">
                See which departments need support. Track resolution times.
                Measure employee satisfaction. Identify trends before they
                become crises.
              </p>
            </div>

            {/* Feature 6: Mobile-First Design */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Mobile-First Design
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">
                Post from Anywhere, Anytime
              </p>
              <p className="font-inter leading-relaxed text-gray-600">
                Frontline workers don&apos;t sit at desks. Anchora works
                beautifully on phones. Quick posts. Easy reading. Zero friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-teal/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-teal to-transparent"></div>
        </div>
      </div>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="w-full bg-gradient-to-b from-cloud to-white py-12 sm:py-16 md:py-20"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-3xl font-bold text-navy sm:text-4xl md:text-4xl lg:text-4xl animate-fade-in">
            Why Companies Choose Anchora
          </h2>
          <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-2 md:mt-16 md:gap-12">
            {/* For HR & Leadership */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h3 className="font-montserrat mb-6 text-3xl font-bold text-teal">
                For HR & Leadership
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Reduce Turnover by 40%
                  </h4>
                  <p className="font-inter text-gray-600">
                    Catch dissatisfaction before it becomes resignation. Exit
                    interviews become unnecessary when you listen continuously.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Prevent Legal Issues
                  </h4>
                  <p className="font-inter text-gray-600">
                    Documented trail of reported issues protects your company.
                    Harassment, safety violations, and discrimination surface
                    early.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Data-Driven Decisions
                  </h4>
                  <p className="font-inter text-gray-600">
                    Stop guessing what employees need. Real insights from real
                    people guide your people strategy.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Faster Problem Resolution
                  </h4>
                  <p className="font-inter text-gray-600">
                    Average time from problem to solution drops 60%. Issues get
                    assigned, tracked, and solved systematically.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Culture That Attracts Talent
                  </h4>
                  <p className="font-inter text-gray-600">
                    Modern candidates research company culture. Show them you
                    listen. Show them voices matter.
                  </p>
                </div>
              </div>
            </div>

            {/* For Employees */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h3 className="font-montserrat mb-6 text-3xl font-bold text-coral">
                For Employees
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Safe Space to Speak
                  </h4>
                  <p className="font-inter text-gray-600">
                    No fear of retaliation. Anonymous when needed. Your voice
                    protected. Your concerns heard.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    See Your Impact
                  </h4>
                  <p className="font-inter text-gray-600">
                    Watch your feedback turn into real change. Problems you
                    report get solved. Ideas you share get implemented.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Stay Connected
                  </h4>
                  <p className="font-inter text-gray-600">
                    Know what&apos;s happening across the company. See how
                    leadership responds. Feel part of something bigger.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Recognition for Ideas
                  </h4>
                  <p className="font-inter text-gray-600">
                    When your suggestion saves money or improves processes, you
                    get credit. Visibility when you want it.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Track Your Contributions
                  </h4>
                  <p className="font-inter text-gray-600">
                    Personal dashboard shows your posts, their status, and their
                    impact. Quantify your value to the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section
        id="use-cases"
        className="w-full bg-gradient-to-b from-gray-50/50 to-white py-20"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-4xl font-extrabold text-navy md:text-4xl lg:text-4xl animate-fade-in">
            How Teams Use Anchora
          </h2>
          <p className="font-inter mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 animate-fade-in-up">
            Trusted across industries to give every employee a voice
          </p>
          <div className="mt-16 space-y-6">
            {/* Manufacturing & Warehouses */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-teal hover:shadow-lg">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-teal/10">
                    <svg
                      className="h-7 w-7 text-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L7 4z"
                      />
                    </svg>
                  </div>
                  <span>Manufacturing & Warehouses</span>
                </div>
                <svg
                  className="h-6 w-6 text-gray-400 transition-all duration-300 group-open:rotate-180 group-open:text-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-6 space-y-4 pl-[72px]">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Safety First, Voices Always
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Frontline workers report hazards immediately. Mobile app means
                  quick photos and posts from the factory floor. Safety issues
                  get resolved before accidents happen.
                </p>
                <div className="rounded-lg bg-teal/5 p-4 border-l-4 border-teal">
                  <p className="font-inter text-sm font-semibold text-navy">
                    Key Features:{" "}
                    <span className="font-normal text-gray-600">
                      Photo attachments, urgent priority flagging
                    </span>
                  </p>
                </div>
              </div>
            </details>

            {/* Tech Startups */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-teal hover:shadow-lg">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-coral/20 to-coral/10">
                    <svg
                      className="h-7 w-7 text-coral"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span>Tech Startups</span>
                </div>
                <svg
                  className="h-6 w-6 text-gray-400 transition-all duration-300 group-open:rotate-180 group-open:text-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-6 space-y-4 pl-[72px]">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Move Fast Without Breaking Culture
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Rapid growth shouldn&apos;t mean lost voices. Anchora scales
                  with you. From 10 to 1,000 employees, every person matters.
                </p>
                <div className="rounded-lg bg-teal/5 p-4 border-l-4 border-teal">
                  <p className="font-inter text-sm font-semibold text-navy">
                    Key Features:{" "}
                    <span className="font-normal text-gray-600">
                      Department scaling, trend analytics
                    </span>
                  </p>
                </div>
              </div>
            </details>

            {/* Healthcare */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-teal hover:shadow-lg">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-teal/10">
                    <svg
                      className="h-7 w-7 text-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <span>Healthcare</span>
                </div>
                <svg
                  className="h-6 w-6 text-gray-400 transition-all duration-300 group-open:rotate-180 group-open:text-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-6 space-y-4 pl-[72px]">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Staff Wellbeing = Patient Care
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Burned-out nurses can&apos;t give their best. Anonymous
                  feedback about scheduling, workload, and support needs helps
                  hospitals adjust before staff breaks.
                </p>
                <div className="rounded-lg bg-teal/5 p-4 border-l-4 border-teal">
                  <p className="font-inter text-sm font-semibold text-navy">
                    Key Features:{" "}
                    <span className="font-normal text-gray-600">
                      Anonymous posting, mental health support
                    </span>
                  </p>
                </div>
              </div>
            </details>

            {/* Retail & Hospitality */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-teal hover:shadow-lg">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-coral/20 to-coral/10">
                    <svg
                      className="h-7 w-7 text-coral"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <span>Retail & Hospitality</span>
                </div>
                <svg
                  className="h-6 w-6 text-gray-400 transition-all duration-300 group-open:rotate-180 group-open:text-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-6 space-y-4 pl-[72px]">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Frontline Feedback, Instant Action
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Cashiers see customer complaints first. Servers notice
                  operational issues. Floor staff knows what works and what
                  doesn&apos;t. Capture that knowledge.
                </p>
                <div className="rounded-lg bg-teal/5 p-4 border-l-4 border-teal">
                  <p className="font-inter text-sm font-semibold text-navy">
                    Key Features:{" "}
                    <span className="font-normal text-gray-600">
                      Mobile-first, quick posting
                    </span>
                  </p>
                </div>
              </div>
            </details>

            {/* Remote Teams */}
            <details className="group rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-teal hover:shadow-lg">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-teal/10">
                    <svg
                      className="h-7 w-7 text-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span>Remote Teams</span>
                </div>
                <svg
                  className="h-6 w-6 text-gray-400 transition-all duration-300 group-open:rotate-180 group-open:text-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-6 space-y-4 pl-[72px]">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Stay Connected Across Time Zones
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Async communication. Global voices. Cultural differences
                  respected. Anchora keeps distributed teams aligned and heard.
                </p>
                <div className="rounded-lg bg-teal/5 p-4 border-l-4 border-teal">
                  <p className="font-inter text-sm font-semibold text-navy">
                    Key Features:{" "}
                    <span className="font-normal text-gray-600">
                      Async updates, time-zone friendly
                    </span>
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="pricing w-full bg-gradient-to-b from-cloud to-white py-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-montserrat mb-4 text-center text-3xl font-bold text-navy md:text-3xl lg:text-3xl animate-fade-in">
            Simple, Transparent Pricing
          </h2>
          <p className="font-inter mb-12 text-center text-base text-gray-600 animate-fade-in-up">
            No hidden fees. No surprises. Just honest pricing.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Starter Plan */}
            <div className="transform rounded-xl border-2 border-gray-200 bg-white p-8 transition hover:border-teal">
              <h3 className="font-montserrat mb-2 text-xl font-bold text-navy">
                Starter
              </h3>
              <p className="font-inter mb-6 text-sm text-gray-600">
                Perfect for Small Teams
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-navy">$0</span>
                <span className="text-sm text-gray-600">/month</span>
              </div>

              <p className="font-inter mb-6 text-sm text-gray-600">
                Up to 10 employees
              </p>

              <p className="font-inter mb-4 text-sm font-semibold text-navy">
                Features:
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">All core features</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">3 dedicated feeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Anonymous posting</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Basic analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Mobile app access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Email support</span>
                </li>
              </ul>

              <a
                href="#contact-form"
                className="font-montserrat block rounded-lg bg-gray-100 py-3 text-center font-semibold text-navy transition hover:bg-gray-200"
              >
                Start Free Forever
              </a>
            </div>

            {/* Growth Plan */}
            <div className="transform rounded-xl border-2 border-gray-200 bg-white p-8 transition hover:border-navy">
              <h3 className="font-montserrat mb-2 text-xl font-bold text-navy">
                Growth
              </h3>
              <p className="font-inter mb-6 text-sm text-gray-600">For Growing Teams</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-navy">$39</span>
                <span className="text-sm text-gray-600">/month</span>
              </div>

              <p className="font-inter mb-2 text-xs text-gray-500">
                ~$0.78/user at 50 employees
              </p>
              <p className="font-inter mb-6 text-sm text-gray-600">
                11-50 employees
              </p>

              <p className="font-inter mb-4 text-sm font-semibold text-navy">
                Everything in Starter, plus:
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">
                    Advanced problem tracking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">
                    Department assignment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">
                    Priority management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Due date tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Priority support</span>
                </li>
              </ul>

              <a
                href="#contact-form"
                className="font-montserrat block rounded-lg bg-gray-100 py-3 text-center font-semibold text-navy transition hover:bg-gray-200"
              >
                Get Started
              </a>
            </div>

            {/* Professional Plan - MOST POPULAR */}
            <div className="relative transform rounded-xl border-2 border-coral bg-white p-8 shadow-xl lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="font-montserrat rounded-full bg-coral px-6 py-1.5 text-xs font-semibold text-white whitespace-nowrap shadow-lg">
                  MOST POPULAR
                </span>
              </div>

              <h3 className="font-montserrat mb-2 text-xl font-bold text-navy">
                Professional
              </h3>
              <p className="font-inter mb-6 text-sm text-gray-600">
                Best for Growing Companies
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-coral">$89</span>
                <span className="text-sm text-gray-600">/month</span>
              </div>

              <p className="font-inter mb-2 text-xs text-gray-500">
                ~$0.89/user at 100 employees
              </p>
              <p className="font-inter mb-6 text-sm text-gray-600">
                51-100 employees
              </p>

              <p className="font-inter mb-4 text-sm font-semibold text-navy">
                Everything in Growth, plus:
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-coral"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Activity timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-coral"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-coral"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Custom branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-coral"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Admin comments</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-coral"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-inter text-sm">Dedicated support</span>
                </li>
              </ul>

              <a
                href="#contact-form"
                className="font-montserrat block rounded-lg bg-coral py-3 text-center font-semibold text-white shadow-lg transition hover:opacity-90"
              >
                Start 14-Day Free Trial
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="transform rounded-xl border-2 border-gray-200 bg-white p-8 transition hover:border-navy">
              <h3 className="font-montserrat mb-2 text-xl font-bold text-navy">
                Enterprise
              </h3>
              <p className="font-inter mb-6 text-sm text-gray-600">
                For Large Organizations
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-navy">$99</span>
                <span className="text-sm text-gray-600">/month</span>
              </div>

              <p className="font-inter mb-2 text-xs text-gray-500">
                + $0.99 per user over 100
              </p>
              <p className="font-inter mb-6 text-sm text-gray-600">
                100+ employees
              </p>

              <p className="font-inter mb-4 text-sm font-semibold text-navy">
                Everything in Professional, plus:
              </p>
              <div className="mb-8 space-y-4">
                <div>
                  <h5 className="font-semibold mb-1 text-sm text-navy">
                    Enterprise Security
                  </h5>
                  <p className="text-xs text-gray-600">
                    SSO, on-premise options, advanced security
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-sm text-navy">
                    Integration & Customization
                  </h5>
                  <p className="text-xs text-gray-600">
                    API access, custom workflows, white-labeling
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-sm text-navy">
                    Premium Support
                  </h5>
                  <p className="text-xs text-gray-600">
                    Dedicated account manager, SLA guarantees
                  </p>
                </div>
              </div>

              <a
                href="#contact-form"
                className="font-montserrat block rounded-lg bg-navy py-3 text-center font-semibold text-white transition hover:opacity-90"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* Pricing FAQs */}
          <div className="mt-20">
            <h3 className="font-montserrat mb-8 text-center text-3xl font-bold text-navy">
              Frequently Asked Questions
            </h3>
            <div className="mx-auto max-w-3xl space-y-6">
              <details className="group rounded-lg border border-gray-200 bg-white p-6">
                <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                  <span>What happens after the free trial?</span>
                  <svg
                    className="h-5 w-5 transition group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="font-inter mt-4 text-gray-600">
                  No credit card required for trial. After 14 days, choose a
                  plan or stay on our free Starter plan (up to 10 employees).
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 bg-white p-6">
                <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                  <span>Can I cancel anytime?</span>
                  <svg
                    className="h-5 w-5 transition group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="font-inter mt-4 text-gray-600">
                  Yes. Cancel with one click. No questions asked. Get a prorated
                  refund if annual.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 bg-white p-6">
                <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                  <span>What counts as an &quot;employee&quot;?</span>
                  <svg
                    className="h-5 w-5 transition group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="font-inter mt-4 text-gray-600">
                  Any active user who can post or comment. Admins count.
                  View-only accounts don&apos;t.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 bg-white p-6">
                <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                  <span>Do you offer discounts for nonprofits?</span>
                  <svg
                    className="h-5 w-5 transition group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="font-inter mt-4 text-gray-600">
                  Yes! 50% off for registered nonprofits and educational
                  institutions. Contact us.
                </p>
              </details>

              <details className="group rounded-lg border border-gray-200 bg-white p-6">
                <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                  <span>Is my data secure?</span>
                  <svg
                    className="h-5 w-5 transition group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="font-inter mt-4 text-gray-600">
                  Bank-level encryption. Anonymous posts use AES-256. SOC 2 Type
                  II certified. GDPR compliant.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-4xl font-bold text-navy md:text-4xl lg:text-4xl animate-fade-in">
            See Anchora in Action
          </h2>
          <p className="font-inter mx-auto mt-6 max-w-3xl text-center text-lg text-gray-600 animate-fade-in-up">
            From posting feedback to tracking resolutions—see how easy it is to
            give every employee a voice
          </p>

          <div className="mt-16 space-y-12">
            {/* Screenshot 1: Employee View - Create Post */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">
                      1
                    </span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Employee View - Create Post
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Post in 30 seconds. Choose anonymous or named. Select
                    category. Add details. Done.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Choose from 3 dedicated feeds</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Toggle anonymous mode with one click</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Attach photos and documents</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                    <svg
                      className="h-16 w-16 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="font-inter mt-4 text-center text-sm text-gray-500">
                    Screenshot: Create Post Interface
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshot 2: Admin Dashboard */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                      <svg
                        className="h-16 w-16 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <p className="font-inter mt-4 text-center text-sm text-gray-500">
                      Screenshot: Admin Dashboard
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">
                      2
                    </span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Admin Dashboard
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    See all posts. Filter by status, priority, or department.
                    Never miss an issue.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Real-time feed of all submissions</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Filter and search capabilities</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Quick action buttons for assignments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Screenshot 3: Problem Tracking */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">
                      3
                    </span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Problem Tracking
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Update status. Assign owner. Set due date. Add comments.
                    Track to resolution.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>7-state workflow management</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Assign to departments and individuals</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Priority and due date tracking</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                    <svg
                      className="h-16 w-16 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <p className="font-inter mt-4 text-center text-sm text-gray-500">
                    Screenshot: Problem Tracking Interface
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshot 4: Analytics Dashboard */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                      <svg
                        className="h-16 w-16 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="font-inter mt-4 text-center text-sm text-gray-500">
                      Screenshot: Analytics Dashboard
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">
                      4
                    </span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Analytics Dashboard
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Data-driven insights. Resolution times. Employee
                    satisfaction. Department trends.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Visual charts and graphs</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Track trends over time</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Department and team breakdowns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Screenshot 5: Mobile View */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">
                      5
                    </span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Mobile View
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Works beautifully on any device. Post from anywhere. Stay
                    connected.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Optimized for iOS and Android</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Quick photo attachments from camera</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Push notifications for updates</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                    <svg
                      className="h-16 w-16 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="font-inter mt-4 text-center text-sm text-gray-500">
                    Screenshot: Mobile App Interface
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshot 6: Activity Timeline */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                      <svg
                        className="h-16 w-16 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="font-inter mt-4 text-center text-sm text-gray-500">
                      Screenshot: Activity Timeline
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">
                      6
                    </span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Activity Timeline
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Complete audit trail. Every action logged. Full
                    transparency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Chronological history of all actions</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>See who did what and when</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Documentation for compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact-form"
              className="font-montserrat inline-block rounded-lg bg-teal px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:opacity-90"
            >
              See It For Yourself - Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-teal/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-teal to-transparent"></div>
        </div>
      </div>

      {/* FAQ Section */}
      <section
        id="faq"
        className="w-full bg-gradient-to-b from-white to-gray-50/50 py-20"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="font-montserrat mb-4 text-center text-4xl font-extrabold text-navy">
            Frequently Asked Questions
          </h2>
          <p className="font-inter mb-16 text-center text-lg text-gray-600">
            Everything you need to know about Anchora
          </p>

          {Object.entries(faqData).map((category, categoryIndex) => {
            const [categoryName, questions] = category;

            // Define icons for each category
            const categoryIcons = {
              "About the Platform": (
                <svg
                  className="h-7 w-7 text-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              "About Security & Privacy": (
                <svg
                  className="h-7 w-7 text-coral"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              ),
              "About Pricing & Billing": (
                <svg
                  className="h-7 w-7 text-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            };

            return (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal/20 to-teal/10">
                    {categoryIcons[categoryName]}
                  </div>
                  <h3 className="font-montserrat text-2xl font-bold text-navy">
                    {categoryName}
                  </h3>
                </div>
                <div className="space-y-4">
                  {questions.map((faq, faqIndex) => {
                    const globalIndex = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openFaqIndex === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="rounded-xl border-2 border-gray-200 bg-white transition-all duration-200 hover:border-teal/50 hover:shadow-lg"
                      >
                        <button
                          onClick={() => toggleFaq(globalIndex)}
                          className="w-full p-6 text-left flex items-start justify-between gap-4 group"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start gap-3 flex-1">
                            <div
                              className={`flex-shrink-0 mt-0.5 transition-colors ${
                                isOpen ? "text-teal" : "text-gray-400"
                              }`}
                            >
                              <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <h4 className="font-montserrat text-lg font-semibold text-navy pr-4 group-hover:text-teal transition-colors">
                              {faq.question}
                            </h4>
                          </div>
                          <svg
                            className={`h-6 w-6 flex-shrink-0 text-teal transition-all duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 pl-[60px]">
                            <div className="border-l-4 border-teal/30 pl-4 py-2">
                              <p className="font-inter text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-coral/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-coral to-transparent"></div>
        </div>
      </div>

      {/* Contact Us Section */}
      <section
        id="contact-form"
        className="w-full bg-gradient-to-b from-cloud to-white py-20"
      >
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-navy md:text-4xl lg:text-4xl animate-fade-in">
              Get in Touch
            </h2>
            <p className="font-inter mt-4 text-lg text-gray-600 animate-fade-in-up">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="font-montserrat block text-sm font-semibold text-navy mb-2"
                >
                  Company Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition"
                  placeholder="Acme Corporation"
                />
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="font-montserrat block text-sm font-semibold text-navy mb-2"
                >
                  Your Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="font-montserrat block text-sm font-semibold text-navy mb-2"
                >
                  Email Address <span className="text-coral">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition"
                  placeholder="john@acme.com"
                />
              </div>

              {/* Message Body */}
              <div>
                <label
                  htmlFor="message"
                  className="font-montserrat block text-sm font-semibold text-navy mb-2"
                >
                  Message <span className="text-coral">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {formStatus.message && (
                <div
                  className={`rounded-lg p-4 ${
                    formStatus.type === "success"
                      ? "bg-teal/10 text-teal border border-teal/20"
                      : "bg-coral/10 text-coral border border-coral/20"
                  }`}
                >
                  <p className="font-inter text-sm font-semibold">
                    {formStatus.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full rounded-lg bg-coral px-8 py-4 font-montserrat text-lg font-bold text-white shadow-lg transition hover:bg-opacity-90 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-coral/30 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Additional Contact Info */}
              <div className="mt-8 border-t border-gray-200 pt-6 text-center">
                <p className="font-inter text-sm text-gray-600 mb-4">
                  Or reach us directly at:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
                  <a
                    href="mailto:hello@anchora.com"
                    className="font-inter font-semibold text-teal hover:text-teal-600 transition flex items-center gap-2"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    hello@anchora.com
                  </a>
                  <a
                    href="mailto:sales@anchora.com"
                    className="font-inter font-semibold text-teal hover:text-teal-600 transition flex items-center gap-2"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    sales@anchora.com
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full bg-gradient-to-r from-transparent via-navy/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="h-px bg-gradient-to-r from-transparent via-navy to-transparent"></div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section id="demo" className="w-full bg-navy py-20 text-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="font-montserrat text-4xl font-bold md:text-4xl lg:text-4xl">
              Ready to Give Your Team a Voice?
            </h2>
            <p className="font-inter mt-6 text-lg text-gray-300 md:text-xl">
              Join the companies building cultures where every voice matters.
              <br />
              Start your free trial today—no credit card required.
            </p>
          </div>

          {/* Two-CTA Layout */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {/* Primary CTA */}
            <div className="text-center">
              <a
                href="#contact-form"
                className="font-montserrat inline-block rounded-lg bg-coral px-10 py-5 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:bg-opacity-90"
              >
                Start 14-Day Free Trial
              </a>
              <p className="font-inter mt-3 text-sm text-gray-400">
                No credit card required • Set up in 5 minutes
              </p>
            </div>

            {/* Secondary CTA */}
            <div className="text-center">
              <a
                href="#contact-form"
                className="font-montserrat inline-block rounded-lg border-2 border-teal bg-transparent px-10 py-5 text-lg font-bold text-teal shadow-lg transition hover:scale-105 hover:bg-teal hover:text-white"
              >
                Schedule a Demo
              </a>
              <p className="font-inter mt-3 text-sm text-gray-400">
                See Anchora in action with our team
              </p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-gray-700 pt-10 md:grid-cols-5">
            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-6 w-6 flex-shrink-0 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">
                  14-day free trial
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-6 w-6 flex-shrink-0 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">
                  No credit card required
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-6 w-6 flex-shrink-0 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">
                  Cancel anytime
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-6 w-6 flex-shrink-0 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">
                  GDPR & SOC 2 compliant
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-6 w-6 flex-shrink-0 text-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">
                  Bank-level encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full bg-gray-900 py-16 text-white">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Footer Navigation */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Product */}
            <div>
              <h4 className="font-montserrat mb-4 text-lg font-bold">
                Product
              </h4>
              <ul className="font-inter space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#integrations"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Integrations (Coming Soon)
                  </a>
                </li>
                <li>
                  <a
                    href="#mobile"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Mobile App
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="font-montserrat mb-4 text-lg font-bold">
                Use Cases
              </h4>
              <ul className="font-inter space-y-2 text-sm">
                <li>
                  <a
                    href="#manufacturing"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a
                    href="#tech-startups"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Tech Startups
                  </a>
                </li>
                <li>
                  <a
                    href="#healthcare"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Healthcare
                  </a>
                </li>
                <li>
                  <a
                    href="#retail"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Retail & Hospitality
                  </a>
                </li>
                <li>
                  <a
                    href="#remote-teams"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Remote Teams
                  </a>
                </li>
                <li>
                  <a
                    href="#enterprise"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-montserrat mb-4 text-lg font-bold">
                Resources
              </h4>
              <ul className="font-inter space-y-2 text-sm">
                <li>
                  <a
                    href="#blog"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#help"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#api"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    API Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#brand"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Brand Assets
                  </a>
                </li>
                <li>
                  <a
                    href="#status"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Status Page
                  </a>
                </li>
                <li>
                  <a
                    href="#changelog"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-montserrat mb-4 text-lg font-bold">
                Company
              </h4>
              <ul className="font-inter space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Careers (We&apos;re Hiring!)
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#press"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Press Kit
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-gray-400 transition hover:text-teal"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-montserrat mb-4 text-lg font-bold">
                Contact
              </h4>
              <ul className="font-inter space-y-2 text-sm">
                <li className="text-gray-400">
                  <span className="font-semibold text-white">Email:</span>
                  <br />
                  <a
                    href="mailto:hello@anchora.com"
                    className="hover:text-teal"
                  >
                    hello@anchora.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="font-semibold text-white">Sales:</span>
                  <br />
                  <a
                    href="mailto:sales@anchora.com"
                    className="hover:text-teal"
                  >
                    sales@anchora.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="font-semibold text-white">Support:</span>
                  <br />
                  <a
                    href="mailto:support@anchora.com"
                    className="hover:text-teal"
                  >
                    support@anchora.com
                  </a>
                </li>
                <li className="mt-4">
                  <div className="flex gap-4">
                    <a
                      href="https://twitter.com/anchora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal"
                      aria-label="Twitter"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/company/anchora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="font-inter mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Anchora. All rights reserved.
            </p>
            <p className="mt-2 text-lg font-semibold text-gray-300">
              Your Anchor in Every Storm ⚓
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
