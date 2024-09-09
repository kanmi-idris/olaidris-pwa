"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function OfflineHandler() {
  useEffect(() => {
    // Register the service worker
    // if ("serviceWorker" in navigator) {
    //   window.addEventListener("load", () => {
    //     navigator.serviceWorker.register("/sw.js");
    //   });
    // }

    function handleOnline() {
      toast.success("You are online.");
    }

    function handleOffline() {
      toast.error("You are offline. Some features may be unavailable.");
    }

    // Check initial status
    if (!navigator.onLine) {
      handleOffline();
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return null;
}
