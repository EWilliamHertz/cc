import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Move this to the top level, NOT inside experimental
  allowedDevOrigins: ['3000-cs-553118797525-default.cs-europe-west4-pear.cloudshell.dev'],
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  experimental: {
    // Keep your other experimental flags here if needed
  },
};

export default nextConfig;