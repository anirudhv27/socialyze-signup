/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    AIRTABLE_API_KEY: 'keysirngLYhdQL89S'
  }
}

module.exports = {
  env: {
    customKey: 'my-value',
  },
}

module.exports = nextConfig
