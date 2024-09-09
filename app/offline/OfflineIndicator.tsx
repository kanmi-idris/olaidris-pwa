"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function OfflineHandler() {
  useEffect(() => {
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
