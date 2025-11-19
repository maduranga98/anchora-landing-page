// Removed Next.js type import to avoid requiring 'next' types in environments where they're not installed.
const nextConfig = {
  /* config options here */
  output: "export",

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Disable experimental features that might cause issues
  experimental: {
    // Disable turbo if you encounter issues
    // turbo: undefined,
  },

  // Ensure proper image handling for static export
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize for production
  reactStrictMode: true,
};

export default nextConfig;
