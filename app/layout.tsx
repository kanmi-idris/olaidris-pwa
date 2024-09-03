import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const viewport: Viewport = {
  themeColor: "#04080F",
};

export const metadata: Metadata = {
  title: "Olasunkanmi Idris | Software Engineer",
  description:
    "Olasunkanmi Idris's personal portfolio showcasing his expertise as a software engineer. Dive into his experience, projects, and skills.",
  manifest: "/manifest.json",
  // themeColor: "#04080F",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "OlaIdris",
  },
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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#04080F" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
