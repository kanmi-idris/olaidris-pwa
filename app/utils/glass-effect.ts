export const generateLiquidGlassMap = (
  width: number,
  height: number,
  bezelWidth: number
): string => {
  if (typeof document === "undefined") return ""; // Server-side guard

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  // Surface function: Convex Squircle
  // y = 1 - (1 - x)^4
  const surfaceFunc = (x: number) => 1 - Math.pow(1 - x, 4);

  // Constants for refraction
  const maxDisplacement = 20; // Maximum pixel displacement

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // Calculate normalized coordinates (-1 to 1)
      const nx = (x / width) * 2 - 1;
      const ny = (y / height) * 2 - 1;

      // Distance from center (0 to 1)
      // For a capsule/rounded rect, we need to handle the "stretched" middle.
      // Ideally we generate a map for a generic circle and let SVG stretch it,
      // but let's try a simple radial approach for the "bezel" effect.
      // Or simply distance from the nearest edge?
      // Let's use a simple radial for now to simulate the "pill" effect.

      let dist = Math.sqrt(nx * nx + ny * ny);

      // We only care about the border (bezel)
      // Let's define the bezel as the outer 10-20%?
      // Actually, let's map "dist" from 0 (center) to 1 (edge).
      // The "bezel" is effectively 0->1 in the article's "distanceFromSide".
      // But here we are iterating pixels.

      // Let's assume the surface is flat in the middle and curves at the edge.
      // dist > 1 means outside.

      if (dist > 1) dist = 1;

      // Map dist to article's "x" (distance from border?)
      // The article says x=0 is edge, x=1 is end of bezel (start of flat).
      // So if dist=1 (edge), x=0. If dist=0 (center), x=1 (effectively).

      // Let's define bezel thickness in normalized units. e.g. 0.2
      // If dist > 1 - bezelThickness, we are in bezel.
      // x = (1 - dist) / bezelThickness

      const normalizedBezelThickness = Math.min(bezelWidth / (width / 2), 1);

      let displacementX = 0;
      let displacementY = 0;

      if (dist > 1 - normalizedBezelThickness) {
        // Inside the bezel
        const distFromEdge = 1 - dist;
        const xParam = distFromEdge / normalizedBezelThickness; // 0 at edge, 1 at flat start

        // Calculate height
        // const h = surfaceFunc(xParam);

        // Derivative (approx)
        const delta = 0.01;
        const y1 = surfaceFunc(Math.max(0, xParam - delta));
        const y2 = surfaceFunc(Math.min(1, xParam + delta));
        const derivative = (y2 - y1) / (2 * delta);

        // Normal is (-derivative, 1) rotated?
        // The normal points "inwards" or "upwards".
        // In 2D cross section: normal = (-dy/dx, 1).
        // We need the component parallel to the surface plane (Displacement).
        // Roughly, displacement is proportional to the slope.

        // Vector direction: Radial (from center)
        // angle = atan2(ny, nx)

        // Magnitude proportional to derivative?
        // Steep slope -> high refraction.
        // At x=1 (flat), derivative ~ 0.
        // At x=0 (edge), derivative is high.

        const magnitude = derivative * maxDisplacement; // scaled

        // Direction is towards center (or away? Concave/Convex).
        // Convex: light bends towards normal.
        // Effectively, it looks like it pulls things "in"?
        // Let's just use the radial direction.
        const angle = Math.atan2(ny, nx);

        displacementX = Math.cos(angle) * magnitude;
        displacementY = Math.sin(angle) * magnitude;
      }

      const pixelIndex = (y * width + x) * 4;

      // Map to 0-255 (128 is 0 displacement)
      // R = X, G = Y

      // Helper to map -max to +max -> 0 to 255
      const mapVal = (val: number) => Math.min(255, Math.max(0, 128 + val * 4)); // *4 arbitrary scale factor to fit in byte?
      // Actually, SVG filter uses "scale". The map should be normalized -1..1 -> 0..255?
      // The article says: "128 + x * 127" (where x is normalized 0..1 magnitude?)
      // Wait, "x = Math.cos(angle) * magnitude" (magnitude 0..1 normalized).
      // My magnitude is in pixels (approx).
      // Let's normalize it.

      const normX = displacementX / maxDisplacement;
      const normY = displacementY / maxDisplacement;

      data[pixelIndex] = 128 + normX * 127; // R
      data[pixelIndex + 1] = 128 + normY * 127; // G
      data[pixelIndex + 2] = 255; // B (unused/specular?)
      data[pixelIndex + 3] = 255; // A
    }
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
};
