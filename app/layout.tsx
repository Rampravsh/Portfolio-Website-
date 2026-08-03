import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Manrope } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rampravesh | Full Stack Developer",
  description:
    "Building digital experiences that make impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}