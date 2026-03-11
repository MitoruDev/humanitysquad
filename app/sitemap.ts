import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://humanitysquad.de"; // Anpassen an eure Domain
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/einsaetze`, lastModified: new Date() },
    { url: `${base}/spenden`, lastModified: new Date() },
    { url: `${base}/impressum`, lastModified: new Date() },
    { url: `${base}/datenschutz`, lastModified: new Date() },
  ];
}
