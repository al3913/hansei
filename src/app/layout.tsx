import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hansei.GG",
  description: "Hansei.GG - Helping creators make a living doing what they love",
  icons: {
    icon: "/mascot/colored-mascot.svg",
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
