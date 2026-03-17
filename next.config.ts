import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Uncomment for static export (disables API routes)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
