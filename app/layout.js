"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Danial's Portfolio</title>
        <link rel="icon" href="/img/Kcube.svg" />
      </head>
      <body className={`bg-[#7c0b27] text-white overflow-hidden ${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
