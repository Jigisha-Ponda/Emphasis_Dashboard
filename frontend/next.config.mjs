import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, ".."),
  webpack: (config) => {
    // Avoid warnings for optional @next/swc-* packages that aren't installed
    if (Array.isArray(config.snapshot?.managedPaths)) {
      const token = "/@next/swc-";
      config.snapshot.managedPaths = config.snapshot.managedPaths.filter(
        (p) => typeof p !== "string" || !p.includes(token)
      );
    }
    return config;
  }
};

export default nextConfig;
