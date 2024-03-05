/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
    ],
  },
};

module.exports = nextConfig;
