/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  i18n,
  reactStrictMode: true,
};

module.exports = nextConfig;
// const nextTranslate = require("next-translate");
// module.exports = nextTranslate({
//   env: {
//     NEXT_PUBLIC_API: "http://localhost:3001/rcards",
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// });
