import Script from 'next/script';

/**
 * StructuredData component
 * Contains all JSON-LD structured data for SEO
 * Including: SoftwareApplication, FAQPage, and Organization schemas
 */
export default function StructuredData() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Anchora",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "1",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "1.00",
        "priceCurrency": "USD",
        "unitText": "MONTHLY"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127"
    },
    "description": "Employee voice and feedback platform that keeps teams grounded, heard, and thriving. Anonymous feedback, problem tracking, real solutions.",
    "image": "https://anchora.com/logo-1200x630.png",
    "screenshot": "https://anchora.com/screenshot-1.png",
    "softwareVersion": "1.0",
    "datePublished": "2024-11-01",
    "author": {
      "@type": "Organization",
      "name": "Anchora"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is Anchora different from employee surveys?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Surveys are periodic snapshots. Anchora is continuous listening. Employees post when issues arise—not when HR schedules a survey. Plus, we track problems to resolution. Surveys just collect data."
        }
      },
      {
        "@type": "Question",
        "name": "Is Anchora really anonymous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We use AES-256 encryption for anonymous posts. Even database admins can't see who posted. Only designated HR admins with explicit permission can decrypt in serious cases (harassment, threats)."
        }
      },
      {
        "@type": "Question",
        "name": "What if employees abuse anonymity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rare, but possible. Admins can flag inappropriate content. Repeated abuse patterns can be detected. Plus, most posts are constructive—employees want real problems solved."
        }
      },
      {
        "@type": "Question",
        "name": "How long does setup take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "5 minutes. Create account → Add company info → Invite employees → Start posting. No consulting required. No training needed."
        }
      },
      {
        "@type": "Question",
        "name": "Do you integrate with Slack/Teams/JIRA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not yet, but coming soon! Currently focused on perfecting the core experience. Integrations launching Q2 2025."
        }
      },
      {
        "@type": "Question",
        "name": "Where is my data stored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Cloud (US) or EU servers (you choose). Bank-level encryption. SOC 2 Type II certified. GDPR and CCPA compliant."
        }
      },
      {
        "@type": "Question",
        "name": "Who can see posts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By default, all company employees see all posts (transparency). Admins can make posts department-only or HR-only for sensitive issues."
        }
      },
      {
        "@type": "Question",
        "name": "Can employees delete their posts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, within 24 hours. After that, posts become part of company record (prevents deleting evidence of serious issues)."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to data if we cancel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get a full export (JSON/CSV). We delete all data within 30 days per GDPR requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What if we grow mid-year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You're only charged for new employees added. Prorated to your billing cycle. No penalties for growth!"
        }
      },
      {
        "@type": "Question",
        "name": "Do inactive employees count?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Only active users who can post/comment. Deactivated accounts don't count toward your bill."
        }
      },
      {
        "@type": "Question",
        "name": "Can we pause our account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but you lose access to features. Data is preserved. Unpause anytime. Better to use free tier (10 employees)."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer annual prepay discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Pay annually, get 2 months free (16% savings). Plus, lock in your rate for the year."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anchora",
    "url": "https://anchora.com",
    "logo": "https://anchora.com/logo.png",
    "description": "Employee voice and feedback platform",
    "sameAs": [
      "https://twitter.com/anchora",
      "https://linkedin.com/company/anchora",
      "https://instagram.com/anchora"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ANCHORA",
      "contactType": "Customer Support",
      "email": "support@anchora.com",
      "availableLanguage": ["English"]
    }
  };

  return (
    <>
      <Script id="schema-software" type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </Script>
      <Script id="schema-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-organization" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
    </>
  );
}
