import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";

const siteUrl = "https://voxwel.com";

// Using system fonts for better performance and reliability
// This avoids external font fetching and provides instant loading

export const metadata: Metadata = {
  metadataBase: new URL("https://voxwel.com"),
  title: {
    default:
      "Anonymous Workplace Harassment Reporting Software | VoxWel - Prevent Lawsuits",
    template: "%s | VoxWel",
  },
  description:
    "VoxWel is an anonymous employee complaint and harassment reporting platform with military-grade encryption. EEOC compliant, $1/employee/month. Prevent workplace lawsuits, fraud, and safety violations. 14-day free trial.",
  keywords: [
    "whistleblowing software",
    "anonymous reporting",
    "workplace harassment reporting",
    "anonymous employee complaints",
    "EEOC compliant reporting",
    "ethics hotline",
    "employee reporting software",
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
    title: "VoxWel - Anonymous Workplace Harassment Reporting Software",
    description:
      "Prevent workplace lawsuits with anonymous employee reporting. EEOC compliant, military-grade encryption, $1/employee/month.",
    siteName: "VoxWel",
    images: [
      {
        url: `${siteUrl}/voxwel-og-image.png`,
        width: 1200,
        height: 630,
        alt: "VoxWel Anonymous Workplace Reporting Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoxWel - Anonymous Workplace Harassment Reporting",
    description:
      "Prevent lawsuits with anonymous reporting. EEOC compliant, $1/employee/month.",
    images: [`${siteUrl}/voxwel-og-image.png`],
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
    canonical: "https://voxwel.com",
  },
  other: {
    "facebook-domain-verification": "5r911qyz5ps61d6ladab0z8jkjog9q",
    "google-site-verification": "7-SLD-v272DMYNgyeYxSPXMLcSjAI_7hSJvfHOtLbFQ",
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
    operatingSystem: "Web, iOS, Android",
    description:
      "Anonymous employee complaint and workplace harassment reporting software with military-grade encryption. EEOC compliant crisis prevention platform.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    offers: {
      "@type": "Offer",
      price: "1.00",
      priceCurrency: "USD",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#pricing`,
      seller: {
        "@type": "Organization",
        name: "VoxWel by Lumora Ventures",
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1.00",
        priceCurrency: "USD",
        unitText: "per employee per month",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Anonymous harassment reporting",
      "Military-grade AES-256 encryption",
      "EEOC compliance features",
      "Real-time analytics dashboard",
      "7-state workflow management",
      "Complete audit trails",
      "Department-based visibility controls",
      "Priority escalation system",
      "QR code onboarding",
      "Mobile and desktop access",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "info@lumoraventures.com",
      telephone: "+94-76-620-6555",
      availableLanguage: ["English"],
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VoxWel",
    alternateName: "VoxWel by Lumora Ventures",
    url: siteUrl,
    logo: `${siteUrl}/voxwel.svg`,
    description:
      "Anonymous workplace harassment reporting and employee feedback platform",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 4157, 58 Peregrine Road, Hainault, Ilford",
      addressLocality: "Essex",
      postalCode: "IG6 3SZ",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94-76-620-6555",
      contactType: "customer support",
      email: "info@lumoraventures.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61584728859176",
      "https://www.linkedin.com/company/lumora-ventures-pvt-ltd/",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VoxWel",
    url: siteUrl,
    description:
      "Anonymous employee reporting platform with military-grade encryption. Stop lawsuits, fraud, and workplace disasters before they happen.",
    publisher: {
      "@type": "Organization",
      name: "VoxWel",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blogs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can VoxWel guarantee 100% anonymity for employees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel guarantees 100% anonymity through military-grade, end-to-end encryption and a strict, zero-knowledge protocol. Even system administrators cannot decrypt the identity of the user.",
        },
      },
      {
        "@type": "Question",
        name: "Can our company's IT department track who submitted a report?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. VoxWel's platform is architected so that even your own company's administrators cannot access the underlying data to identify a user.",
        },
      },
      {
        "@type": "Question",
        name: "Is VoxWel compliant with GDPR and the EU Whistleblowing Directive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. VoxWel is fully compliant with GDPR standards and the EU Whistleblowing Directive. Our complete audit trail provides documented proof.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between VoxWel and a traditional hotline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional hotlines lack anonymity and structure. VoxWel offers military-grade encryption, a 7-state workflow system, and an Early Warning System that prevents issues from escalating.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to set up VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel can be set up and operational in under 24 hours. Our QR Onboarding system allows employees to access the platform instantly.",
        },
      },
      {
        "@type": "Question",
        name: "Why is VoxWel priced at only $1/employee/month?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel is priced affordably to ensure every company can afford crisis prevention. Preventing a single lawsuit ($75K-$300K) justifies decades of VoxWel service.",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Consent Mode */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Default consent mode - deny until user consents
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L4G3KLH5QV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Enhanced GA4 configuration
            gtag('config', 'G-L4G3KLH5QV', {
              'page_title': document.title,
              'page_location': window.location.href,
              'send_page_view': true,
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });

            // Track outbound links
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (target && target.hostname !== window.location.hostname) {
                gtag('event', 'click', {
                  'event_category': 'outbound',
                  'event_label': target.href,
                  'transport_type': 'beacon'
                });
              }
            });

            // Track file downloads
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (target && target.href.match(/\.(pdf|zip|doc|docx|xls|xlsx|ppt|pptx)$/i)) {
                gtag('event', 'file_download', {
                  'event_category': 'downloads',
                  'event_label': target.href,
                  'file_extension': target.href.split('.').pop()
                });
              }
            });

            // Track scroll depth
            let scrollDepth = 0;
            window.addEventListener('scroll', function() {
              const currentScroll = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
              if (currentScroll > scrollDepth && currentScroll % 25 === 0) {
                scrollDepth = currentScroll;
                gtag('event', 'scroll', {
                  'event_category': 'engagement',
                  'event_label': scrollDepth + '%',
                  'value': scrollDepth
                });
              }
            });
          `}
        </Script>

        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* RSS Feed for AI and RSS readers */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="VoxWel Blog RSS Feed"
          href={`${siteUrl}/rss.xml`}
        />

        {/* AI Discoverability */}
        <link
          rel="alternate"
          type="application/json"
          href={`${siteUrl}/api/data.json`}
          title="VoxWel Data API"
        />
        <meta name="ai-content-declaration" content="partially-ai-assisted" />
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
