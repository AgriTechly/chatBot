/** @type {import('next').NextConfig} */
const nextConfig = {
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
    // add static images to the list
    domains: ["agritechly.tech"],
    // add static folder to the list
    path: "/static",
  },
};

module.exports = nextConfig;
