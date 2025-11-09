import "./globals.css";
import FontLoader from "@/components/FontLoader";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

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

/**
 * RootLayout component
 * Main layout wrapper for the application
 *
 * HYDRATION FIX: The suppressHydrationWarning prop on <body> prevents React
 * from warning about attribute mismatches caused by browser extensions
 * (e.g., password managers, accessibility tools, etc.)
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <FontLoader />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
