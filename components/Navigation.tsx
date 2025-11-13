"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import AnchoraLogo from "@/components/AnchoraLogo";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "About", href: "#about" },
    { name: "Blogs", href: "#blogs" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll detection to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="section-container">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <AnchoraLogo size="default" />
            <span className="text-xl font-bold text-primary-navy">Anchora</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-all duration-300 relative ${
                  activeSection === link.href
                    ? "text-primary-teal"
                    : "text-text-primary hover:text-primary-teal"
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-teal rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.anchora.com/login"
              className="text-primary-teal font-semibold hover:text-primary-teal/80 transition-colors"
            >
              Login
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2.5 bg-primary-teal text-white rounded-lg font-semibold hover:bg-primary-teal/90 transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-light">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left font-medium py-2 transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-primary-teal font-bold pl-4 border-l-4 border-primary-teal"
                    : "text-text-primary hover:text-primary-teal"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 space-y-3 border-t border-border-light">
              <a
                href="https://app.anchora.com/login"
                className="block w-full text-center py-2.5 text-primary-teal font-semibold"
              >
                Login
              </a>
              <button
                onClick={() => scrollToSection("#contact")}
                className="block w-full py-2.5 bg-primary-teal text-white rounded-lg font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
