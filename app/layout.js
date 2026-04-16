import React from "react";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="description"
          content="Hey there! I'm Kaung Khant Kyaw, a passionate individual from Mandalay on a journey through the fascinating world of programming and web development."
        />
        <meta
          property="og:image"
          content="https://kaungkhantkyaw.online/img/link-preview.png"
        />
        <meta property="og:site_name" content="Kcube's Portfolio" />
        <meta property="og:title" content="Kcube's Portfolio" />
        <meta
          property="og:description"
          content="Hey there! I'm Kaung Khant Kyaw, a passionate individual from Mandalay on a journey through the fascinating world of programming and web development."
        />
        <meta property="og:url" content="https://kaungkhantkyaw.online/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kcube's Portfolio" />
        <meta
          name="twitter:image"
          content="https://kaungkhantkyaw.online/img/link-preview.png"
        />
        <meta
          property="twitter:description"
          content="Hey there! I'm Kaung Khant Kyaw, a passionate individual from Mandalay on a journey through the fascinating world of programming and web development."
        />
        <title>Kcube's Portfolio</title>
        <link rel="icon" href="/img/Kcube.svg" />
      </head>
      <body className={`bg-black text-white/80 overflow-x-hidden ${lexendDeca.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
