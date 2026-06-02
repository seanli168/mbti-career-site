export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://mbti-career-site.vercel.app/sitemap.xml",
  };
}