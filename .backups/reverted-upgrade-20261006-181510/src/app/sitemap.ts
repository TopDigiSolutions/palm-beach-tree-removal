import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://palmbeachtreeremoval.com";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/gallery`, changeFrequency: "monthly", priority: 0.8 },
    ...siteConfig.services.map(service => ({ url: `${base}/services/${service.id}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
