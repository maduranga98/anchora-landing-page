'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }

    // In production, you could send this to an analytics service
    // Example: sendToAnalytics(metric);

    // Common analytics integrations:
    // Google Analytics: gtag('event', metric.name, { value: metric.value });
    // Vercel Analytics: Analytics.track(metric.name, metric);
    // Custom endpoint: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(metric) });

    // You can also track specific metrics
    switch (metric.name) {
      case 'FCP': // First Contentful Paint
        // Track when the first content appears
        break;
      case 'LCP': // Largest Contentful Paint
        // Track largest content element loading time
        break;
      case 'CLS': // Cumulative Layout Shift
        // Track visual stability
        break;
      case 'FID': // First Input Delay
        // Track interactivity
        break;
      case 'TTFB': // Time to First Byte
        // Track server response time
        break;
      case 'INP': // Interaction to Next Paint
        // Track interaction latency
        break;
    }
  });

  return null;
}
