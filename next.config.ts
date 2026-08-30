import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Increase body size limit for large video files
  serverRuntimeConfig: {
    maxFileSize: '250mb',
  },
  // Enable static file serving for large files
  experimental: {
    serverActions: {
      bodySizeLimit: '250mb',
    },
  },
  // Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    // Next 16 requires every quality used with <Image quality={n}> to be declared
    // here. 75 is the default, 85 is used on /for-investors, 100 in navbar,
    // who-we-are, investor-founder and team.
    qualities: [75, 85, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
