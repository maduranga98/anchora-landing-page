import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    // canonical: "https://voxwel.com/fr/logiciel-lancement-alerte",
    languages: {
      fr: "https://voxwel.com/fr/logiciel-lancement-alerte",
      "x-default": "https://voxwel.com/blogs/whistleblower-hotline-cost",
    },
  },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://voxwel.com/fr/logiciel-lancement-alerte"
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
