import Script from 'next/script';

/**
 * Analytics component
 * Manages Google Analytics tracking
 * Tracks page views and CTA clicks
 */
export default function Analytics() {
  const GA_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA ID

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* GA Configuration and Event Tracking */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');

          // Track CTA clicks
          document.querySelectorAll('a[href*="signup"], a[href*="demo"]').forEach(function(elem) {
            elem.addEventListener('click', function() {
              gtag('event', 'cta_click', {
                'event_category': 'engagement',
                'event_label': this.textContent,
                'value': this.href
              });
            });
          });
        `}
      </Script>
    </>
  );
}
