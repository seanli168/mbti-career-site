import { MetadataRoute } from "next";
import { personalities } from "@/data/personalities";
import { guides } from "@/data/guides";
import { compareList } from "@/data/compare";

const SITE_URL = "https://your-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1. 静态页面
  const staticRoutes = [
    "",
    "/test",
    "/careers",
    "/guides",
    "/compare",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
  }));

  // 2. Careers 页面（16个人格）
  const careerRoutes = personalities.map((p) => ({
    url: `${SITE_URL}/careers/${p.type.toLowerCase()}`,
    lastModified: now,
  }));

  // 3. Guides 页面（100+ SEO pages）
  const guideRoutes = guides.map((slug) => ({
    url: `${SITE_URL}/guides/${slug}`,
    lastModified: now,
  }));

  // 4. Compare 页面（120+组合）
  const compareRoutes = compareList.map((item) => ({
    url: `${SITE_URL}/compare/${item.slug}`,
    lastModified: now,
  }));

  return [
    ...staticRoutes,
    ...careerRoutes,
    ...guideRoutes,
    ...compareRoutes,
  ];
}