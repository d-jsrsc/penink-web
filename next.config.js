/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // basePath: '/docs',
  env: {},
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
