import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import AvatarAssistant from "@/components/AvatarSection";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Déplacez le composant CurvedLinesBackground dans un fichier séparé
// ou gardez-le ici mais utilisez-le dans le rendu

const CurvedLinesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-20">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        {/* Lignes courbes aléatoires */}
        <path
          d="M-100,200 C300,100 500,400 700,300 C900,200 1100,500 1300,400 C1500,300 1700,600 2020,500"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />
        <path
          d="M-100,600 C200,500 400,800 600,700 C800,600 1000,900 1200,800 C1400,700 1600,1000 2020,900"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />
        <path
          d="M-100,800 C200,700 400,1000 600,900 C800,800 1000,1100 1200,1000 C1400,900 1600,1200 2020,1100"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />
        <path
          d="M-100,400 C200,300 400,600 600,500 C800,400 1000,700 1200,600 C1400,500 1600,800 2020,700"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />
        {/* Lignes verticales courbes */}
        <path
          d="M300,-100 C400,200 300,500 300,800 C300,1100 400,1400 300,1180"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />
        <path
          d="M600,-100 C700,200 600,500 600,800 C600,1100 700,1400 600,1180"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />
        <path
          d="M900,-100 C1000,200 900,500 900,800 C900,1100 1000,1400 900,1180"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />
        <path
          d="M1200,-100 C1300,200 1200,500 1200,800 C1200,1100 1300,1400 1200,1180"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />
        <path
          d="M1500,-100 C1600,200 1500,500 1500,800 C1500,1100 1600,1400 1500,1180"
          stroke="black"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Johan Bilé - Data Engineer",
  description: "Create by Johan Bilé - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {/* Ajoutez CurvedLinesBackground ici */}
        <CurvedLinesBackground />
        <ClientBody>{
        children}
        <AvatarAssistant />
        </ClientBody>
      </body>
    </html>
  );
}