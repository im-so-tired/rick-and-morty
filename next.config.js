/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['rickandmortyapi.com']
  },
  reactStrictMode: false
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/characters/server'
  //     }
  //   ];
  // }
};

module.exports = nextConfig;
