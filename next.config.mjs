/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  sassOptions: {
    includePaths: ['./public/styles'],
  },
  images: {
    domains: [],
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Performance optimizations
  experimental: {
    optimizeCss: true, // CSS minification
    optimizePackageImports: ['swiper', 'react-modal-video', 'aos', 'bootstrap'], // Tree-shake heavy packages
  },
  // Production source maps disabled for faster builds and smaller size
  productionBrowserSourceMaps: false,
};

export default nextConfig;
