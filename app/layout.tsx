import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anchora - Your Anchor in Every Storm",
  description:
    "Stop lawsuits, fraud, and workplace disasters before they happen. Anonymous employee reporting platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
