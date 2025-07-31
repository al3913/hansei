import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hansei.GG",
  description: "Hansei.GG - Helping Creators do what they Love",
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
