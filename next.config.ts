import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    URL: process.env.URL || "http://localhost:3000",
  },
};

export default nextConfig;
