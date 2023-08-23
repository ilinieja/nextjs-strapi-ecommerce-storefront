/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "lvh.me",
        port: "1337",
      },
    ],
  },
};

module.exports = nextConfig;
