import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/browser-sim",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
