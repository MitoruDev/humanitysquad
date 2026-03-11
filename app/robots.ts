import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://humanitysquad.de/sitemap.xml", // Anpassen an eure Domain
  };
}
