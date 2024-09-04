/** @type {import('next').NextConfig} */

import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  swSrc: "public/custom-sw.js",
  sw: "/custom-sw.js",
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    modern: true,
    serviceWorker: true,
  },
  cache: {
    maxAge: 31536000000, // 1 year
    staleWhileRevalidate: 86400000, // 1 day
  },
};

export default withPWA(nextConfig);
