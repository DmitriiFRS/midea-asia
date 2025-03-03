import type { NextConfig } from "next";

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

export default nextConfig;
