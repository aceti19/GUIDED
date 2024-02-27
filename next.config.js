/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
const path = require('path');

module.exports = {
  webpack: (config, options) => {
    config.resolve.alias['@app'] = path.join(__dirname, 'app');
    return config;
  },
};
