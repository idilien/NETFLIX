/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['raw.githubusercontent.com']
  }
}
const { withSuperjson } = require('next-superjson')
module.exports = nextConfig
module.exports = withSuperjson()(nextConfig)