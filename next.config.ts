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
  },
};

export default nextConfig;
