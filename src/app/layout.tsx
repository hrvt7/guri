import type { Metadata } from "next";
import { Geist, Anton } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Henry's Burger & Beer — Szombathely (ex Guri Serház)",
  description:
    "Henry's Burger & Beer Szombathely — vadkovászos kézműves burgerek és a város legjobb sörei. Foglalj asztalt: +36 94 367 781",
  keywords: [
    "henry's szombathely",
    "guri serház",
    "burger szombathely",
    "kézműves hamburger",
    "craft sör szombathely",
  ],
  openGraph: {
    title: "Henry's Burger & Beer — Szombathely",
    description:
      "Vadkovászos kézműves burgerek és a város legjobb sörei. Gyere be, vagy rendelj!",
    type: "website",
    locale: "hu_HU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`${geist.variable} ${anton.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Henry's Burger & Beer",
              alternateName: "Guri Serház Szombathely",
              description: "Vadkovászos kézműves burgerek és kézműves sörök Szombathelyen.",
              servesCuisine: ["American", "Burger", "Beer"],
              telephone: "+36 94 367 781",
              email: "info@guriszombathely.hu",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Szent Erzsébet tér 1",
                addressLocality: "Szombathely",
                postalCode: "9700",
                addressCountry: "HU",
              },
              priceRange: "$$",
              url: "https://guri.vercel.app",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
