import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import BlogTeaseStrip from "@/components/BlogTeaseStrip";
import SecuritySection from "@/components/SecuritySection";
import SimplePricing from "@/components/SimplePricing";
import { FAQSection } from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { WebVitals } from "./web-vitals";
import BookingWidget from "@/components/BookingWidget";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://voxwel.com",
  },
};

export default function Home() {
  return (
    <ErrorBoundary>
      <WebVitals />
      {/* Runs once in the browser — adds .visible to .fade-in-up elements on scroll */}
      <ScrollAnimationObserver />
      <main className="min-h-screen w-full overflow-x-hidden">
        {/* Section 1 — Navbar */}
        <Navigation />
        {/* Section 2 — Hero */}
        <Hero />
        {/* Section 3 — Trust Bar */}
        <TrustBar />
        {/* Section 4 — Problem / Stats */}
        <ProblemSection />
        {/* Section 5 — How It Works */}
        <HowItWorks />
        {/* Section 6 — Features */}
        <FeaturesSection />
        {/* Blog strip — between Features and Security */}
        <BlogTeaseStrip />
        {/* Section 7 — Security */}
        <SecuritySection />
        {/* Section 8 — Pricing (calculator logic preserved) */}
        <SimplePricing />
        {/* Section 9 — FAQ */}
        <FAQSection />
        {/* Section 10 — Final CTA */}
        <FinalCTA />
        {/* Section 11 — Contact (EmailJS form logic preserved) */}
        <Contact />
        {/* Section 12 — Footer */}
        <Footer />
        <BookingWidget />
      </main>
    </ErrorBoundary>
  );
}
