import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lektos - Inteligentna Platforma Automatyzacji Biznesu",
  description:
    "Połącz swoje systemy, zautomatyzuj procesy i pytaj o dane w języku naturalnym. Lektos działa za Ciebie 24/7.",
  alternates: {
    canonical: "https://lektos.pl",
  },
  openGraph: {
    title: "Lektos - Inteligentna Platforma Automatyzacji Biznesu",
    description:
      "Połącz swoje systemy, zautomatyzuj procesy i pytaj o dane w języku naturalnym. Lektos działa za Ciebie 24/7.",
    url: "https://lektos.pl",
    siteName: "Lektos",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "https://lektos.pl/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lektos - Inteligentna Platforma Automatyzacji Biznesu",
    description:
      "Połącz swoje systemy, zautomatyzuj procesy i pytaj o dane w języku naturalnym. Lektos działa za Ciebie 24/7.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${sora.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: "var(--font-dm-sans), sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
