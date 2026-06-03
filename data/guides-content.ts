export type GuideContent = {
  title: string;
  category: string;
};

export function getGuideContent(slug: string): GuideContent {
  const title = slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

  let category = "career";

  if (slug.includes("high-paying")) {
    category = "salary";
  }

  if (slug.includes("remote")) {
    category = "remote";
  }

  if (slug.includes("major")) {
    category = "education";
  }

  return {
    title,
    category,
  };
}