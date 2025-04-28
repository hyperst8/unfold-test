import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://media*.giphy.com/**")],
  }
};

export default nextConfig;
