import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// Lazy load below-the-fold components for better performance
const ProblemStatement = dynamic(() => import("@/components/ProblemStatement"), {
  loading: () => <div className="min-h-screen" />,
});
const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <div className="min-h-screen" />,
});
const Benefits = dynamic(() => import("@/components/Benefits"), {
  loading: () => <div className="min-h-screen" />,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-screen" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

export const metadata: Metadata = {
  alternates: {
    canonical: "https://anchora.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <Features />
      <Benefits />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
