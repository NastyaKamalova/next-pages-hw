/**
 * @type {import('next').NextConfig}
 */

const repo = 'next-pages-hw'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


const nextConfig = process.env.NODE_ENV === 'production' ? {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: true,
  },
} : {
  basePath: basePath,
  images: {
    domains: ['via.placeholder.com'],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  output: 'export'
};

export default nextConfig;