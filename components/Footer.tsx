"use client";

import Link from "next/link";
import AnchoraLogo from "./AnchoraLogo";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Demo", href: "#contact" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "About Lumora Ventures", href: "/lumora" },
      { name: "Blog", href: "/blogs" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "GDPR Compliance", href: "/gdpr" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-primary-navy via-primary-navy to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AnchoraLogo size="default" />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-primary-teal bg-clip-text text-transparent">VoxWel</span>
            </div>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Where Every Voice Matters. Transforming workplace communication
              one company at a time.
            </p>
            <div className="bg-white/5 rounded-lg p-3 mb-4 border border-white/10">
              <p className="text-white/60 text-xs mb-1">
                A product of{" "}
                <Link
                  href="/lumora"
                  className="text-primary-teal font-semibold hover:text-primary-teal/80 transition-colors"
                >
                  Lumora Ventures
                </Link>
              </p>
              <p className="text-white/50 text-xs">
                Building innovative workplace solutions
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://voxwel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-teal transition-colors text-sm flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-primary-teal rounded-full group-hover:scale-125 transition-transform"></span>
                voxwel.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/lumora-ventures-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-primary-teal hover:bg-primary-teal/20 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61575034203203&sk=about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-primary-teal hover:bg-primary-teal/20 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-5 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-teal rounded-full"></span>
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary-teal transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-teal group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-5 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-teal rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-teal transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-teal group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-5 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-teal rounded-full"></span>
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-teal transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary-teal group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm flex items-center gap-2">
              <span className="text-primary-teal">©</span> {currentYear} VoxWel by Lumora Ventures. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link
                href="/privacy-policy"
                className="hover:text-primary-teal transition-all duration-300 relative group"
              >
                <span>Privacy</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-teal group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/terms-of-service"
                className="hover:text-primary-teal transition-all duration-300 relative group"
              >
                <span>Terms</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-teal group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/cookie-policy"
                className="hover:text-primary-teal transition-all duration-300 relative group"
              >
                <span>Cookies</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-teal group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-white/20">•</span>
              <Link
                href="/gdpr"
                className="hover:text-primary-teal transition-all duration-300 relative group"
              >
                <span>GDPR</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-teal group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
