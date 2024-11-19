import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "InvestHerd",
  description:
    "InvestHerd helps you seamlessly manage multiple family trading accounts, providing insights into holdings, overlap, and efficient margin management with AI support.",
  keywords: [
    "InvestHerd",
    "portfolio management",
    "family trading",
    "multi-account management",
    "AI margin management",
    "investment tracking",
  ],
  openGraph: {
    title: "InvestHerd - Advanced Portfolio Management",
    description:
      "Easily consolidate and analyze your family trading accounts with InvestHerd, offering intelligent insights for better investment management.",
    url: "https://investherd.in", // update with actual URL if available
    images: [
      {
        url: "/assets/investherd-og-image.png", // ensure this path is correct
        width: 1200,
        height: 630,
        alt: "InvestHerd Dashboard Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InvestHerd - Simplifying Family Portfolio Management",
    description:
      "InvestHerd consolidates multiple accounts into one dashboard, providing insights for smarter investment management.",
    site: "@InvestHerd", // update with actual Twitter handle if available
    creator: "@InvestHerd",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#0077cc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
