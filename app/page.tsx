import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ProductTourSection from "@/components/ProductTourSection";
import FeaturesSection from "@/components/FeaturesSection";
import AdminDashboardSection from "@/components/AdminDashboardSection";
import SimplePricing from "@/components/SimplePricing";
import { FAQSection } from "@/components/FAQSection";
import BlogTeaseStrip from "@/components/BlogTeaseStrip";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { WebVitals } from "./web-vitals";

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
      <ScrollAnimationObserver />
      <main className="min-h-screen w-full overflow-x-hidden pt-16">
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
        {/* Section 6 — Product Tour */}
        <ProductTourSection />
        {/* Section 7 — Features (tab UI) */}
        <FeaturesSection />
        {/* Section 8 — Admin Dashboard */}
        <AdminDashboardSection />
        {/* Section 9 — Pricing (calculator logic preserved) */}
        <SimplePricing />
        {/* Section 10 — FAQ */}
        <FAQSection />
        {/* Blog strip — after FAQ, before Final CTA */}
        <BlogTeaseStrip />
        {/* Section 11 — Final CTA */}
        <FinalCTA />
        {/* Section 12 — Contact (EmailJS form logic preserved) */}
        <Contact />
        {/* Section 13 — Footer */}
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
