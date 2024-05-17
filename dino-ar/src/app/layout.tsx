import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dino-AR",
  description: "Established in 2024",
  metadataBase: new URL('https://dino-ar-teal.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="/dinoAr.jpg" sizes="any" />
        {children}</body>
    </html>
  );
}
