import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import FloatingDemoCTA from "@/components/FloatingDemoCTA";

const siteUrl = "https://voxwel.com";

// Using system fonts for better performance and reliability
// This avoids external font fetching and provides instant loading

export const metadata: Metadata = {
  metadataBase: new URL("https://voxwel.com"),
  title: {
    default:
      "VoxWel — Anonymous Employee Reporting Software | Whistleblower Platform",
    template: "%s | VoxWel",
  },
  description:
    "VoxWel gives employees an encrypted, anonymous channel to report harassment, fraud, and safety violations. GDPR compliant. EU Whistleblowing Directive ready. Setup in 24 hours. $1/employee/month.",
  keywords: [
    "anonymous employee reporting software",
    "whistleblower platform",
    "anonymous reporting tool HR",
    "workplace incident reporting software",
    "GDPR whistleblowing software",
    "employee speak up platform",
    "whistleblower hotline alternative",
    "anonymous workplace complaint system",
    "EU whistleblowing directive compliance",
    "harassment reporting software",
    "workplace fraud reporting",
    "anonymous reporting policy",
    "whistleblowing software",
    "anonymous reporting",
    "workplace harassment reporting",
    "anonymous employee complaints",
    "ethics hotline",
    "employee reporting software",
  ],
  authors: [{ name: "VoxWel by Lumora Ventures", url: siteUrl }],
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
    locale: "en_GB",
    url: siteUrl,
    title: "VoxWel — Anonymous Employee Reporting Software",
    description:
      "Give every employee a safe voice. Anonymous, encrypted workplace reporting. GDPR compliant. $1/employee/month.",
    siteName: "VoxWel",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "VoxWel anonymous employee reporting platform dashboard",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@voxwel",
    title: "VoxWel — Anonymous Employee Reporting Software",
    description:
      "Give every employee a safe voice. Anonymous encrypted workplace reporting. GDPR compliant. $1/employee/month.",
    images: [`${siteUrl}/og-image.png`],
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
    url: siteUrl,
    description:
      "VoxWel is an anonymous employee reporting platform designed for HR Directors and Compliance Officers. It gives employees a confidential, AES-256 encrypted channel to report workplace harassment, fraud, safety violations, and discrimination — completely anonymously. The platform includes a 7-stage resolution workflow, real-time analytics, audit trail, QR code onboarding, and role-based admin controls. GDPR compliant and EU Whistleblowing Directive ready.",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "HR Software, Compliance Software, Whistleblower Platform",
    operatingSystem: "Web Browser, iOS, Android",
    softwareVersion: "2.0",
    screenshot: `${siteUrl}/screenshots/problems-wall.avif`,
    logo: `${siteUrl}/voxwel1.avif`,
    offers: {
      "@type": "Offer",
      price: "1.00",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#pricing`,
      description: "$1 per employee per month. All features included. No hidden fees.",
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
      ratingCount: "12",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "100% anonymous employee reporting",
      "AES-256 military-grade encryption",
      "GDPR compliant reporting channel",
      "EU Whistleblowing Directive 2019/1937 compliance",
      "7-stage resolution workflow",
      "Real-time analytics and engagement dashboard",
      "Employee Happiness Indicator scoring",
      "QR code employee onboarding",
      "24-hour platform setup",
      "Role-based admin controls",
      "Automatic compliance audit trail",
      "Team discussion channels",
      "Recognition and appreciation feed",
      "File attachment support",
      "Priority escalation alerts",
      "Department-based assignment",
    ],
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: siteUrl,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "hello@voxwel.com",
      telephone: "+94766206555",
      availableLanguage: ["English"],
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VoxWel",
    alternateName: "VoxWel by Lumora Ventures",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/voxwel1.avif`,
      width: 512,
      height: 512,
    },
    description:
      "VoxWel is an anonymous employee reporting platform that gives employees a confidential, AES-256 encrypted channel to report workplace harassment, fraud, and safety violations. GDPR compliant, EU Whistleblowing Directive ready, live in 24 hours.",
    email: "hello@voxwel.com",
    telephone: "+94766206555",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 4157, 58 Peregrine Road, Hainault",
      addressLocality: "Ilford",
      addressRegion: "Essex",
      postalCode: "IG6 3SZ",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94766206555",
      contactType: "customer support",
      email: "hello@voxwel.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/voxwel",
      "https://www.instagram.com/vox.wel",
      "https://www.facebook.com/voxwel",
      "https://x.com/voxwel36916",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: `${siteUrl}/lumora`,
    },
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
          text: "VoxWel uses AES-256 end-to-end encryption and a zero-knowledge architecture. When an employee submits a report, no identifying metadata is stored — not their IP address, device fingerprint, or session data. Even VoxWel administrators cannot identify who submitted a report. Anonymity is architectural, not just a policy promise.",
        },
      },
      {
        "@type": "Question",
        name: "Can our IT department track who submitted a report on VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. VoxWel is specifically designed to prevent this. Reports are encrypted before they leave the employee's device and stored in a way that makes source identification technically impossible, even with full database access. Your IT team cannot trace any report back to its source.",
        },
      },
      {
        "@type": "Question",
        name: "Is VoxWel compliant with GDPR and the EU Whistleblowing Directive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. VoxWel is fully GDPR compliant and meets the requirements of EU Directive 2019/1937 (EU Whistleblowing Directive), which mandates that organizations with 50 or more employees provide a secure, confidential internal reporting channel. VoxWel provides this channel along with the documented audit trail required for regulatory compliance.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between VoxWel and a traditional whistleblower hotline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional whistleblower hotlines require employees to call a phone number, which many find intimidating and potentially traceable. They are only available during business hours and cost $500–$2,000 per month. VoxWel is fully digital, available 24/7, accessible via web browser or QR code with no phone call required, and costs only $1 per employee per month — a fraction of the price with better anonymity.",
        },
      },
      {
        "@type": "Question",
        name: "What types of workplace issues can employees report through VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employees can report any workplace concern including: sexual harassment, workplace harassment, discrimination, financial fraud, expense abuse, OSHA and safety violations, conflicts of interest, retaliation, toxic management behavior, data privacy violations, ethical violations, and any other compliance or conduct issues.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to set up VoxWel for a company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under 24 hours. Once you sign up, you receive a company-specific QR code and reporting link to distribute to your team immediately. No IT project, no app installation, no employee training required. Most organizations are fully live within the same business day.",
        },
      },
      {
        "@type": "Question",
        name: "Why is VoxWel priced at only $1 per employee per month?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel is designed to be accessible to every company, not just enterprises with large compliance budgets. A 100-person company pays $100 per month. A single prevented workplace harassment lawsuit costs a minimum of $75,000, meaning one prevented lawsuit covers over 62 years of VoxWel for a 100-person company.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Anonymous Reports, Team Pulse, and Recognition Feed in VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel has three channels: Anonymous Reports is a fully encrypted, completely anonymous channel for sensitive workplace issues like harassment or fraud. Team Pulse is an open discussion channel for team conversations, ideas, and questions. Recognition Feed is a public appreciation channel for celebrating team achievements and milestones. All three are accessible from one admin dashboard.",
        },
      },
      {
        "@type": "Question",
        name: "Does VoxWel work for small businesses or only large enterprises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel works for any size organization. The $1 per employee per month pricing makes it affordable for companies with as few as 10 employees. There is no minimum employee count and no enterprise contract required. Small businesses, mid-market companies, and large enterprises all use the same full-featured platform.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after an employee submits an anonymous report on VoxWel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After submission, HR admins receive an instant notification. The report enters a 7-stage workflow: Open → Acknowledged → Under Review → In Progress → Resolved → Closed → Archived. Admins can assign the report to departments, set priority levels, add due dates, and respond confidentially to the anonymous reporter. Every action is automatically logged in the compliance audit trail.",
        },
      },
      {
        "@type": "Question",
        name: "Can VoxWel help prevent workplace mental health crises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. VoxWel provides employees with a confidential, encrypted safe space to report work-related stress, harassment, or toxic conditions before they escalate into mental health crises. Early detection of workplace issues can prevent burnout, depression, and tragic outcomes.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
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
        {/* DM Sans font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Preload hero image for LCP improvement */}
        <link
          rel="preload"
          as="image"
          href="/screenshots/problems-wall.avif"
          type="image/avif"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <CookieConsent />
        <FloatingDemoCTA />
      </body>
    </html>
  );
}
