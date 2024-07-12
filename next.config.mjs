/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['~'] = path.join(__dirname, 'src')
    return config
  },
}

export default nextConfig
