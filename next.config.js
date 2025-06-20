/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'onnadigital.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig 