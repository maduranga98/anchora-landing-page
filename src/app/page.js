'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = {
    "About the Platform": [
      {
        question: "How is Anchora different from employee surveys?",
        answer: "Surveys are periodic snapshots. Anchora is continuous listening. Employees post when issues arise—not when HR schedules a survey. Plus, we track problems to resolution. Surveys just collect data."
      },
      {
        question: "Is Anchora really anonymous?",
        answer: "Yes. We use AES-256 encryption for anonymous posts. Even database admins can't see who posted. Only designated HR admins with explicit permission can decrypt in serious cases (harassment, threats)."
      },
      {
        question: "What if employees abuse anonymity?",
        answer: "Rare, but possible. Admins can flag inappropriate content. Repeated abuse patterns can be detected. Plus, most posts are constructive—employees want real problems solved."
      },
      {
        question: "How long does setup take?",
        answer: "5 minutes. Create account → Add company info → Invite employees → Start posting. No consulting required. No training needed."
      },
      {
        question: "Do you integrate with Slack/Teams/JIRA?",
        answer: "Not yet, but coming soon! Currently focused on perfecting the core experience. Integrations launching Q2 2025."
      }
    ],
    "About Security & Privacy": [
      {
        question: "Where is my data stored?",
        answer: "Google Cloud (US) or EU servers (you choose). Bank-level encryption. SOC 2 Type II certified. GDPR and CCPA compliant."
      },
      {
        question: "Who can see posts?",
        answer: "By default, all company employees see all posts (transparency). Admins can make posts department-only or HR-only for sensitive issues."
      },
      {
        question: "Can employees delete their posts?",
        answer: "Yes, within 24 hours. After that, posts become part of company record (prevents deleting evidence of serious issues)."
      },
      {
        question: "What happens to data if we cancel?",
        answer: "You get a full export (JSON/CSV). We delete all data within 30 days per GDPR requirements."
      }
    ],
    "About Pricing & Billing": [
      {
        question: "What if we grow mid-year?",
        answer: "You're only charged for new employees added. Prorated to your billing cycle. No penalties for growth!"
      },
      {
        question: "Do inactive employees count?",
        answer: "No. Only active users who can post/comment. Deactivated accounts don't count toward your bill."
      },
      {
        question: "Can we pause our account?",
        answer: "Yes, but you lose access to features. Data is preserved. Unpause anytime. Better to use free tier (10 employees)."
      },
      {
        question: "Do you offer annual prepay discounts?",
        answer: "Yes! Pay annually, get 2 months free (16% savings). Plus, lock in your rate for the year."
      }
    ]
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cloud text-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center">
            <Image src="/logo-anchora.svg" alt="Anchora Logo" width={160} height={48} priority />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 text-sm font-semibold lg:flex">
            <a href="#features" className="transition hover:text-teal">Features</a>
            <a href="#benefits" className="transition hover:text-teal">Benefits</a>
            <a href="#use-cases" className="transition hover:text-teal">Use Cases</a>
            <a href="#pricing" className="transition hover:text-teal">Pricing</a>
            <a href="#faq" className="transition hover:text-teal">FAQ</a>
            <a href="#contact-form" className="transition hover:text-teal">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="/signup" className="rounded-lg bg-coral px-4 py-2 text-sm font-bold text-white transition hover:bg-opacity-80 hover:shadow-lg">
              Start Free Trial
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-navy focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="container mx-auto flex flex-col space-y-4 p-4 text-sm font-semibold">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-teal">Features</a>
              <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-teal">Benefits</a>
              <a href="#use-cases" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-teal">Use Cases</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-teal">Pricing</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-teal">FAQ</a>
              <a href="#contact-form" onClick={() => setMobileMenuOpen(false)} className="transition hover:text-teal">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero w-full bg-gradient-to-b from-cloud to-white py-12 px-4 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-montserrat text-4xl font-bold leading-tight text-navy sm:text-5xl md:text-6xl">
            Your Anchor in Every Storm
          </h1>
          <p className="mx-auto mt-4 max-w-4xl text-xl font-semibold text-navy sm:mt-6 sm:text-2xl md:text-3xl px-4">
            Give Every Employee a Voice That Creates Real Change
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg px-4">
            When work stress and personal challenges collide, Anchora keeps your team
            grounded, heard, and thriving. Anonymous feedback. Problem tracking.
            Real solutions. Starting at just <span className="font-semibold text-teal">$1 per employee per month</span>.
          </p>
          <div className="mt-8 mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:mt-10 sm:mb-8 px-4">
            <a
              href="/signup"
              className="w-full sm:w-auto inline-block rounded-lg bg-coral px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-opacity-90 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg text-center"
            >
              Start Free Trial - No Credit Card Required
            </a>
            <a
              href="/demo"
              className="w-full sm:w-auto inline-block rounded-lg border-2 border-navy bg-white px-6 py-3 text-base font-semibold text-navy transition hover:bg-gray-50 sm:px-8 sm:py-4 sm:text-lg text-center"
            >
              Watch 2-Min Demo
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-navy">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
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
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-montserrat text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            The Silent Crisis in Your Workplace
          </h2>
          <p className="font-inter mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-600 sm:mt-6 sm:text-xl">
            67% of employees experience workplace stress but suffer in silence.
            <br />
            Problems go unreported. Ideas never surface. Your best people quietly quit.
          </p>
          <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3 md:mt-16">
            <div className="rounded-xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition hover:shadow-2xl">
              <h3 className="font-montserrat text-2xl font-bold text-navy">The Cost</h3>
              <p className="font-inter mt-6 text-4xl font-bold text-coral">$359 Billion</p>
              <p className="font-inter mb-6 text-lg font-semibold text-navy">Lost Annually</p>
              <ul className="font-inter space-y-3 text-left text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Unreported safety issues lead to accidents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Harassment goes unnoticed until lawsuits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Innovation dies in silence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Top talent leaves without warning</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition hover:shadow-2xl">
              <h3 className="font-montserrat text-2xl font-bold text-navy">The Barrier</h3>
              <p className="font-inter mt-6 text-4xl font-bold text-coral">Employees Fear</p>
              <p className="font-inter mb-6 text-lg font-semibold text-navy">Speaking Up</p>
              <ul className="font-inter space-y-3 text-left text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>71% worry about retaliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>No clear feedback channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Belief that nothing will change</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Anonymous options not trusted</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl transition hover:shadow-2xl">
              <h3 className="font-montserrat text-2xl font-bold text-navy">The Impact</h3>
              <p className="font-inter mt-6 text-4xl font-bold text-coral">Your Team</p>
              <p className="font-inter mb-6 text-lg font-semibold text-navy">Drifts Apart</p>
              <ul className="font-inter space-y-3 text-left text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Engagement scores drop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Turnover rates spike</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Productivity suffers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-coral">•</span>
                  <span>Culture deteriorates</span>
                </li>
              </ul>
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

      {/* The Solution Section */}
      <section id="features" className="w-full bg-gradient-to-b from-cloud to-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-montserrat text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl">
            Anchora Gives Every Employee a Safe Voice—
            <br className="hidden sm:block" />
            And Every Problem a Path to Resolution
          </h2>
          <div className="mt-12 grid gap-12 sm:gap-14 md:grid-cols-3 md:mt-16 md:gap-16">
            {/* Step 1: Share Safely */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-600 shadow-lg">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy">Step 1: Share Safely</h3>
              <p className="font-inter mt-2 text-lg font-semibold text-teal">Anonymous or Named—Employee's Choice</p>
              <p className="font-inter mt-4 leading-relaxed text-gray-600">
                Employees post ideas, report problems, or start discussions. They control their privacy. No fear. No barriers. Just honest communication.
              </p>
              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <p className="font-inter mb-4 text-sm font-semibold text-navy">Features:</p>
                <ul className="space-y-2 text-left text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>True anonymity with encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mobile-first design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Post in 30 seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Attach photos/documents</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2: Track Everything */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-600 shadow-lg">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy">Step 2: Track Everything</h3>
              <p className="font-inter mt-2 text-lg font-semibold text-teal">From Open to Resolved—Nothing Falls Through Cracks</p>
              <p className="font-inter mt-4 leading-relaxed text-gray-600">
                Every post gets tracked through a clear workflow. Admins assign owners, set priorities, and update status. Total transparency. Zero lost voices.
              </p>
              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <p className="font-inter mb-4 text-sm font-semibold text-navy">Workflow:</p>
                <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-gray-600">
                  <span className="rounded bg-coral px-2 py-1 text-white">Open</span>
                  <span>→</span>
                  <span className="rounded bg-gray-400 px-2 py-1 text-white">Acknowledged</span>
                  <span>→</span>
                  <span className="rounded bg-teal px-2 py-1 text-white">In Progress</span>
                  <span>→</span>
                  <span className="rounded bg-navy px-2 py-1 text-white">Resolved</span>
                </div>
                <p className="font-inter mb-3 text-sm font-semibold text-navy">Admin Powers:</p>
                <ul className="space-y-2 text-left text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Set priority (Critical to Low)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Assign to teams/individuals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Add due dates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Comment publicly or privately</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: See Real Action */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-600 shadow-lg">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy">Step 3: See Real Action</h3>
              <p className="font-inter mt-2 text-lg font-semibold text-teal">Voices Create Change—Employees See Results</p>
              <p className="font-inter mt-4 leading-relaxed text-gray-600">
                When problems get solved, everyone sees it. When ideas get implemented, creators get recognized. Culture transforms. Trust builds. Teams thrive.
              </p>
              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <p className="font-inter mb-4 text-sm font-semibold text-navy">Impact Tracking:</p>
                <ul className="space-y-2 text-left text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Resolution time metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Employee satisfaction scores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Department analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trend identification</span>
                  </li>
                </ul>
              </div>
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
      <section id="key-features" className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            Everything You Need to Build a Culture That Listens
          </h2>
          <div className="mt-12 grid gap-8 sm:gap-10 md:grid-cols-2 md:mt-16 md:gap-12">
            {/* Feature 1: Anonymous & Named Posting */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Anonymous & Named Posting
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">True Psychological Safety</p>
              <p className="font-inter leading-relaxed text-gray-600">
                Employees choose: anonymous for sensitive issues, named for visibility. AES encryption protects identities. Only admins with permission can decrypt.
              </p>
            </div>

            {/* Feature 2: Smart Problem Tracking */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Smart Problem Tracking
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Open → Acknowledged → Resolved</p>
              <p className="font-inter leading-relaxed text-gray-600">
                7-state workflow ensures nothing gets forgotten. Every problem has an owner, priority, and due date. Real-time status updates keep everyone informed.
              </p>
            </div>

            {/* Feature 3: Three Dedicated Feeds */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Three Dedicated Feeds
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Problems • Creative Ideas • Discussions</p>
              <p className="font-inter leading-relaxed text-gray-600">
                Organized channels keep conversations focused. Problem reports get urgent attention. Creative ideas spark innovation. Discussions build community.
              </p>
            </div>

            {/* Feature 4: Department Assignment */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Department Assignment
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Right Problem, Right Team</p>
              <p className="font-inter leading-relaxed text-gray-600">
                Route issues to the teams that can solve them. HR handles harassment. IT fixes tech problems. Facilities addresses safety concerns.
              </p>
            </div>

            {/* Feature 5: Real-Time Analytics */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Real-Time Analytics
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Data-Driven Culture Insights</p>
              <p className="font-inter leading-relaxed text-gray-600">
                See which departments need support. Track resolution times. Measure employee satisfaction. Identify trends before they become crises.
              </p>
            </div>

            {/* Feature 6: Mobile-First Design */}
            <div className="rounded-xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-teal">
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">
                Mobile-First Design
              </h3>
              <p className="font-inter mb-4 text-lg font-semibold text-teal">Post from Anywhere, Anytime</p>
              <p className="font-inter leading-relaxed text-gray-600">
                Frontline workers don't sit at desks. Anchora works beautifully on phones. Quick posts. Easy reading. Zero friction.
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
      <section id="benefits" className="w-full bg-gradient-to-b from-cloud to-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
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
                    Catch dissatisfaction before it becomes resignation. Exit interviews become unnecessary when you listen continuously.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Prevent Legal Issues
                  </h4>
                  <p className="font-inter text-gray-600">
                    Documented trail of reported issues protects your company. Harassment, safety violations, and discrimination surface early.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Data-Driven Decisions
                  </h4>
                  <p className="font-inter text-gray-600">
                    Stop guessing what employees need. Real insights from real people guide your people strategy.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Faster Problem Resolution
                  </h4>
                  <p className="font-inter text-gray-600">
                    Average time from problem to solution drops 60%. Issues get assigned, tracked, and solved systematically.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Culture That Attracts Talent
                  </h4>
                  <p className="font-inter text-gray-600">
                    Modern candidates research company culture. Show them you listen. Show them voices matter.
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
                    No fear of retaliation. Anonymous when needed. Your voice protected. Your concerns heard.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    See Your Impact
                  </h4>
                  <p className="font-inter text-gray-600">
                    Watch your feedback turn into real change. Problems you report get solved. Ideas you share get implemented.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Stay Connected
                  </h4>
                  <p className="font-inter text-gray-600">
                    Know what's happening across the company. See how leadership responds. Feel part of something bigger.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Recognition for Ideas
                  </h4>
                  <p className="font-inter text-gray-600">
                    When your suggestion saves money or improves processes, you get credit. Visibility when you want it.
                  </p>
                </div>

                <div>
                  <h4 className="font-montserrat mb-2 text-xl font-bold text-navy">
                    Track Your Contributions
                  </h4>
                  <p className="font-inter text-gray-600">
                    Personal dashboard shows your posts, their status, and their impact. Quantify your value to the organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="w-full bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-4xl font-bold text-navy md:text-5xl">
            How Teams Use Anchora
          </h2>
          <div className="mt-16 space-y-6">
            {/* Manufacturing & Warehouses */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Manufacturing & Warehouses</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Safety First, Voices Always
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Frontline workers report hazards immediately. Mobile app means quick photos and posts from the factory floor. Safety issues get resolved before accidents happen.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Photo attachments, urgent priority flagging</span>
                </p>
              </div>
            </details>

            {/* Tech Startups */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Tech Startups</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Move Fast Without Breaking Culture
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Rapid growth shouldn't mean lost voices. Anchora scales with you. From 10 to 1,000 employees, every person matters.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Department scaling, trend analytics</span>
                </p>
              </div>
            </details>

            {/* Healthcare */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Healthcare</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Staff Wellbeing = Patient Care
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Burned-out nurses can't give their best. Anonymous feedback about scheduling, workload, and support needs helps hospitals adjust before staff breaks.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Anonymous posting, mental health support</span>
                </p>
              </div>
            </details>

            {/* Retail & Hospitality */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Retail & Hospitality</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Frontline Feedback, Instant Action
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Cashiers see customer complaints first. Servers notice operational issues. Floor staff knows what works and what doesn't. Capture that knowledge.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Mobile-first, quick posting</span>
                </p>
              </div>
            </details>

            {/* Remote Teams */}
            <details className="group rounded-xl border-2 border-gray-200 p-6 transition hover:border-teal">
              <summary className="flex cursor-pointer items-center justify-between font-montserrat text-2xl font-bold text-navy">
                <span>Remote Teams</span>
                <svg className="h-6 w-6 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-4">
                <h4 className="font-montserrat text-xl font-semibold text-teal">
                  Stay Connected Across Time Zones
                </h4>
                <p className="font-inter leading-relaxed text-gray-600">
                  Async communication. Global voices. Cultural differences respected. Anchora keeps distributed teams aligned and heard.
                </p>
                <p className="font-inter text-sm font-semibold text-navy">
                  Key Feature: <span className="font-normal text-gray-600">Async updates, time-zone friendly</span>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing w-full bg-gradient-to-b from-cloud to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
            <h2 className="font-montserrat mb-4 text-center text-4xl font-bold text-navy md:text-5xl">
            Simple, Transparent Pricing
            </h2>
            <p className="font-inter mb-12 text-center text-lg text-gray-600">
            No hidden fees. No surprises. Just honest pricing.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="transform rounded-xl border-2 border-gray-200 bg-white p-8 transition hover:border-teal">
                <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">Starter</h3>
                <p className="font-inter mb-6 text-gray-600">Perfect for Small Teams</p>

                <div className="mb-6">
                <span className="text-5xl font-bold text-navy">$0</span>
                <span className="text-gray-600">/month</span>
                </div>

                <p className="font-inter mb-6 text-sm text-gray-600">Up to 10 employees</p>

                <p className="font-inter mb-4 text-sm font-semibold text-navy">Features:</p>
                <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">All core features</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">3 dedicated feeds</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Anonymous posting</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Basic analytics</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Mobile app access</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Email support</span>
                </li>
                </ul>

                <a href="/signup?plan=starter" className="font-montserrat block rounded-lg bg-gray-100 py-3 text-center font-semibold text-navy transition hover:bg-gray-200">
                Start Free Forever
                </a>
            </div>

            {/* Professional Plan - MOST POPULAR */}
            <div className="relative transform rounded-xl border-2 border-teal bg-white p-8 shadow-xl md:scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                <span className="font-montserrat rounded-full bg-coral px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                </span>
                </div>

                <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">Professional</h3>
                <p className="font-inter mb-6 text-gray-600">Best for Growing Companies</p>

                <div className="mb-6">
                <span className="text-5xl font-bold text-teal">$1</span>
                <span className="text-gray-600">/employee/month</span>
                </div>

                <p className="font-inter mb-6 text-sm text-gray-600">Billed annually ($12/employee/year)<br/>Minimum 11 employees</p>

                <p className="font-inter mb-4 text-sm font-semibold text-navy">Everything in Starter, plus:</p>
                <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Advanced problem tracking</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Department assignment</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Priority management</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Due date tracking</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Admin comments</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Activity timeline</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Custom branding</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Priority support</span>
                </li>
                </ul>

                <a href="/signup?plan=professional" className="font-montserrat block rounded-lg bg-teal py-3 text-center font-semibold text-white shadow-lg transition hover:opacity-90">
                Start 14-Day Free Trial
                </a>
            </div>

            {/* Enterprise Plan */}
            <div className="transform rounded-xl border-2 border-gray-200 bg-white p-8 transition hover:border-navy">
                <h3 className="font-montserrat mb-2 text-2xl font-bold text-navy">Enterprise</h3>
                <p className="font-inter mb-6 text-gray-600">Custom Solutions for Large Teams</p>

                <div className="mb-6">
                <span className="text-5xl font-bold text-navy">Custom</span>
                <span className="text-gray-600"> Pricing</span>
                </div>

                <p className="font-inter mb-6 text-sm text-gray-600">500+ employees</p>

                <p className="font-inter mb-4 text-sm font-semibold text-navy">Everything in Professional, plus:</p>
                <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">SSO integration</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Custom workflows</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">API access</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">White-labeling</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">SLA guarantees</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">On-premise options</span>
                </li>
                <li className="flex items-start gap-2">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-sm">Advanced security</span>
                </li>
                </ul>

                <a href="/contact-sales" className="font-montserrat block rounded-lg bg-navy py-3 text-center font-semibold text-white transition hover:opacity-90">
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
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    No credit card required for trial. After 14 days, choose a plan or stay on our free Starter plan (up to 10 employees).
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                    <span>Can I cancel anytime?</span>
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    Yes. Cancel with one click. No questions asked. Get a prorated refund if annual.
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                    <span>What counts as an "employee"?</span>
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    Any active user who can post or comment. Admins count. View-only accounts don't.
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                    <span>Do you offer discounts for nonprofits?</span>
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    Yes! 50% off for registered nonprofits and educational institutions. Contact us.
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-montserrat text-lg font-semibold text-navy">
                    <span>Is my data secure?</span>
                    <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="font-inter mt-4 text-gray-600">
                    Bank-level encryption. Anonymous posts use AES-256. SOC 2 Type II certified. GDPR compliant.
                  </p>
                </details>
              </div>
            </div>
        </div>
    </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-montserrat text-center text-4xl font-bold text-navy md:text-5xl">
            See Anchora in Action
          </h2>
          <p className="font-inter mx-auto mt-6 max-w-3xl text-center text-lg text-gray-600">
            From posting feedback to tracking resolutions—see how easy it is to give every employee a voice
          </p>

          <div className="mt-16 space-y-12">
            {/* Screenshot 1: Employee View - Create Post */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Employee View - Create Post
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Post in 30 seconds. Choose anonymous or named. Select category. Add details. Done.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Choose from 3 dedicated feeds</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Toggle anonymous mode with one click</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Attach photos and documents</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                    <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Create Post Interface</p>
                </div>
              </div>
            </div>

            {/* Screenshot 2: Admin Dashboard */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                      <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Admin Dashboard</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Admin Dashboard
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    See all posts. Filter by status, priority, or department. Never miss an issue.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Real-time feed of all submissions</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Filter and search capabilities</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                    <span className="font-montserrat text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Problem Tracking
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Update status. Assign owner. Set due date. Add comments. Track to resolution.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>7-state workflow management</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Assign to departments and individuals</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Priority and due date tracking</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                    <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Problem Tracking Interface</p>
                </div>
              </div>
            </div>

            {/* Screenshot 4: Analytics Dashboard */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                      <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Analytics Dashboard</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Analytics Dashboard
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Data-driven insights. Resolution times. Employee satisfaction. Department trends.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Visual charts and graphs</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Track trends over time</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
                    <span className="font-montserrat text-2xl font-bold text-white">5</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Mobile View
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Works beautifully on any device. Post from anywhere. Stay connected.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Optimized for iOS and Android</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Quick photo attachments from camera</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Push notifications for updates</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                    <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Mobile App Interface</p>
                </div>
              </div>
            </div>

            {/* Screenshot 6: Activity Timeline */}
            <div className="rounded-2xl bg-gradient-to-br from-cloud to-white p-8 shadow-lg">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1">
                  <div className="rounded-lg bg-gray-100 p-6">
                    <div className="aspect-video flex items-center justify-center rounded-lg bg-white shadow-inner">
                      <svg className="h-16 w-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-inter mt-4 text-center text-sm text-gray-500">Screenshot: Activity Timeline</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal">
                    <span className="font-montserrat text-2xl font-bold text-white">6</span>
                  </div>
                  <h3 className="font-montserrat mb-4 text-2xl font-bold text-navy">
                    Activity Timeline
                  </h3>
                  <p className="font-inter mb-4 text-lg leading-relaxed text-gray-600">
                    Complete audit trail. Every action logged. Full transparency.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Chronological history of all actions</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>See who did what and when</span>
                    </li>
                    <li className="flex items-start gap-2 font-inter text-sm text-gray-600">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Documentation for compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/signup" className="font-montserrat inline-block rounded-lg bg-teal px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:opacity-90">
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
      <section id="faq" className="w-full bg-white py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="font-montserrat mb-4 text-center text-4xl font-bold text-navy">
            Frequently Asked Questions
          </h2>
          <p className="font-inter mb-12 text-center text-lg text-gray-600">
            Everything you need to know about Anchora
          </p>

          {Object.entries(faqData).map((category, categoryIndex) => {
            const [categoryName, questions] = category;
            return (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h3 className="font-montserrat mb-6 text-2xl font-bold text-navy">
                  {categoryName}
                </h3>
                <div className="space-y-4">
                  {questions.map((faq, faqIndex) => {
                    const globalIndex = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openFaqIndex === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="rounded-lg border border-gray-200 bg-cloud transition-all hover:shadow-md"
                      >
                        <button
                          onClick={() => toggleFaq(globalIndex)}
                          className="w-full p-6 text-left flex items-start justify-between gap-4"
                          aria-expanded={isOpen}
                        >
                          <h4 className="font-montserrat text-lg font-semibold text-navy pr-4">
                            {faq.question}
                          </h4>
                          <svg
                            className={`h-6 w-6 flex-shrink-0 text-teal transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="font-inter text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
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
      <section id="contact-form" className="w-full bg-gradient-to-b from-cloud to-white py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-navy md:text-5xl">
              Get in Touch
            </h2>
            <p className="font-inter mt-4 text-lg text-gray-600">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
            <form className="space-y-6">
              {/* Company Name */}
              <div>
                <label htmlFor="company-name" className="font-montserrat block text-sm font-semibold text-navy mb-2">
                  Company Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition"
                  placeholder="Acme Corporation"
                />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="font-montserrat block text-sm font-semibold text-navy mb-2">
                  Your Name <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition"
                  placeholder="John Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="font-montserrat block text-sm font-semibold text-navy mb-2">
                  Email Address <span className="text-coral">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition"
                  placeholder="john@acme.com"
                />
              </div>

              {/* Message Body */}
              <div>
                <label htmlFor="message" className="font-montserrat block text-sm font-semibold text-navy mb-2">
                  Message <span className="text-coral">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 transition resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-coral px-8 py-4 font-montserrat text-lg font-bold text-white shadow-lg transition hover:bg-opacity-90 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-coral/30"
                >
                  Send Message
                </button>
              </div>

              {/* Additional Contact Info */}
              <div className="mt-8 border-t border-gray-200 pt-6 text-center">
                <p className="font-inter text-sm text-gray-600 mb-4">
                  Or reach us directly at:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
                  <a href="mailto:hello@anchora.com" className="font-inter font-semibold text-teal hover:text-teal-600 transition flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@anchora.com
                  </a>
                  <a href="mailto:sales@anchora.com" className="font-inter font-semibold text-teal hover:text-teal-600 transition flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
            <h2 className="font-montserrat text-4xl font-bold md:text-5xl">
              Ready to Give Your Team a Voice?
            </h2>
            <p className="font-inter mt-6 text-lg text-gray-300 md:text-xl">
              Join the companies building cultures where every voice matters.<br />
              Start your free trial today—no credit card required.
            </p>
          </div>

          {/* Two-CTA Layout */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            {/* Primary CTA */}
            <div className="text-center">
              <a
                href="/signup"
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
                href="/demo"
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
              <svg className="mt-1 h-6 w-6 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">14-day free trial</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="mt-1 h-6 w-6 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">No credit card required</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="mt-1 h-6 w-6 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">Cancel anytime</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="mt-1 h-6 w-6 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">GDPR & SOC 2 compliant</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="mt-1 h-6 w-6 flex-shrink-0 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-inter text-sm font-semibold">Bank-level encryption</p>
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
              <h4 className="font-montserrat mb-4 text-lg font-bold">Product</h4>
              <ul className="font-inter space-y-2 text-sm">
                <li><a href="#features" className="text-gray-400 transition hover:text-teal">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 transition hover:text-teal">Pricing</a></li>
                <li><a href="#integrations" className="text-gray-400 transition hover:text-teal">Integrations (Coming Soon)</a></li>
                <li><a href="#mobile" className="text-gray-400 transition hover:text-teal">Mobile App</a></li>
                <li><a href="#security" className="text-gray-400 transition hover:text-teal">Security</a></li>
                <li><a href="#roadmap" className="text-gray-400 transition hover:text-teal">Roadmap</a></li>
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="font-montserrat mb-4 text-lg font-bold">Use Cases</h4>
              <ul className="font-inter space-y-2 text-sm">
                <li><a href="#manufacturing" className="text-gray-400 transition hover:text-teal">Manufacturing</a></li>
                <li><a href="#tech-startups" className="text-gray-400 transition hover:text-teal">Tech Startups</a></li>
                <li><a href="#healthcare" className="text-gray-400 transition hover:text-teal">Healthcare</a></li>
                <li><a href="#retail" className="text-gray-400 transition hover:text-teal">Retail & Hospitality</a></li>
                <li><a href="#remote-teams" className="text-gray-400 transition hover:text-teal">Remote Teams</a></li>
                <li><a href="#enterprise" className="text-gray-400 transition hover:text-teal">Enterprise</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-montserrat mb-4 text-lg font-bold">Resources</h4>
              <ul className="font-inter space-y-2 text-sm">
                <li><a href="#blog" className="text-gray-400 transition hover:text-teal">Blog</a></li>
                <li><a href="#help" className="text-gray-400 transition hover:text-teal">Help Center</a></li>
                <li><a href="#api" className="text-gray-400 transition hover:text-teal">API Documentation</a></li>
                <li><a href="#brand" className="text-gray-400 transition hover:text-teal">Brand Assets</a></li>
                <li><a href="#status" className="text-gray-400 transition hover:text-teal">Status Page</a></li>
                <li><a href="#changelog" className="text-gray-400 transition hover:text-teal">Changelog</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-montserrat mb-4 text-lg font-bold">Company</h4>
              <ul className="font-inter space-y-2 text-sm">
                <li><a href="#about" className="text-gray-400 transition hover:text-teal">About Us</a></li>
                <li><a href="#careers" className="text-gray-400 transition hover:text-teal">Careers (We're Hiring!)</a></li>
                <li><a href="#contact" className="text-gray-400 transition hover:text-teal">Contact</a></li>
                <li><a href="#press" className="text-gray-400 transition hover:text-teal">Press Kit</a></li>
                <li><a href="#privacy" className="text-gray-400 transition hover:text-teal">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-400 transition hover:text-teal">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-montserrat mb-4 text-lg font-bold">Contact</h4>
              <ul className="font-inter space-y-2 text-sm">
                <li className="text-gray-400">
                  <span className="font-semibold text-white">Email:</span><br />
                  <a href="mailto:hello@anchora.com" className="hover:text-teal">hello@anchora.com</a>
                </li>
                <li className="text-gray-400">
                  <span className="font-semibold text-white">Sales:</span><br />
                  <a href="mailto:sales@anchora.com" className="hover:text-teal">sales@anchora.com</a>
                </li>
                <li className="text-gray-400">
                  <span className="font-semibold text-white">Support:</span><br />
                  <a href="mailto:support@anchora.com" className="hover:text-teal">support@anchora.com</a>
                </li>
                <li className="mt-4">
                  <div className="flex gap-4">
                    <a href="https://twitter.com/anchora" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal" aria-label="Twitter">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/anchora" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal" aria-label="LinkedIn">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
