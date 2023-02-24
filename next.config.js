/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "james.brooks.page"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
