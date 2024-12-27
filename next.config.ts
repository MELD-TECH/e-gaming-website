import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prince-arinze.github.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    POSTMARK_API_KEY: process.env.POSTMARK_API_KEY,
    POSTMARK_TO: process.env.POSTMARK_TO,
    POSTMARK_FROM: process.env.POSTMARK_FROM
  }
};

export default nextConfig;
