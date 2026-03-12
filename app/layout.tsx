import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.realitycode.web.id"),
  title: {
    default: "Reality Code – Digital Without Limits",
    template: "%s | Reality Code",
  },
  description:
    "Jasa pembuatan website & solusi coding cepat, tepat, tanpa ribet. Website bisnis, UMKM, mahasiswa, personal brand.",
  keywords: [
    "jasa website",
    "website bisnis",
    "website UMKM",
    "solusi IT",
    "reality code",
    "website murah",
    "debugging",
    "tugas IT",
    "web development indonesia",
  ],
  authors: [{ name: "Reality Code" }],
  creator: "Reality Code",
  publisher: "Reality Code",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Reality Code – Digital Without Limits",
    description:
      "Jasa pembuatan website & solusi coding cepat, tepat, tanpa ribet. Website bisnis, UMKM, mahasiswa, personal brand.",
    url: "https://www.realitycode.web.id",
    siteName: "Reality Code",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reality Code – Digital Without Limits",
    description: "Jasa pembuatan website & solusi coding cepat, tepat, tanpa ribet.",
    creator: "@realitycodee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Reality Code",
  "image": "https://www.realitycode.web.id/logo.png",
  "@id": "https://www.realitycode.web.id",
  "url": "https://www.realitycode.web.id",
  "telephone": "+6282332653341",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Indonesia",
    "addressLocality": "Jakarta",
    "addressRegion": "DKI Jakarta",
    "postalCode": "10000",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.2088,
    "longitude": 106.8456
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/realitycodee"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-black text-white font-grotesk antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
