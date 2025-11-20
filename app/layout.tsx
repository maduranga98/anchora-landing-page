import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

const siteUrl = "https://www.lumoraventures.com";

// Using system fonts for better performance and reliability
// This avoids external font fetching and provides instant loading

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lumoraventures.com"),
  title: {
    default: "VoxWel - Where Every Voice Matters | Anonymous Workplace Reporting",
    template: "%s | VoxWel"
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
  authors: [{ name: "VoxWel", url: siteUrl }],
  creator: "VoxWel",
  publisher: "VoxWel",
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
    title: "VoxWel - Where Every Voice Matters",
    description:
      "Stop lawsuits, fraud, and workplace disasters before they happen. Anonymous employee reporting platform with military-grade encryption.",
    siteName: "VoxWel",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "VoxWel - Anonymous Workplace Reporting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxWel - Where Every Voice Matters",
    description:
      "Stop lawsuits, fraud, and workplace disasters before they happen. Anonymous employee reporting platform.",
    images: ["/og-image.png"],
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
    canonical: "https://www.lumoraventures.com",
  },
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
    name: "VoxWel",
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
      email: "info@lumoraventures.com",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VoxWel",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Anonymous employee reporting platform with military-grade encryption",
    sameAs: [
      "https://www.linkedin.com/company/lumora-ventures-pvt-ltd/",
      "https://web.facebook.com/profile.php?id=61575034203203&sk=about",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "info@lumoraventures.com",
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
