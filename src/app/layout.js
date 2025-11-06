
import Script from 'next/script';
import "./globals.css";

export const metadata = {
  title: "Anchora - Employee Voice & Feedback Platform | $1/User/Month",
  description: "Give every employee a voice with Anchora. Anonymous feedback, problem tracking, and real solutions. Reduce turnover by 40%. Free trial, no credit card required.",
  keywords: "employee feedback platform, employee voice software, anonymous feedback, workplace feedback tool, employee engagement, staff communication",
  author: "Anchora",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://anchora.com/",
    title: "Anchora - Your Anchor in Every Storm",
    description: "Employee voice platform that keeps teams grounded, heard, and thriving. $1 per employee per month.",
    images: [{
        url: "https://anchora.com/assets/og-image-1200x630.jpg",
        width: 1200,
        height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://anchora.com/",
    title: "Anchora - Employee Voice Platform",
    description: "Give your team a voice. Track every problem from open to resolved. Build culture that listens.",
    images: "https://anchora.com/assets/twitter-card-1200x628.jpg",
  },
  icons: {
    icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  canonical: "https://anchora.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700&display=swap" rel="stylesheet" />
        </head>
      <body>
        {children}
        <Script id="schema-software" type="application/ld+json">
            {`
            {
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
            }
            `}
        </Script>
        <Script id="schema-faq" type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "How is Anchora different from employee surveys?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Surveys are periodic snapshots. Anchora is continuous listening. Employees post when issues arise—not when HR schedules a survey. Plus, we track problems to resolution. Surveys just collect data."
                }
              },{
                "@type": "Question",
                "name": "Is Anchora really anonymous?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We use AES-256 encryption for anonymous posts. Even database admins can't see who posted. Only designated HR admins with explicit permission can decrypt in serious cases (harassment, threats)."
                }
              },{
                "@type": "Question",
                "name": "What if employees abuse anonymity?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rare, but possible. Admins can flag inappropriate content. Repeated abuse patterns can be detected. Plus, most posts are constructive—employees want real problems solved."
                }
              },{
                "@type": "Question",
                "name": "How long does setup take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "5 minutes. Create account → Add company info → Invite employees → Start posting. No consulting required. No training needed."
                }
              },{
                "@type": "Question",
                "name": "Do you integrate with Slack/Teams/JIRA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not yet, but coming soon! Currently focused on perfecting the core experience. Integrations launching Q2 2025."
                }
              },{
                "@type": "Question",
                "name": "Where is my data stored?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Cloud (US) or EU servers (you choose). Bank-level encryption. SOC 2 Type II certified. GDPR and CCPA compliant."
                }
              },{
                "@type": "Question",
                "name": "Who can see posts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "By default, all company employees see all posts (transparency). Admins can make posts department-only or HR-only for sensitive issues."
                }
              },{
                "@type": "Question",
                "name": "Can employees delete their posts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, within 24 hours. After that, posts become part of company record (prevents deleting evidence of serious issues)."
                }
              },{
                "@type": "Question",
                "name": "What happens to data if we cancel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You get a full export (JSON/CSV). We delete all data within 30 days per GDPR requirements."
                }
              },{
                "@type": "Question",
                "name": "What if we grow mid-year?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You're only charged for new employees added. Prorated to your billing cycle. No penalties for growth!"
                }
              },{
                "@type": "Question",
                "name": "Do inactive employees count?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Only active users who can post/comment. Deactivated accounts don't count toward your bill."
                }
              },{
                "@type": "Question",
                "name": "Can we pause our account?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but you lose access to features. Data is preserved. Unpause anytime. Better to use free tier (10 employees)."
                }
              },{
                "@type": "Question",
                "name": "Do you offer annual prepay discounts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Pay annually, get 2 months free (16% savings). Plus, lock in your rate for the year."
                }
              }]
            }
            `}
        </Script>
        <Script id="schema-organization" type="application/ld+json">
            {`
            {
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
            }
            `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></Script>
        <Script id="google-analytics">
            {
            `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXXXXX');

                document.querySelectorAll('a[href*="signup"], a[href*="demo"]').forEach(function(elem) {
                    elem.addEventListener('click', function() {
                        gtag('event', 'cta_click', {
                            'event_category': 'engagement',
                            'event_label': this.textContent,
                            'value': this.href
                        });
                    });
                });
            `
            }
        </Script>
        </body>
    </html>
  );
}
