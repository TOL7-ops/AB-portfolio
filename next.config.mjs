import remotePatterns from "./image-hosts.config.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns,
    unoptimized: true, // Disable image optimization to prevent blur
  },
};

export default nextConfig;
