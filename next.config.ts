import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: ["lektos-pl.dev.41.pl", "*.dev.41.pl"],
};
export default nextConfig;
