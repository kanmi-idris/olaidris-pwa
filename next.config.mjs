/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

console.log("loading the next config");

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  fallbacks: {
    document: "/offline",
  },
  scope: "/",
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  customWorkerDir: "worker", // This tells next-pwa where to find the custom worker
  // buildExcludes: [/middleware-manifest.json$/, /\.map$/, /^workbox-(.)*\.js$/],
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default withPWA(nextConfig);
