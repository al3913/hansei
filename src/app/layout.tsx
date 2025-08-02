import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hansei.GG",
  description: "Hansei.GG - Helping creators make a living doing what they love",
  openGraph: {
    title: "Hansei.GG",
    description: "Helping creators make a living doing what they love.",
    images: [
      {
        url: "/mascot/colored-mascot.svg", // Use a PNG or JPG, not SVG
        width: 1200,
        height: 630,
        alt: "Hansei mascot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hansei.GG",
    description: "Helping creators make a living doing what they love.",
    images: ["/mascot/colored-mascot.svg"],
  },
  icons: {
    icon: "/mascot/mascot-note-taking-svg.svg",
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
        className={`font-tthoves antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
