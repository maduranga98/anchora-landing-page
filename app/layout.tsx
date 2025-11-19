import type { Metadata, Viewport } from "next";
import "./globals.css";

// Using system fonts for better performance and reliability
// This avoids external font fetching and provides instant loading

export const metadata: Metadata = {
  metadataBase: new URL("https://anchora.com"),
  title: {
    default: "Anchora - Your Anchor in Every Storm | Anonymous Workplace Reporting",
    template: "%s | Anchora"
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
  ],
  authors: [{ name: "Anchora" }],
  creator: "Anchora",
  publisher: "Anchora",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/icon.png" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anchora.com",
    title: "Anchora - Your Anchor in Every Storm",
    description:
      "Stop lawsuits, fraud, and workplace disasters before they happen. Anonymous employee reporting platform.",
    siteName: "Anchora",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anchora - Your Anchor in Every Storm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchora - Your Anchor in Every Storm",
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
    canonical: "https://anchora.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Anchora",
    description:
      "Anonymous employee reporting platform with military-grade encryption",
    url: "https://anchora.com",
    logo: "https://anchora.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/anchora",
      "https://twitter.com/anchora",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
