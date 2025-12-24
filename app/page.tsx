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
import FAQSchema from "./faq-schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.voxwel.com",
  },
};

export default function Home() {
  return (
    <ErrorBoundary>
      <WebVitals />
      <FAQSchema />
      <main className="min-h-screen w-full overflow-x-hidden">
        <Navigation />
        <Hero />
        <SEOIntro />
        <ProblemStatement />
        <Features />
        <Benefits />
        <ComplianceSection />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
