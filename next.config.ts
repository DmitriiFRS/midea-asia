import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     images: {
          formats: ["image/webp"],
          remotePatterns: [
               {
                    protocol: "http",
                    hostname: "**localhost**",
               },
          ],
     },
};

export default nextConfig;
