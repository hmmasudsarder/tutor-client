import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com", // Replace with the actual hostname
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // Replace with the actual hostname
      },
      {
        protocol: "http",
        hostname: "**", // Allow all hostnames (if necessary)
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;