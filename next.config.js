
const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: process.env.NEXT_BASE_PATH || '',
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'out' + process.env.NEXT_BASE_PATH || '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig