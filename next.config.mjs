/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: 'rickandmortyapi.com' }, { hostname: 'localhost' }, { hostname: 'example.com' }],
    loader: 'default'
  }
};

export default nextConfig;
