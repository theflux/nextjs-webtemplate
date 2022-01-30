const withLess = require('next-with-less');


module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    
  },
  env: {
    buildtype: 'development',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
})