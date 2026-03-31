import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    // canonical: "https://voxwel.com/de/hinweisgebersoftware-preise",
    languages: {
      de: "https://voxwel.com/de/hinweisgebersoftware-preise",
      "x-default": "https://voxwel.com/blogs/whistleblower-hotline-cost",
    },
  },
};

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          hrefLang="de"
          href="https://voxwel.com/de/hinweisgebersoftware-preise"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://voxwel.com/blogs/whistleblower-hotline-cost"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
