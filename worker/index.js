// import { CacheableResponsePlugin } from "workbox-cacheable-response";
// import { ExpirationPlugin } from "workbox-expiration";
// import { precacheAndRoute } from "workbox-precaching";
// import { registerRoute } from "workbox-routing";
// import {
//   CacheFirst,
//   NetworkFirst,
//   StaleWhileRevalidate,
// } from "workbox-strategies";

// // Precache and route static assets
// precacheAndRoute(self.__WB_MANIFEST);

// // Cache page navigations with a Network First strategy
// registerRoute(
//   ({ request }) => request.mode === "navigate",
//   new NetworkFirst({
//     cacheName: "pages",
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//     ],
//   })
// );

// // Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
// registerRoute(
//   ({ request }) =>
//     request.destination === "style" ||
//     request.destination === "script" ||
//     request.destination === "worker",
//   new StaleWhileRevalidate({
//     cacheName: "assets",
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//     ],
//   })
// );

// // Cache images with a Cache First strategy
// registerRoute(
//   ({ request }) => request.destination === "image",
//   new CacheFirst({
//     cacheName: "images",
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//       new ExpirationPlugin({
//         maxEntries: 50,
//         maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
//       }),
//     ],
//   })
// );

// // Cache API requests with a Network First strategy
// registerRoute(
//   ({ url }) => url.pathname.startsWith("/api/"),
//   new NetworkFirst({
//     cacheName: "api-cache",
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//     ],
//   })
// );
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";

// Precache and route static assets
console.log("Service Worker: Execution started");
console.log("self.__WB_MANIFEST:", self.__WB_MANIFEST);

try {
  if (self.__WB_MANIFEST) {
    console.log("Precaching manifest found. Starting precacheAndRoute()");
    precacheAndRoute(self.__WB_MANIFEST);
    console.log("Precaching completed successfully");
  } else {
    console.warn("Precache manifest not found. Skipping precacheAndRoute().");
  }
} catch (error) {
  console.error("Precaching failed:", error);
}

// Cache page navigations with a Cache First strategy
registerRoute(
  ({ request }) => request.mode === "navigate",
  new CacheFirst({
    cacheName: "pages",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "worker",
  new StaleWhileRevalidate({
    cacheName: "assets",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);

// Cache images with a Cache First strategy
registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  })
);

// Cache API requests with a Network First strategy
registerRoute(
  ({ url }) => url.pathname.startsWith("/api/"),
  new CacheFirst({
    cacheName: "api-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);
