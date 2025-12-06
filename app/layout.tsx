import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Providers from "./api/providers";
import "./globals.css";
import { ModeProvider } from "./components/home/ModeContext";
import LiquidGlass from "./components/ui/LiquidGlass";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const viewport: Viewport = {
  themeColor: "#04080F",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Olasunkanmi Idris | Software Engineer",
  description:
    "Olasunkanmi Idris's personal portfolio showcasing his expertise as a software engineer. Dive into his experience, projects, and skills.",
  authors: [
    { name: "Olasunkanmi IDRIS" },
    {
      name: "Olasunkanmi IDRIS",
      url: "https://linkedin.com/in/olaidris",
    },
  ],
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "OlaIdris",
    title: "Olasunkanmi Idris | Software Engineer",
    description:
      "Olasunkanmi Idris's personal portfolio showcasing his expertise as a software engineer. Dive into his experience, projects, and skills.",
    url: "https://olaidris.com",
    images: [
      {
        url: "https://olaidris.com/icons/icon-512.png",
        width: 512,
        height: 512,
      },
      {
        url: "https://olaidris.com/icons/icon-192.png",
        width: 192,
        height: 192,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Olasunkanmi Idris | Software Engineer",
    description:
      "Olasunkanmi Idris's personal portfolio showcasing his expertise as a software engineer. Dive into his experience, projects, and skills.",
    images: ["https://olaidris.com/icons/icon-512.png"],
    creator: "@idrisOlasunka13",
  },
  icons: [
    { rel: "icon", url: "/icons/favicon.ico", sizes: "16x16 32x32" },
    { rel: "icon", url: "/icons/icon-192.png", sizes: "192x192" },
    { rel: "icon", url: "/icons/icon-512.png", sizes: "512x512" },
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="OlaIdris" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        {/* Import Satoshi from Fontshare CDN */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          :root {
            --font-satoshi: 'Satoshi', sans-serif;
          }
        `,
          }}
        />
      </head>
      <body className={`${jetbrains.variable} font-sans`}>
        <Providers>
          <ModeProvider>
            {children}
            <Toaster position="top-center" richColors />
          </ModeProvider>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
