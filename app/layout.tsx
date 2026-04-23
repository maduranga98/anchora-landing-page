import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FeedSolve - Feedback Collection & Resolution',
  description:
    'Stop losing complaints. Start closing them. Collect feedback from customers, suppliers, and partners — and track every issue to resolution with a simple link and QR code.',
  keywords:
    'feedback, feedback management, customer feedback, complaint tracking, resolution, QR code',
  openGraph: {
    title: 'FeedSolve - Feedback Collection & Resolution',
    description:
      'Stop losing complaints. Start closing them. Collect feedback from customers, suppliers, and partners — and track every issue to resolution.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
