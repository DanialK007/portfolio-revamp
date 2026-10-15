import React from "react";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://kaungkhantkyaw.online"),
  title: "Kcube's Portfolio — Kaung Khant Kyaw",
  description:
    "Frontend Developer from Mandalay, Myanmar — crafting functional and user-centered digital products with visually stunning designs.",
  keywords: [
    "frontend developer",
    "web developer",
    "portfolio",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Mandalay",
    "Myanmar",
    "Kaung Khant Kyaw",
    "Kcube",
  ],
  authors: [{ name: "Kaung Khant Kyaw" }],
  creator: "Kaung Khant Kyaw",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaungkhantkyaw.online",
    siteName: "Kcube's Portfolio",
    title: "Kcube's Portfolio — Kaung Khant Kyaw",
    description:
      "Frontend Developer from Mandalay, Myanmar — crafting functional and user-centered digital products with visually stunning designs.",
    images: [
      {
        url: "/img/link-preview.png",
        width: 1200,
        height: 630,
        alt: "Kcube's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kcube's Portfolio — Kaung Khant Kyaw",
    description:
      "Frontend Developer from Mandalay, Myanmar — crafting functional and user-centered digital products with visually stunning designs.",
    images: ["/img/link-preview.png"],
    creator: "@DanialK007",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/Kcube.svg" type="image/svg+xml" />
      </head>
      <body className={`bg-black text-white/80 overflow-x-hidden ${lexendDeca.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
