import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://palmbeachtreeremoval.com";
  const now = new Date();

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/service-areas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  // Service detail pages
  const servicePages: MetadataRoute.Sitemap = siteConfig.services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Service area pages
  const areaPages: MetadataRoute.Sitemap = siteConfig.serviceAreaDetails.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...corePages, ...servicePages, ...areaPages];
}
