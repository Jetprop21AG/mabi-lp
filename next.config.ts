import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
);

const nextConfig: NextConfig = {
  // output: "export", // Uncomment for static export (disables API routes)
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
