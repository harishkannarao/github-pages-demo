
const path = require('path')

const basePath = process.env.NEXT_BASE_PATH || ''

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: basePath,
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'out' + basePath,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig