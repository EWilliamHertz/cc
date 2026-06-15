import type { NextConfig } from "next";

// new code
const nextConfig: NextConfig = {
  allowedDevOrigins: ['3000-cs-553118797525-default.cs-europe-west4-pear.cloudshell.dev'],
  serverExternalPackages: ["@prisma/client", "prisma"],
    
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