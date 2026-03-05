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
  title: "VoxWel — Anonymous Employee Reporting Software | Whistleblower Platform",
  description:
    "VoxWel gives employees a confidential, AES-256 encrypted channel to report workplace harassment, fraud, and safety violations anonymously. GDPR compliant. EU Whistleblowing Directive ready. Setup in 24 hours. $1/employee/month.",
  alternates: {
    canonical: "https://voxwel.com",
  },
  openGraph: {
    url: "https://voxwel.com",
    title: "VoxWel — Anonymous Employee Reporting Software",
    description:
      "Give every employee a safe voice. Anonymous encrypted workplace reporting. GDPR compliant. $1/employee/month.",
    images: [
      {
        url: "https://voxwel.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoxWel anonymous employee reporting platform dashboard",
      },
    ],
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
