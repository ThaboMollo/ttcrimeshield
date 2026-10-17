import type { NextConfig } from "next";
import { site } from "./lib/site";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  /**
   * The old ttcrimeshield.vercel.app alias stays reachable forever, so without
   * this it serves a byte-identical second copy of the site and competes with
   * the real domain in search. Matching on host (not a path) means preview
   * deployments on their own *.vercel.app URLs are untouched.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: site.legacyHost }],
        destination: `${site.url}/:path*`,
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
