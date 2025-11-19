"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import AnchoraLogo from "@/components/AnchoraLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll detection to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      // If we're at the top of the page (near hero section), clear active section
      if (window.scrollY < 50) {
        setActiveSection("");
        return;
      }

      let foundSection = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          foundSection = true;
          break;
        }
      }

      // If no section found and we're not at the top, clear active section
      if (!foundSection && window.scrollY >= 50) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clear active section when navigating away from home page
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
    }
  }, [isHomePage]);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href);
      }
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
              isHomePage ? (
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
              ) : (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  className="font-medium transition-all duration-300 relative text-text-primary hover:text-primary-teal"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isHomePage ? (
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-6 py-2.5 bg-primary-teal text-white rounded-lg font-semibold hover:bg-primary-teal/90 transition-all duration-300"
              >
                Get Started
              </button>
            ) : (
              <Link
                href="/#contact"
                className="px-6 py-2.5 bg-primary-teal text-white rounded-lg font-semibold hover:bg-primary-teal/90 transition-all duration-300"
              >
                Get Started
              </Link>
            )}
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
              isHomePage ? (
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
              ) : (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left font-medium py-2 transition-all duration-300 text-text-primary hover:text-primary-teal"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-4 border-t border-border-light">
              {isHomePage ? (
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="block w-full py-2.5 bg-primary-teal text-white rounded-lg font-semibold"
                >
                  Get Started
                </button>
              ) : (
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-2.5 bg-primary-teal text-white rounded-lg font-semibold text-center"
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
