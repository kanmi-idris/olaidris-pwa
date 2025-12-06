"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Mode = "dev" | "eng" | "creative";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("dev");

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div
        className={`transition-colors duration-500 ease-in-out min-h-screen ${
          mode === "dev"
            ? "bg-[#0a0a0a] text-[#00ff41]" // Matrix/Terminal vibe
            : mode === "eng"
            ? "bg-[#f0f2f5] text-[#1a365d]" // Clean Engineering/Blueprint vibe
            : "bg-[#111] text-[#fff]" // Creative/Dark Mode vibe
        }`}
      >
        {children}
      </div>
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
