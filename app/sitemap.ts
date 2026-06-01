import { personalities } from "../data/personalities";

export default function sitemap() {
  const baseUrl = "https://your-domain.com";

  const personalityPages = personalities.map((personality) => ({
    url: `${baseUrl}/careers/${personality.type.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },

    ...personalityPages,
  ];
}