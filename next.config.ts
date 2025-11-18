import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Temporarily disabled reactCompiler due to Turbopack compatibility issue
  // reactCompiler: true,
};

export default nextConfig;
