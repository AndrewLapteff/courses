/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'cdn.coursehunter.net',
        port: '',
        pathname: '/**', // Allow all paths
      },
    ],
  },
}

export default nextConfig
