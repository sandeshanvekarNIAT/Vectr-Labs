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
  title: "Vectr Labs | Modern Web Design & Development",
  description: "Vectr Labs is a modern web development studio building clean, high-performing, and conversion-driven websites for businesses worldwide.",
  icons: {
    icon: "/logo.png",
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
