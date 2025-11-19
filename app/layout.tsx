import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

const siteUrl = "https://anchora.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anchora - Your Anchor in Every Storm | Anonymous Workplace Reporting",
    template: "%s | Anchora",
  },
  description:
    "Stop lawsuits, fraud, and workplace disasters before they happen. Anonymous employee reporting platform with military-grade encryption. Protect your company for just $1/employee/month.",
  keywords: [
    "employee reporting",
    "anonymous whistleblower",
    "workplace safety",
    "harassment reporting",
    "fraud prevention",
    "compliance platform",
    "HR software",
    "workplace culture",
    "anonymous reporting system",
    "workplace compliance",
    "employee feedback platform",
  ],
  authors: [{ name: "Anchora", url: siteUrl }],
  creator: "Anchora",
  publisher: "Anchora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/icon.png", sizes: "512x512" },
    shortcut: "/icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Anchora - Your Anchor in Every Storm",
    description:
      "Stop lawsuits, fraud, and workplace disasters before they happen. Anonymous employee reporting platform with military-grade encryption.",
    siteName: "Anchora",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Anchora - Anonymous Workplace Reporting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchora - Your Anchor in Every Storm",
    description:
      "Stop lawsuits, fraud, and workplace disasters before they happen. Anonymous employee reporting platform with military-grade encryption.",
    images: [`${siteUrl}/logo.png`],
    creator: "@anchora",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1abc9c" },
    { media: "(prefers-color-scheme: dark)", color: "#2d3e50" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Anchora",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "1",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1",
        priceCurrency: "USD",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitText: "employee per month",
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "100",
    },
    description:
      "Anonymous employee reporting platform with military-grade encryption. Stop lawsuits, fraud, and workplace disasters before they happen.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@anchora.com",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Anchora",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Anonymous workplace reporting platform helping companies prevent lawsuits, fraud, and workplace disasters.",
    sameAs: [
      "https://twitter.com/anchora",
      "https://linkedin.com/company/anchora",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@anchora.com",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
