import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    allowedDevOrigins: ['3000-cs-553118797525-default.cs-europe-west4-pear.cloudshell.dev'],
  },
};

export default nextConfig;
