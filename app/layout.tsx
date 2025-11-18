import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anchora - Your Anchor in Every Storm | Anonymous Workplace Reporting",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchora - Your Anchor in Every Storm",
    description:
      "Stop lawsuits, fraud, and workplace disasters before they happen. Anonymous employee reporting platform.",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
