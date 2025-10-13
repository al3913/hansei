import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hansei.GG",
  description: "Hansei.GG - Helping creators make a living doing what they love",
  openGraph: {
    title: "Hansei.GG",
    description: "Helping creators make a living doing what they love.",
    images: [
      {
        url: "/mascot/mascot_.png", // Use a PNG or JPG, not SVG
        width: 1200,
        height: 630,
        alt: "Hansei mascot",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Hansei.GG",
    description: "Helping creators make a living doing what they love.",
    images: ["/mascot/mascot-twitter.png"],
  },
  icons: {
    icon: "/mascot/mascot_.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
