import type { NextConfig } from "next";

// Fully static site: `next build` writes plain HTML/CSS/JS to ./out.
// No API routes, no server, no database.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
