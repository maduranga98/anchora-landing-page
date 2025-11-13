import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import Blogs from "@/components/Blogs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <Features />
      <Benefits />
      <AboutUs />
      <Blogs />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
