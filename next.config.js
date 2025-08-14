/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // GitHub Pages needs a fully static export
  output: 'export',

  // Your repo name (so assets resolve correctly on Pages)
  basePath: isProd ? '/portfolio-website' : '',
  assetPrefix: isProd ? '/portfolio-website/' : '',

  // Disable Next image optimizer (not supported on static export)
  images: { unoptimized: true },

  // If you have dynamic routes, make sure they're pre-renderable
  trailingSlash: true, // optional but helps with Pages routing
};
