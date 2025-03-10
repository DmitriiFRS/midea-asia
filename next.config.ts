import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
     images: {
          formats: ["image/webp"],
          remotePatterns: [
               {
                    protocol: "http",
                    hostname: "**localhost**",
               },
               {
                    protocol: "https",
                    hostname: "admin.climate-academy.uz",
               },
          ],
     },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
