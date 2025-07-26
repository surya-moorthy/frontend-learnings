import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images : {
    remotePatterns: [
      {
        hostname: 'aceternity.com',
      }
    ]
  }
};

export default nextConfig;
