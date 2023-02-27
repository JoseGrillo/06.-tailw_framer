/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // mdxRs: true,
  },
}

module.exports = nextConfig
// const withMDX = require('@next/mdx')();
// module.exports = withMDX(nextConfig);