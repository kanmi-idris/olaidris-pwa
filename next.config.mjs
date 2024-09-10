/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  buildExcludes: [/middleware-manifest.json$/],
  runtimeCaching,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default withPWA(nextConfig);
