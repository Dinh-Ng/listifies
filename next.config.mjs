/** @type {import('next').NextConfig} */

import path from 'path'

const __dirname = new URL('.', import.meta.url).pathname

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
