import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'sinkpure.com',
      },
    ],
  },
};

export default nextConfig;
