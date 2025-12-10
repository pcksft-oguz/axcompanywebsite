/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./public/styles'],
  },
  images: {
    domains: [],
    unoptimized: false,
  },
};

export default nextConfig;
