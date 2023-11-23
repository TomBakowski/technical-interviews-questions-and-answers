// next.config.js
const { withContentlayer } = require('next-contentlayer')
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// });

/** @type {import('next').NextConfig} */
const nextConfig = { 
  reactStrictMode: true, 
  swcMinify: true, 
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'], }

// module.exports = withMDX(withContentlayer(nextConfig))
module.exports = withContentlayer(nextConfig)