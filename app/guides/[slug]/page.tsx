import { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import { getGuideContent } from "@/data/guides-content";
import Link from "next/link";

type Props = { params: { slug: string } };

// 静态生成所有 guide 页面
export async function generateStaticParams() {
  return guides.map((slug) => ({ slug }));
}

// 自动生成 SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!guides.includes(params.slug)) return {};

  const guide = getGuideContent(params.slug);

  return {
    title: guide.title,
    description: `${guide.title} - Full MBTI career guide, strengths, weaknesses, and recommended jobs.`,
    openGraph: {
      title: guide.title,
      description: `${guide.title} - Full MBTI career guide.`,
      type: "article",
    },
  };
}

// FAQ Schema
function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this career path suitable for me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your personality type, skills, and interests."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is MBTI for career guidance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MBTI provides a general framework to understand personality preferences and related career paths."
        }
      }
    ]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function GuidePage({ params }: Props) {
  if (!guides.includes(params.slug)) notFound();

  const guide = getGuideContent(params.slug);

  // 自动生成相关文章内链
  const relatedGuides = guides
    .filter(s => s !== params.slug)
    .slice(0, 6);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <FAQSchema />

      <article>
        <h1 className="text-5xl font-bold mb-6">{guide.title}</h1>

        <p className="text-lg text-gray-600 mb-10">
          Comprehensive guide to {guide.title.toLowerCase()}. Explore recommended jobs, strengths, weaknesses, and career tips for this MBTI type.
        </p>

        {/* 内容示例段落 */}
        {Array.from({ length: 8 }).map((_, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-3xl font-bold mb-4">Section {i + 1}</h2>
            <p className="text-gray-700 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Curabitur pretium tincidunt lacus, sed venenatis arcu sagittis non.
            </p>
          </section>
        ))}

        {/* 内部推荐相关文章 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedGuides.map(slug => (
              <Link key={slug} href={`/guides/${slug}`} className="text-blue-600 hover:underline">
                {getGuideContent(slug).title}
              </Link>
            ))}
          </div>
        </section>

      </article>

    </main>
  );
}