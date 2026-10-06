import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AURA | Smart Heated Mug",
  description:
    "AURA is a smart heated mug with precise temperature control, app connectivity and a weather-resistant steel body. Warmth, wherever you are.",
  openGraph: {
    title: "AURA | Smart Heated Mug",
    description: "Warmth, wherever you are.",
    images: ["/images/gallery-desert.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
