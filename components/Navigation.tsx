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
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll detection to update active section with throttling for better performance
  useEffect(() => {
    if (!isHomePage) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = navLinks.map((link) => link.href.substring(1));
          // Use same navbar height calculation as scrollToSection
          const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
          const scrollPosition = window.scrollY + navbarHeight + 100; // Navbar height + buffer

          // If we're at the top of the page (near hero section), clear active section
          if (window.scrollY < 200) {
            setActiveSection("");
            ticking = false;
            return;
          }

          let foundSection = false;
          // Check sections from bottom to top to find the current one
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.offsetHeight;

              // Check if we're within this section
              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveSection(`#${sections[i]}`);
                foundSection = true;
                break;
              }
            }
          }

          // If no section found and we're not at the top, clear active section
          if (!foundSection && window.scrollY >= 200) {
            setActiveSection("");
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

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
        // Get navbar height (64px on mobile, 80px on desktop)
        const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
        const offset = 20; // Additional offset for visual spacing
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
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
            <span className="text-xl font-bold text-primary-navy">VoxWel </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // Check if it's a page link (starts with /) vs section link (starts with #)
              const isPageLink = link.href.startsWith('/');

              if (isPageLink) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-medium transition-all duration-300 relative text-text-primary hover:text-primary-teal"
                  >
                    {link.name}
                  </Link>
                );
              }

              return isHomePage ? (
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
              );
            })}
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
            {navLinks.map((link) => {
              const isPageLink = link.href.startsWith('/');

              if (isPageLink) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-left font-medium py-2 transition-all duration-300 text-text-primary hover:text-primary-teal"
                  >
                    {link.name}
                  </Link>
                );
              }

              return isHomePage ? (
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
              );
            })}
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
