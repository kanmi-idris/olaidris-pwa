/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    disable: !isProd,
  },
  // Add any other Next.js configuration options here
});

export default nextConfig;
