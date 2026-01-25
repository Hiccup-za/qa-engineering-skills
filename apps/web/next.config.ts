import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Optimize barrel file imports for lucide-react
    // Automatically transforms barrel imports to direct imports at build time
    // This provides 15-70% faster dev boot, 28% faster builds, 40% faster cold starts
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
