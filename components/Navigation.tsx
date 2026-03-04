"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import AnchoraLogo from "@/components/AnchoraLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navLinks = [
    { name: "Product", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Security", href: "#security" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "/blogs" },
  ];

  // Add shadow when scrolled > 10px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (!isHomePage) {
        window.location.href = `/${href}`;
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = window.innerWidth >= 768 ? 64 : 56;
        const offset = 20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.scrollY - navbarHeight - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm border-b border-slate-200" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <AnchoraLogo size="small" />
            <Link
              href="/"
              className="text-lg font-bold text-slate-900 hover:text-slate-700 transition-colors"
            >
              VoxWel
            </Link>
          </div>

          {/* Desktop Nav Links — center */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isPageLink = link.href.startsWith("/");

              if (isPageLink) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              }

              return isHomePage ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://app.voxwel.com/login"
              className="px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors"
            >
              Login
            </a>
            {isHomePage ? (
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Book a Demo →
              </button>
            ) : (
              <Link
                href="/#contact"
                className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Book a Demo →
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
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
        <div className="md:hidden bg-white border-t border-slate-200 shadow-md">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => {
              const isPageLink = link.href.startsWith("/");

              if (isPageLink) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              }

              return isHomePage ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-200 space-y-3">
              <a
                href="https://app.voxwel.com/login"
                className="block w-full py-2.5 text-center text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors"
              >
                Login
              </a>
              {isHomePage ? (
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Book a Demo →
                </button>
              ) : (
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Book a Demo →
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
