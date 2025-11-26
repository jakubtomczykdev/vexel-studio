import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-sans",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vexel Studio – Tworzymy strony, które dominują w Google",
  description:
    "Vexel Studio tworzy ultraszybkie, nowoczesne strony w technologiach, które poprawiają wyniki wyszukiwania. SEO, świetne Core Web Vitals i design, który zamienia odwiedzających w klientów.",
  keywords: [
    "Next.js",
    "tworzenie stron internetowych",
    "strony www",
    "projektowanie stron",
    "agencja web",
    "SEO",
    "Core Web Vitals",
    "Vexel Studio",
    "Aplikacje internetowe",
    "Olkusz strony",
    "Kraków strony",
  ],


  openGraph: {
    title: "Vexel Studio – Tworzymy strony, które dominują w Google",
    description:
      "Nowoczesne i ultraszybkie strony internetowe projektowane w Next.js. SEO, wydajność, wysoka konwersja i profesjonalny design.",
    url: "https://www.vexelstudio.pl/",
    siteName: "Vexel Studio",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "https://www.vexelstudio.pl/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Vexel Studio – Nowoczesne strony internetowe",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Vexel Studio – Tworzymy strony, które dominują w Google",
    description:
      "Nowoczesne i ultraszybkie strony internetowe z perfekcyjnym SEO i designem, który konwertuje.",
    images: ["https://www.vexelstudio.pl/og-image.jpg"], 
  },


  alternates: {
    canonical: "https://www.vexelstudio.pl/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
