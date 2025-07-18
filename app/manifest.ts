import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baro Ki'Teer Item Checklist",
    short_name: "Baro Ki'Teer Checklist",
    description:
      "A comprehensive checklist and shopping list for all Baro Ki'Teer items in Warframe. Track, plan, and never miss a rare offering.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
