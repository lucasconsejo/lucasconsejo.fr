/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io"],
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr"
  },
};

module.exports = nextConfig;
