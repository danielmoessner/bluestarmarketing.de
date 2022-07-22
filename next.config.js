const pathTranslations = {
  en: {
    "/kontakt": "/contact",
    "/b2bmarketingstrategie": "/b2bmarketingstrategy",
    "/marketingkampagnen": "/marketingcampaigns",
    "/fuerdich": "/foryou",
    "/kunden": "/customers",
  },
};

const translationRewrites = Object.entries(pathTranslations["en"]).map((k) => ({
  source: `/en${k[1]}`,
  destination: `/en${k[0]}`,
  locale: false,
}));

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
  },
  reactStrictMode: true,
  async rewrites() {
    return translationRewrites;
  },
};

module.exports = nextConfig;
