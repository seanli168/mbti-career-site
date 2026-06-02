import { MetadataRoute } from "next";
import { personalities } from "../data/personalities";
import { guides } from "../data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com"; // ← 后面换成你真实域名

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/test`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // 1️⃣ careers 页面
  const careerPages: MetadataRoute.Sitemap = personalities.map((p) => ({
    url: `${baseUrl}/careers/${p.type.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 2️⃣ guides 页面（SEO核心流量）
  const guidePages: MetadataRoute.Sitemap = guides.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...careerPages, ...guidePages];
}