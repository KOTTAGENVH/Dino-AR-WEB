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
        <title>DinoAR</title>
        <link rel="icon" href="/image/favicon.ico" sizes="any" />
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
