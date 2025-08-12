"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
// import LenisProvider from "./LenisProvider";

const inter = Inter({ subsets: ["latin"] });

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
          content="https://kcube-portfolio.vercel.app/img/link-preview.png"
        />
        <meta property="og:site_name" content="Kcube's Portfolio" />
        <meta property="og:title" content="Kcube's Portfolio" />
        <meta
          property="og:description"
          content="Hey there! I'm Kaung Khant Kyaw, a passionate individual from Mandalay on a journey through the fascinating world of programming and web development."
        />
        <meta property="og:url" content="https://kcube-portfolio.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kcube's Portfolio" />
        <meta
          name="twitter:image"
          content="https://kcube-portfolio.vercel.app/img/link-preview.png"
        />
        <meta
          property="twitter:description"
          content="Hey there! I'm Kaung Khant Kyaw, a passionate individual from Mandalay on a journey through the fascinating world of programming and web development."
        />
        <title>Kcube's Portfolio</title>
        <link rel="icon" href="/img/Kcube.svg" />
      </head>
      <body
        className={`bg-black text-white/80 overflow-x-hidden myL oad ${inter.className}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
