

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
})
