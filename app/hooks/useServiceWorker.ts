import { useEffect } from "react";

declare global {
  interface Window {
    workbox: any;
  }
}

export function useServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator && typeof window.workbox !== "undefined") {
      const wb = window.workbox;

      // Add event listeners for various Workbox events
      wb.addEventListener("installed", (event: any) => {
        console.log(`A new service worker has been installed: ${event.type}`);
        if (event.isUpdate) {
          console.log("New content is available; please refresh.");
          window.alert("New content is available; please refresh.");
        }
      });

      wb.addEventListener("controlling", () => {
        console.log("A new service worker is controlling the page.");
        // You can reload the page here to ensure the new service worker is used
        window.location.reload();
      });

      wb.addEventListener("activated", (event: any) => {
        console.log(`Service worker activated: ${event.type}`);
      });

      // Register the service worker after event listeners have been added
      wb.register();
    }
  }, []);
}
