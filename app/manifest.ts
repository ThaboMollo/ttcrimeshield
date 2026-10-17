import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.legalName} — VIP Protection & Vehicle Recovery`,
    short_name: site.name,
    description: site.blurb,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#070707",
    lang: "en-ZA",
    dir: "ltr",
    categories: ["business", "security"],
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
