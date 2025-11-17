"use client";

import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import Link from "next/link";
import AnchoraLogo from "./AnchoraLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Demo", href: "#contact" },
      { name: "Roadmap", href: "#" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "About Lumora Ventures", href: "/lumora" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "/blogs" },
      { name: "Press Kit", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "System Status", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "GDPR Compliance", href: "/gdpr" },
    ],
  };

  return (
    <footer className="bg-primary-navy text-white">
      <div className="section-container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AnchoraLogo size="default" />
              <span className="text-xl font-bold">Anchora</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Your Anchor in Every Storm. Transforming workplace communication
              one company at a time.
            </p>
            <p className="text-white/50 text-xs mb-6">
              A product of{" "}
              <Link
                href="/lumora"
                className="text-primary-teal font-semibold hover:underline"
              >
                Lumora Ventures
              </Link>
              <br />
              Building innovative workplace solutions
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-teal transition-all duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-teal transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-teal transition-all duration-300"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-teal transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary-teal transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-teal transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary-teal transition-colors text-sm"
                  >
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
            <p className="text-white/70 text-sm">
              © {currentYear} Anchora by Lumora Ventures. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <Link
                href="/privacy-policy"
                className="hover:text-primary-teal transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-primary-teal transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-primary-teal transition-colors"
              >
                Cookies
              </Link>
              <Link
                href="/gdpr"
                className="hover:text-primary-teal transition-colors"
              >
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
