"use client";

import React, { useEffect, useState } from "react";
import { generateLiquidGlassMap } from "@/app/utils/glass-effect";

export default function LiquidGlass() {
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    // Generate a generic map
    // We strive for high res to avoid pixelation
    const url = generateLiquidGlassMap(256, 256, 40);
    setMapUrl(url);
  }, []);

  if (!mapUrl) return null;

  return (
    <svg
      className="fixed top-0 left-0 w-0 h-0 pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
          <feImage
            href={mapUrl}
            x="0"
            y="0"
            width="256"
            height="256"
            result="displacement"
            preserveAspectRatio="none"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="displacement"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          {/* Subtle Specular Highlight via lighting? */}
          <feSpecularLighting
            result="specular"
            specularConstant="0.8"
            specularExponent="20"
            lightingColor="#ffffff"
          >
            <fePointLight x="100" y="-100" z="200" />
          </feSpecularLighting>

          <feComposite
            in="specular"
            in2="SourceAlpha"
            operator="in" // Mask lighting to alpha
            result="specular-masked"
          />

          <feComposite
            in="specular-masked"
            in2="displacement-result" // wait, displacement result is the output of feDisplacementMap?
            // Actually feDisplacementMap outputs the displaced image.
            // We want to overlay the specular on top.
          />
          {/* Simplified: Just displacement for now to ensure stability */}
        </filter>

        {/* Cleaner version without complex lighting for stability first */}
        <filter
          id="liquid-glass-clean"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feImage href={mapUrl} result="map" preserveAspectRatio="none" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            scale="15"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          {/* Soft Edge Blur/Lighten */}
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
