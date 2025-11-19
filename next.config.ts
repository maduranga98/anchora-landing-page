// Removed Next.js type import to avoid requiring 'next' types in environments where they're not installed.
const nextConfig = {
  /* config options here */
  output: "export",

  // Disable experimental features that might cause issues
  experimental: {
    // Disable turbo if you encounter issues
    // turbo: undefined,
  },

  // Ensure proper image handling for static export
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Production optimizations
  compress: true,
  poweredByHeader: false,

  // Note: Security headers should be configured in Firebase hosting (firebase.json)
  // Static export doesn't support Next.js headers() function
  // See PRODUCTION-CHECKLIST.md for Firebase hosting header configuration
};

export default nextConfig;
