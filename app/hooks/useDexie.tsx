"use client";

import { populateDexieDB } from "@/app/api/controllers";
import { useEffect } from "react";

export default function useDexie() {
  useEffect(() => {
    const initializeDexie = async () => {
      try {
        await populateDexieDB();
      } catch (err) {
        console.error("Error initializing Dexie:", err);
      }
    };

    initializeDexie();
  }, []);

  return <div />;
}
