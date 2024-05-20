import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dino-AR",
  description: "Established in 2024",
  metadataBase: new URL("https://dino-ar-web.vercel.app"),
};

const structuredData = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  "name": "Dino-AR",
  "url": "https://dino-ar-web.vercel.app",
  "description": "Established in 2024",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://dino-ar-web.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
  // Add other properties as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Established in 2024" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dino-ar-web.vercel.app" />
        <link rel="icon" href="/image/favicon.ico" sizes="any" />
        <title>Dino-AR</title>

        {/* Open Graph Meta Tags for social media */}
        <meta property="og:title" content="Dino-AR" />
        <meta property="og:description" content="Established in 2024" />
        <meta property="og:url" content="https://dino-ar-web.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dino-ar-web.vercel.app/dinosaurs" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body className={inter.className}>
        {/*Ban inspect elements*/}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("contextmenu", function(event) {
                event.preventDefault();
                alert("Inspect Elements Not Allowed!");
              });
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
