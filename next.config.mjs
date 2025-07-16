/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'globalassets.starbucks.com',
      },
      {
        protocol: 'https',
        hostname: 'www.digitalassets.starbucks.eu',
      },
      {
        protocol: 'https',
        hostname: 'www.starbucks.de',
      }
    ],
  },
};

export default nextConfig; 