// next.config.js
const path = require('path')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,                  // 啟用 SWC 壓縮
  images: {
    formats: ['image/avif', 'image/webp'],  // 自動輸出現代格式
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}
