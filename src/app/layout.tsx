import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Questrial, Lexend } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vectrlabs20.vercel.app"),
  title: {
    default: "Vectr Labs | Modern Web Design & Development",
    template: "%s | Vectr Labs"
  },
  description: "Vectr Labs is a modern web development studio building clean, high-performing, and conversion-driven websites for businesses worldwide.",
  keywords: ["web design", "web development", "nextjs", "react", "UI/UX", "digital agency", "vectr labs", "modern websites"],
  authors: [{ name: "Vectr Labs" }],
  creator: "Vectr Labs",
  publisher: "Vectr Labs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vectrlabs20.vercel.app",
    title: "Vectr Labs | Modern Web Design & Development",
    description: "Vectr Labs is a modern web development studio building clean, high-performing, and conversion-driven websites for businesses worldwide.",
    siteName: "Vectr Labs",
    images: [
      {
        url: "/opengraph-image.png", // Will need to create this image
        width: 1200,
        height: 630,
        alt: "Vectr Labs - Modern Web Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vectr Labs | Modern Web Design & Development",
    description: "Vectr Labs is a modern web development studio building clean, high-performing, and conversion-driven websites for businesses worldwide.",
    images: ["/twitter-image.png"], // Will need to create this image
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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

import { BackgroundCanvas } from "@/components/BackgroundCanvas";

import { SmoothScroll } from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${questrial.variable} ${lexend.variable} antialiased`}
      >
        <SmoothScroll />
        <BackgroundCanvas />
        {children}
      </body>
    </html>
  );
}
