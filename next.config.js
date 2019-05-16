// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack(config, options) {
    return config
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
})