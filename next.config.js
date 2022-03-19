/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en-US", "pl"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
