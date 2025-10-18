import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'img.qa.gloria.com.pe.s3-website-us-east-1.amazonaws.com',
        pathname: '**',
      },

      {
        protocol: 'https',
        hostname: 's3.us-east-1.amazonaws.com',
        pathname: '/img.qa.gloria.com.pe/**',
      },
    ],
  },
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  /* config options here */
  reactStrictMode: true, // Habilita modo estricto en React
  sassOptions: {
    includePaths: ["./styles"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
    },
  },
};

export default nextConfig;
