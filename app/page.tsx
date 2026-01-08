import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SEOIntro from "@/components/SEOIntro";
import ProblemStatement from "@/components/ProblemStatement";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import ComplianceSection from "@/components/ComplianceSection";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { WebVitals } from "./web-vitals";
import { FAQSection } from "@/components/FAQSection";

import { Metadata } from "next";
import SilentCrisis from "@/components/SilentCrisis";
import BrandStory from "@/components/BrandStory";
import BlogTeaseStrip from "@/components/BlogTeaseStrip";
import SimplePricing from "@/components/SimplePricing";
import FeaturesShowcase from "@/components/FeaturesShowcase";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://voxwel.com",
  },
};

export default function Home() {
  return (
    <ErrorBoundary>
      <WebVitals />
      <main className="min-h-screen w-full overflow-x-hidden">
        <Navigation />
        <Hero />
        <SilentCrisis />
        <BlogTeaseStrip />
        <BrandStory />
        <FeaturesShowcase />
        <SimplePricing />
        <FinalCTA />
        {/* <SEOIntro />
        <ProblemStatement />
        <Features />
        <Benefits />
        <ComplianceSection />
        <Pricing /> */}
        <FAQSection />
        <Contact />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
