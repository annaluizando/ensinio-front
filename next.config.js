/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
