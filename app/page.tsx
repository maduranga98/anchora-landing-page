import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import SimplePricing from "@/components/SimplePricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { WebVitals } from "./web-vitals";
import { FAQSection } from "@/components/FAQSection";
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
      <main className="min-h-screen w-full overflow-x-hidden">
        <Navigation />
        <Hero />
        <TrustBar />
        <ProblemSection />
        <HowItWorks />
        <SimplePricing />
        <FAQSection />
        <Contact />
        <Footer />
        <BookingWidget />
      </main>
    </ErrorBoundary>
  );
}
